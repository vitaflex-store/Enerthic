export default function Home() {
  return (
    <main style={{
      fontFamily: 'Inter, sans-serif',
      padding: '40px 20px',
      maxWidth: '960px',
      margin: 'auto',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#00c853', marginBottom: '20px' }}>
        Willkommen bei <span style={{ color: '#ff9100' }}>Enerthic</span> 💪
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#333', marginBottom: '40px' }}>
        Deine Quelle für Fitness-Zubehör und natürliche Energie 🌿
      </p>

      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px'
      }}>
        <div style={cardStyle}>
          <h3 style={titleStyle}>Fitnessbänder</h3>
          <p>Trainiere überall mit unseren elastischen und strapazierfähigen Bändern.</p>
        </div>
        <div style={cardStyle}>
          <h3 style={titleStyle}>Bio-Proteine</h3>
          <p>Natürliches Eiweiß aus pflanzlichen Quellen – kraftvoll und gesund.</p>
        </div>
        <div style={cardStyle}>
          <h3 style={titleStyle}>Energy Snacks</h3>
          <p>Organische Riegel und Nüsse, ideal für Zwischendurch.</p>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  width: '280px',
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
  textAlign: 'left'
};

const titleStyle = {
  marginBottom: '10px',
  color: '#00c853'
};
