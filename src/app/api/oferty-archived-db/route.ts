import { isCmsSession, unauthorized } from '@/lib/cms-auth';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - pobierz wszystkie zarchiwizowane oferty
export async function GET() {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const { data: oferty, error } = await supabase
      .from('oferty')
      .select('*')
      .eq('archived', true)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Błąd pobierania zarchiwizowanych ofert:', error);
      return NextResponse.json({ error: 'Błąd pobierania zarchiwizowanych ofert' }, { status: 500 });
    }

    return NextResponse.json({ oferty: oferty || [] });
  } catch (error) {
    console.error('Błąd pobierania zarchiwizowanych ofert:', error);
    return NextResponse.json({ error: 'Błąd pobierania zarchiwizowanych ofert' }, { status: 500 });
  }
}

// PATCH - przywróć ofertę z archiwum
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
      .update({ archived: false, updated_at: new Date().toISOString() })
      .eq('slug', slug);

    if (error) {
      console.error('Błąd przywracania oferty:', error);
      return NextResponse.json(
        { error: 'Błąd przywracania oferty' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Oferta przywrócona pomyślnie'
    });
  } catch (error) {
    console.error('Błąd przywracania oferty:', error);
    return NextResponse.json(
      { error: 'Błąd przywracania oferty' },
      { status: 500 }
    );
  }
}

// DELETE - usuń zarchiwizowaną ofertę na stałe
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
      .eq('slug', slug)
      .eq('archived', true);

    if (error) {
      console.error('Błąd usuwania zarchiwizowanej oferty:', error);
      return NextResponse.json(
        { error: 'Błąd usuwania zarchiwizowanej oferty' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Zarchiwizowana oferta usunięta na stałe'
    });
  } catch (error) {
    console.error('Błąd usuwania zarchiwizowanej oferty:', error);
    return NextResponse.json(
      { error: 'Błąd usuwania zarchiwizowanej oferty' },
      { status: 500 }
    );
  }
}
