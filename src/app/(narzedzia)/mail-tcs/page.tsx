import SignatureGenerator from '@/components/mail/SignatureGenerator';

export default function Page() {
  return (
    <SignatureGenerator
      title="Generator stopki mailowej TCS (dane transbet)"
      company={{ name: 'Transbet Betoniarnie Grochowicz Sp. K.', nip: '7951007169', krs: '0000573370' }}
      website={{ href: 'https://transbettcs.com/', label: 'www.transbettcs.com' }}
    />
  );
}
