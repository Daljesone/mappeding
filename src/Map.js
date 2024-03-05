import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    window.mappedin = {
      miKey: { id: "5eab30aa91b055001a68e996", key: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1" },
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
  }, []);

  return (
    <div className="popup-container2">
          <div className="popup-content">
            <div id="mappedin-map" style={{ width: '70vw', height: '70vh' }}></div>
          </div>
        </div>
  );
}

export default Map;
