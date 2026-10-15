import { isCmsSession, unauthorized } from '@/lib/cms-auth';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

// GET - pobierz wszystkie aktywne oferty
export async function GET() {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const { data: oferty, error } = await supabase
      .from('oferty')
      .select('*')
      .eq('archived', false)
      .order('nazwa', { ascending: true });

    if (error) {
      console.error('Błąd pobierania ofert:', error);
      return NextResponse.json({ error: 'Błąd pobierania ofert' }, { status: 500 });
    }

    return NextResponse.json({ oferty: oferty || [] });
  } catch (error) {
    console.error('Błąd pobierania ofert:', error);
    return NextResponse.json({ error: 'Błąd pobierania ofert' }, { status: 500 });
  }
}

// POST - dodaj nową ofertę
export async function POST(request: NextRequest) {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const body = await request.json();
    const { nazwa, miejsce, img, content, recruitment_url } = body;

    if (!nazwa || !miejsce || !content) {
      return NextResponse.json(
        { error: 'Brak wymaganych pól' },
        { status: 400 }
      );
    }

    if (recruitment_url && !isValidHttpUrl(recruitment_url)) {
      return NextResponse.json({ error: 'Link do rekrutacji musi zaczynać się od http:// lub https://' }, { status: 400 });
    }

    // Generuj slug z nazwy
    const slug = nazwa
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ł/g, 'l')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Sprawdź czy slug już istnieje
    const { data: existing } = await supabase
      .from('oferty')
      .select('slug')
      .eq('slug', slug)
      .eq('archived', false)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Oferta o takiej nazwie już istnieje' },
        { status: 409 }
      );
    }

    // Dodaj ofertę
    const { data, error } = await supabase
      .from('oferty')
      .insert([
        {
          slug,
          nazwa,
          miejsce,
          img: img || '',
          content,
          recruitment_url: recruitment_url?.trim() || null,
          archived: false,
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Błąd dodawania oferty:', error);
      return NextResponse.json(
        { error: 'Błąd dodawania oferty' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      slug: data.slug,
      message: 'Oferta dodana pomyślnie'
    });
  } catch (error) {
    console.error('Błąd dodawania oferty:', error);
    return NextResponse.json(
      { error: 'Błąd dodawania oferty' },
      { status: 500 }
    );
  }
}

// PUT - edytuj istniejącą ofertę
export async function PUT(request: NextRequest) {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const body = await request.json();
    const { oldSlug, nazwa, miejsce, img, content, recruitment_url } = body;

    if (!oldSlug || !nazwa || !miejsce || !content) {
      return NextResponse.json(
        { error: 'Brak wymaganych pól' },
        { status: 400 }
      );
    }

    if (recruitment_url && !isValidHttpUrl(recruitment_url)) {
      return NextResponse.json({ error: 'Link do rekrutacji musi zaczynać się od http:// lub https://' }, { status: 400 });
    }

    // Generuj nowy slug
    const newSlug = nazwa
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ł/g, 'l')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Aktualizuj ofertę
    const { data, error } = await supabase
      .from('oferty')
      .update({
        slug: newSlug,
        nazwa,
        miejsce,
        img: img || '',
        content,
        recruitment_url: recruitment_url?.trim() || null,
        updated_at: new Date().toISOString(),
      })
      .eq('slug', oldSlug)
      .select()
      .single();

    if (error) {
      console.error('Błąd aktualizacji oferty:', error);
      return NextResponse.json(
        { error: 'Błąd aktualizacji oferty' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      slug: newSlug,
      message: 'Oferta zaktualizowana pomyślnie'
    });
  } catch (error) {
    console.error('Błąd aktualizacji oferty:', error);
    return NextResponse.json(
      { error: 'Błąd aktualizacji oferty' },
      { status: 500 }
    );
  }
}

// DELETE - usuń ofertę
export async function DELETE(request: NextRequest) {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Brak slug w zapytaniu' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('oferty')
      .delete()
      .eq('slug', slug);

    if (error) {
      console.error('Błąd usuwania oferty:', error);
      return NextResponse.json(
        { error: 'Błąd usuwania oferty' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Oferta usunięta pomyślnie'
    });
  } catch (error) {
    console.error('Błąd usuwania oferty:', error);
    return NextResponse.json(
      { error: 'Błąd usuwania oferty' },
      { status: 500 }
    );
  }
}

// PATCH - archiwizuj ofertę
export async function PATCH(request: NextRequest) {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Brak slug w zapytaniu' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('oferty')
      .update({ archived: true, updated_at: new Date().toISOString() })
      .eq('slug', slug);

    if (error) {
      console.error('Błąd archiwizacji oferty:', error);
      return NextResponse.json(
        { error: 'Błąd archiwizacji oferty' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Oferta zarchiwizowana pomyślnie'
    });
  } catch (error) {
    console.error('Błąd archiwizacji oferty:', error);
    return NextResponse.json(
      { error: 'Błąd archiwizacji oferty' },
      { status: 500 }
    );
  }
}
