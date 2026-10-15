# Aktualności — jak dodać wpis

1. Wymyśl adres wpisu (slug), np. `transbet-na-targach-2027`. Będzie widoczny jako `/aktualnosci/transbet-na-targach-2027`.
2. Utwórz plik `content/aktualnosci/transbet-na-targach-2027.mdx`.
3. Utwórz folder `public/aktualnosci/transbet-na-targach-2027/` i wrzuć do niego zdjęcia:
   - `cover.jpg` — zdjęcie główne (okładka na liście i u góry wpisu),
   - `01.jpg`, `02.jpg`… — pozostałe zdjęcia (galeria pokaże je w kolejności nazw).

## Szablon pliku

```mdx
---
title: "Transbet na Targach 2027"
date: 2027-03-15
category: Wydarzenia
description: "Jedno–dwa zdania widoczne na liście aktualności i przy udostępnianiu."
---

Pierwszy akapit wpisu.

## Śródtytuł

Tekst z **pogrubieniem**, [linkiem](https://transbet.com.pl) i listą:

- punkt pierwszy
- punkt drugi

> Cytat wyróżniony pomarańczową linią.

<Galeria />
```

## Pola

| Pole | Wymagane | Opis |
| --- | --- | --- |
| `title` | tak | Tytuł wpisu |
| `date` | tak | Data w formacie `RRRR-MM-DD`; po polsku („15 marca 2027”) wyświetla się sama |
| `category` | tak | `Firma`, `Infrastruktura`, `Wydarzenia`, `Sponsoring` albo `Akademia betonu` (poradniki) |
| `description` | tak | Krótki opis na listę i do udostępniania |
| `cover` | nie | Inna nazwa okładki niż `cover.jpg` |
| `featured` | nie | `true` — wyróżnienie (zarezerwowane na przyszłość) |
| `draft` | nie | `true` — szkic: widać go tylko lokalnie, nie trafia na stronę |

## Elementy w treści

- `<Galeria />` — wszystkie zdjęcia z folderu wpisu poza okładką i zdjęciami wstawionymi w tekst; kliknięcie powiększa.
- `![Opis zdjęcia](02.jpg)` — pojedyncze zdjęcie z folderu wpisu w treści.
- `<Film src="film.mp4" />` — plik wideo z folderu wpisu.
- `<Wideo id="i14c5MSiSls" />` — film z YouTube (id z adresu), ładowany po kliknięciu.

Jeśli brakuje pola albo okładki, `npm run build` zatrzyma się z komunikatem, który wpis i co jest nie tak.
