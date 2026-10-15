# Zabezpieczenie bazy ofert pracy (Supabase)

**Problem.** Stary CMS zapisywał oferty publicznym kluczem Supabase (`NEXT_PUBLIC_SUPABASE_ANON_KEY`). Ten klucz jest jawny (trafia do przeglądarki), więc każdy, kto go zna, może dodać, zmienić lub usunąć ofertę albo wgrać plik do magazynu `images` – z pominięciem logowania do CMS.

**Rozwiązanie.**

- Publiczny klucz może w bazie tylko **czytać aktywne oferty** (tyle potrzebuje strona `/kariera`).
- Zapisy (CMS) idą przez serwer strony **tajnym kluczem serwisowym** `SUPABASE_SERVICE_ROLE_KEY`, dopiero po zalogowaniu do CMS. Klucz serwisowy omija zasady RLS, więc nie potrzebuje osobnych uprawnień.

Kod nowej strony jest już gotowy (`src/lib/supabase.ts`): gdy klucz serwisowy jest ustawiony, CMS używa jego; bez niego działa jak dotąd kluczem publicznym.

> ⚠️ Po kroku 3 przestanie działać CMS na **starej** stronie (zapisuje kluczem publicznym). Krok 3 wykonaj więc razem z przepięciem domeny transbet.com.pl na nową stronę albo zaraz po nim.

---

## Krok 1 – klucz serwisowy (można od razu)

1. Supabase → **Settings → API Keys** → przewiń do sekcji **Secret keys** → przy kluczu `default` kliknij ikonę oka / kopiowania (klucz zaczyna się od `sb_secret_…`). Jeśli tej sekcji nie ma, w zakładce **Legacy anon, service_role API keys** skopiuj klucz **`service_role`**. Oba działają tak samo. To klucz tajny – nie wklejaj go nigdzie poza poniższymi miejscami.
2. Dopisz do `.env.local` na komputerze:
   ```
   SUPABASE_SERVICE_ROLE_KEY=…
   ```
   i zrestartuj serwer deweloperski.
3. Vercel → projekt **nowy-transbet** → **Settings → Environment Variables** → dodaj `SUPABASE_SERVICE_ROLE_KEY` z zaznaczonym **Production** (i Preview) → **Deployments → ⋯ → Redeploy**.

## Krok 2 – sprawdzenie CMS (od razu po kroku 1)

Zaloguj się do `/cms` na nowej stronie, zmień coś w dowolnej ofercie (np. dodaj i usuń spację) i zapisz. Jeśli zapis działa, CMS korzysta już z klucza serwisowego.

## Krok 3 – zablokowanie zapisów kluczem publicznym (przy przepięciu domeny)

Supabase → **SQL Editor**.

### 3a. Podgląd obecnych ustawień (nic nie zmienia)

```sql
-- Czy RLS jest włączone na tabeli ofert
select relrowsecurity as rls_wlaczone from pg_class where oid = 'public.oferty'::regclass;

-- Obecne zasady na tabeli ofert
select policyname, cmd, roles, qual, with_check
from pg_policies where schemaname = 'public' and tablename = 'oferty';

-- Obecne zasady magazynu plików (bucket "images")
select policyname, cmd, roles, qual, with_check
from pg_policies where schemaname = 'storage' and tablename = 'objects';

-- Czy bucket "images" jest publiczny (zdjęcia ofert mają być widoczne)
select id, public from storage.buckets where id = 'images';
```

Jeśli w zasadach magazynu jest zasada zapisu (INSERT/UPDATE/DELETE/ALL), która **nie** wymienia słowa `images`, ale dotyczy wszystkich bucketów – usuń ją ręcznie po sprawdzeniu, że nie używa jej inna aplikacja.

### 3b. Zmiana

```sql
begin;

-- Tabela ofert: włącz RLS i zostaw publicznie tylko odczyt aktywnych ofert
alter table public.oferty enable row level security;

do $$
declare p record;
begin
  for p in select policyname from pg_policies where schemaname = 'public' and tablename = 'oferty' loop
    execute format('drop policy %I on public.oferty', p.policyname);
  end loop;
end $$;

create policy "oferty_publiczny_odczyt_aktywnych"
  on public.oferty for select
  to anon, authenticated
  using (archived = false);

-- Magazyn "images": usuń zasady pozwalające zapisywać / zmieniać / usuwać pliki
-- (odczyt zdjęć działa dalej, bo bucket jest publiczny)
do $$
declare p record;
begin
  for p in
    select policyname from pg_policies
    where schemaname = 'storage' and tablename = 'objects'
      and cmd in ('INSERT', 'UPDATE', 'DELETE', 'ALL')
      and (coalesce(qual, '') || coalesce(with_check, '')) ilike '%images%'
  loop
    execute format('drop policy %I on storage.objects', p.policyname);
  end loop;
end $$;

commit;
```

### 3c. Test (nic nie zapisuje – zmiany są wycofywane)

```sql
-- Publiczny klucz NIE może dodać oferty – oczekiwany błąd "violates row-level security policy"
begin;
set local role anon;
insert into public.oferty (slug, nazwa, miejsce, img, content) values ('test-rls', 'test', 'test', '', 'test');
rollback;

-- Publiczny klucz nadal widzi aktywne oferty – oczekiwana liczba > 0
begin;
set local role anon;
select count(*) as aktywne_oferty from public.oferty;
rollback;
```

Na koniec otwórz `/kariera` (oferty widoczne) i zapisz coś w `/cms` (zapis działa).

## Awaryjnie – cofnięcie kroku 3 dla tabeli

```sql
alter table public.oferty disable row level security;
```

(Usuniętych zasad magazynu to nie przywraca – w razie potrzeby odtwórz je z wyniku podglądu z kroku 3a.)
