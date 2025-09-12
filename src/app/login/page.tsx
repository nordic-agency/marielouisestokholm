"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        // Redirect til hjemmesiden efter vellykket login
        router.push('/');
      } else {
        setError('Forkert kode. Prøv igen.');
      }
    } catch (err) {
      setError('Der opstod en fejl. Prøv igen.');
    } finally {
      setIsLoading(false);
    }
  };

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
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#333" }}>
          Adgangskode påkrævet
        </h1>
        <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#666" }}>
          Indtast koden for at få adgang til hjemmesiden
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Indtast kode"
            style={{
              padding: "12px",
              fontSize: "1rem",
              border: "2px solid #ddd",
              borderRadius: "8px",
              outline: "none",
              textAlign: "center",
            }}
            required
          />
          
          {error && (
            <p style={{ color: "#e74c3c", fontSize: "0.9rem", margin: 0 }}>
              {error}
            </p>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: "12px",
              fontSize: "1rem",
              backgroundColor: isLoading ? "#ccc" : "#e9dccb",
              color: "#333",
              border: "none",
              borderRadius: "8px",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontWeight: "600",
            }}
          >
            {isLoading ? "Logger ind..." : "Log ind"}
          </button>
        </form>
        
        <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "2rem" }}>
          © {new Date().getFullYear()} Marie Louise Stokholm
        </p>
      </div>
    </main>
  );
}