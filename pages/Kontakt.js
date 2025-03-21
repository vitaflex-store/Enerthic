export default function Kontakt() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Kontakt</h1>
      <p>Du kannst uns über das folgende Formular kontaktieren:</p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="E-Mail" required />
        <textarea placeholder="Nachricht" rows="5" required />
        <button type="submit">Absenden</button>
      </form>
    </main>
  );
}
