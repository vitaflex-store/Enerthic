import { useRouter } from 'next/router';

export default function Cart() {
  const { locale } = useRouter();
  const translations = {
    de: { title: 'Dein Warenkorb', empty: 'Dein Warenkorb ist leer.' },
    es: { title: 'Tu carrito', empty: 'Tu carrito está vacío.' },
    en: { title: 'Your Cart', empty: 'Your cart is empty.' }
  };
  const t = translations[locale] || translations.de;

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', padding: '60px 20px', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#00c853', textAlign: 'center', marginBottom: '30px' }}>{t.title}</h1>
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <p style={{ textAlign: 'center', color: '#888' }}>{t.empty}</p>
      </div>
    </main>
  );
}