import React from 'react';
import './Logo.css';
import logoImage from '../public/logo-alicia.png';

const Logo: React.FC = () => {
    return (
    <div className="logo">
      <img src={logoImage} alt="Ali Fernandez Logo" />
    </div>
  );
}

export default Logo;
