import { useRouter } from 'next/router';

export default function Impressum() {
  const { locale } = useRouter();
  const translations = {
    de: {
      title: 'Impressum',
      content: `Enerthic GmbH\nMusterstraße 123\n12345 Berlin`
    },
    es: {
      title: 'Aviso Legal',
      content: `Enerthic GmbH\nCalle Ejemplo 123\n12345 Berlín`
    },
    en: {
      title: 'Imprint',
      content: `Enerthic GmbH\nExample Street 123\n12345 Berlin`
    }
  };
  const t = translations[locale] || translations.de;

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#00c853', marginBottom: '20px' }}>{t.title}</h1>
      <pre>{t.content}</pre>
    </main>
  );
}