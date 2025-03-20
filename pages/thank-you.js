import { useRouter } from 'next/router';

export default function ThankYou() {
  const { locale } = useRouter();
  const translations = {
    de: { title: 'Danke für Ihre Nachricht! ✅', message: 'Wir melden uns so schnell wie möglich bei Ihnen.' },
    es: { title: '¡Gracias por tu mensaje! ✅', message: 'Nos pondremos en contacto contigo lo antes posible.' },
    en: { title: 'Thank you for your message! ✅', message: 'We will get back to you as soon as possible.' }
  };
  const t = translations[locale] || translations.de;

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '2rem', color: '#4caf50' }}>{t.title}</h1>
      <p style={{ marginTop: '20px' }}>{t.message}</p>
    </main>
  );
}