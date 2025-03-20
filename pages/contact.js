import { useRouter } from 'next/router';

export default function Contact() {
  const { locale } = useRouter();
  const translations = {
    de: { title: 'Kontaktformular', name: 'Name', email: 'E-Mail', message: 'Nachricht', send: 'Nachricht senden' },
    es: { title: 'Formulario de contacto', name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje', send: 'Enviar mensaje' },
    en: { title: 'Contact Form', name: 'Name', email: 'Email', message: 'Message', send: 'Send Message' }
  };
  const t = translations[locale] || translations.de;

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', maxWidth: '700px', margin: '60px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', padding: '30px 0 10px', color: '#00c853' }}>{t.title}</h1>
      <form action="https://formsubmit.co/your@email.com" method="POST" style={{
        display: 'flex', flexDirection: 'column', padding: '20px', gap: '15px',
        background: '#fff', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.05)'
      }}>
        <input type="text" name="name" placeholder={t.name} required />
        <input type="email" name="email" placeholder={t.email} required />
        <textarea name="message" rows="5" placeholder={t.message} required></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thank-you" />
        <button type="submit">{t.send}</button>
      </form>
    </main>
  );
}