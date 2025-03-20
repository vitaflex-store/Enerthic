import { useRouter } from 'next/router';

export default function Datenschutz() {
  const { locale } = useRouter();
  const translations = {
    de: {
      title: 'Datenschutzerklärung',
      content: 'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.'
    },
    es: {
      title: 'Política de privacidad',
      content: 'Tomamos muy en serio la protección de tus datos personales.'
    },
    en: {
      title: 'Privacy Policy',
      content: 'We take the protection of your personal data very seriously.'
    }
  };
  const t = translations[locale] || translations.de;

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#00c853', marginBottom: '20px' }}>{t.title}</h1>
      <p>{t.content}</p>
    </main>
  );
}