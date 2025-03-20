import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#00c853',
      color: '#fff',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Enerthic</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li><a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Startseite</a></li>
          <li><a href="/catalog" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Katalog</a></li>
        </ul>
        <LanguageSelector />
      </div>
    </nav>
  );
}