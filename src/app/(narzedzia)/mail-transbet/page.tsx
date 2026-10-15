import SignatureGenerator from '@/components/mail/SignatureGenerator';

export default function Page() {
  return (
    <SignatureGenerator
      title="Generator stopki mailowej Transbet"
      company={{ name: 'Transbet Betoniarnie Grochowicz Sp. K.', nip: '7951007169', krs: '0000573370' }}
      website={{ href: 'https://www.transbet.com.pl', label: 'www.transbet.com.pl' }}
    />
  );
}
