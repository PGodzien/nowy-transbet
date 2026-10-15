import { isCmsSession, unauthorized } from '@/lib/cms-auth';
import { NextResponse } from 'next/server';

const images = [
  { name: 'Ogólne', url: '/transbet-cta.jpg' },
  { name: 'Zbrojarz', url: '/zbrojarz.jpg' },
  { name: 'Spawacz', url: '/slusarz-spawacz-zlota-raczka.jpg' },
  { name: 'Operator ładowarki', url: '/operator-ladowarki.jpg' },
  { name: 'Pracownik biurowy', url: '/obsluga-klienta.jpg' },
  { name: 'Mechanik', url: '/mechanik-samochodow-ciezarowych-i-maszyn-budowlanych.jpg' },
  { name: 'Inżynier', url: '/inzynier.jpg' },
  { name: 'Pracownik prefabrykaty', url: '/pracownik-produkcji-w-zakladzie-prefabrykacji.jpg' },
  { name: 'Betoniarz', url: '/betoniarz.jpg' },
  { name: 'Pracownik teren', url: '/pracownik-teren.jpg' },
  { name: 'Pracownik kamizelka', url: '/pracownik-kamizelka.jpg' },
  { name: 'Kalkulator', url: '/kalkulator.jpg' },
  { name: 'Kontrola jakości', url: '/kontrola-jakosci.jpg' },
  { name: 'Laboratorium', url: '/labolatorium.jpg' },
  { name: 'Sprzedaż internetowa', url: '/sprzedaz-internetowa.jpg' },
];

export async function GET() {
  if (!(await isCmsSession())) return unauthorized();
  return NextResponse.json(images);
}
