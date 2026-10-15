import SignatureGenerator from '@/components/mail/SignatureGenerator';

export default function Page() {
  return (
    <SignatureGenerator
      title="Generator stopki mailowej TCS (dane steeltrans)"
      company={{ name: 'STEELTRANS SPÓŁKA Z O.O.', nip: '7952536987', krs: '0000618210' }}
      website={{ href: 'https://transbettcs.com/', label: 'www.transbettcs.com' }}
    />
  );
}
