export default function ComingSoon() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚧 Coming Soon 🚧</h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "2rem" }}>
        Vi arbejder på noget spændende. Siden er snart klar - kig forbi igen!
      </p>
      <p style={{ fontSize: "1rem", color: "#777" }}>
        © {new Date().getFullYear()} Marie Louise Stokholm
      </p>
    </main>
  );
}