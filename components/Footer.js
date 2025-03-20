export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Enerthic. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '30px',
  backgroundColor: '#f1f1f1',
  fontFamily: 'Inter, sans-serif',
  color: '#333',
  fontSize: '0.9rem'
};