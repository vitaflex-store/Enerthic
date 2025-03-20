
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Enerthic. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f1f1f1',
  textAlign: 'center',
  padding: '20px',
  marginTop: '40px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.9rem',
  color: '#555'
};
