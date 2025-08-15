import { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/saudacao`)
      .then(res => res.json())
      .then(data => setMensagem(data.mensagem))
      .catch(() => setMensagem("Erro ao conectar com o backend"));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Front no Vercel + Back no Render</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
