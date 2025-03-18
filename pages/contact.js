export default function Contact() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '60px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', padding: '30px 0 10px', color: '#00c853' }}>Kontaktformular</h1>
      <form 
        action="https://formsubmit.co/your@email.com" 
        method="POST" 
        style={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: '15px', background: '#fff', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>

        <input type="text" name="name" placeholder="Name" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <input type="email" name="email" placeholder="E-Mail" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <textarea name="message" rows="5" placeholder="Nachricht" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}></textarea>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thank-you" />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#00c853', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
          Nachricht senden
        </button>
      </form>
    </main>
  );
}