import React from 'react';
import './Logo.css';
import logoImage from '../src/assets/logo-alicia.png'; // Ruta de tu imagen

const Logo: React.FC = () => {
    return (
    <div className="logo">
      <img src={logoImage} alt="Ali Fernandez Logo" />
    </div>
  );
}

export default Logo;
