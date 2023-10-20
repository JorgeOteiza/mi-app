import React, { useState, useEffect } from 'react';
import './App.css';

function SecondsCounter() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  // Limita el contador a 6 dígitos y agrega un símbolo de reloj
  const formattedSeconds = `⏰  ${('000000' + segundos).slice(-6)}`;

  return (
    <div>
      <h1>{formattedSeconds}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SecondsCounter />
    </div>
  );
}

export default App;
