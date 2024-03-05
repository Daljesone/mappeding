// Footer.js
import React from 'react';
import './Footer.css'; // Importa el archivo de estilos CSS para el footer

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-item">
          <img src="/logo192.png" alt="Logo" />
        </div>
        <div className="footer-item">
          <h3>Mapa del Sitio</h3>
          <ul>
            <li><a href="#">Sección 1</a></li>
            <li><a href="#">Sección 2</a></li>
            <li><a href="#">Sección 3</a></li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>
        <div className="footer-item">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

