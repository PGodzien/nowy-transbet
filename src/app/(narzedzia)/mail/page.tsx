import SignatureGenerator from '@/components/mail/SignatureGenerator';

export default function Page() {
  return (
    <SignatureGenerator
      title="Generator stopki mailowej Transbet"
      company={{ name: 'TRANSBET BETONIARNIE GROCHOWICZ Sp. K.', nip: '795-10-07-169', krs: '0000573370' }}
      website={{ href: 'https://www.transbet.com.pl', label: 'www.transbet.com.pl' }}
    />
  );
}
