// Header.js
import React from 'react';
import './Header.css'; // Importa el archivo de estilos CSS para el encabezado

function Header({ handleViewChange }) {
  const handleTabClick = (tab) => {
    handleViewChange(tab);
  };

  return (
    <header className="header-container">
      <nav>
        <div className="nav-menu">
          <div className="nav-item" onClick={() => handleTabClick('home')}>Home</div>
          <div className="nav-item" onClick={() => handleTabClick('mapa-pantalla-completa')}>Map Full Screen</div>
          <div className="nav-item" onClick={() => handleTabClick('mapa-popup')}>Map Popup</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;



