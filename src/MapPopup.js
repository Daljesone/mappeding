import React, { useEffect, useState } from 'react';
import './MapPopup.css'; // Importa el archivo de estilos CSS para el popup

function MapPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      window.mappedin = {
        miKey: { id: "5eab30aa91b055001a68e996", key: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1", },
        vertical: "mall",
        venue: "mappedin-demo-mall",
        language: "en",
        useDraftData: false,
      };

      const script = document.createElement('script');
      script.src = 'https://d1p5cqqchvbqmy.cloudfront.net/web2/release/mappedin-web.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showPopup]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <button className='button-popup' onClick={togglePopup}>Abrir Mapa Popup</button>
      {showPopup && (
        <div className="popup-container">
          <button className="close-btn" onClick={togglePopup}>Cerrar</button>
          <div className="popup-content">
            <div id="mappedin-map" style={{ width: '70vw', height: '70vh' }}></div>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default MapPopup;
