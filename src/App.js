// App.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MapPopup from './MapPopup';
import MapFullScreen from './Map';

function App() {
  const [view, setView] = useState('home');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div>
      <Header handleViewChange={handleViewChange} />
      <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}> {/* Establece el ancho al 100% y oculta el desbordamiento horizontal */}
        {view === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
            <h2>Estás en el Home 😀</h2>
            {/* Aquí puedes agregar cualquier otro contenido */}
          </div>
        )}
        {view === 'mapa-pantalla-completa' && (
          <div style={{ textAlign: 'center', minHeight: '70vh' }}> {/* Aplica los estilos al contenedor del MapFullScreen */}
            <MapFullScreen />
          </div>
        )}
        {view === 'mapa-popup' && (
          <div style={{ textAlign: 'center', minHeight: '70vh' }}> {/* Aplica los estilos al contenedor del MapPopup */}
            <MapPopup />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;




