import { isCmsSession, unauthorized } from '@/lib/cms-auth';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  if (!(await isCmsSession())) return unauthorized();
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Brak pliku' }, { status: 400 });
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Plik musi być obrazkiem' }, { status: 400 });
    }

    if (file.size > 15 * 1024 * 1024) {
      return NextResponse.json({ error: 'Plik jest za duży (max 15MB)' }, { status: 400 });
    }

    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.]/g, '-');
    const fileName = `${timestamp}-${originalName}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const { error } = await supabase.storage
      .from('images')
      .upload(fileName, buffer, { contentType: file.type, upsert: false });

    if (error) {
      console.error('Supabase upload error:', error);
      return NextResponse.json({ error: 'Błąd przesyłania pliku: ' + error.message }, { status: 500 });
    }

    const { data } = supabase.storage.from('images').getPublicUrl(fileName);

    return NextResponse.json({ success: true, url: data.publicUrl });
  } catch (error) {
    console.error('Błąd uploadu:', error);
    return NextResponse.json({ error: 'Błąd przesyłania pliku' }, { status: 500 });
  }
}
