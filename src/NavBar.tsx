import React from 'react';
import './NavBar.css';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="navbar-links">
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#recipes">Recetas</a></li>
        <li><a href="#free-resources">Recursos Gratuitos</a></li>
        <li><a href="#club">Club Menú Saludable</a></li>
        <li><a href="#courses">Cursos</a></li>
        <li><a href="#login">Iniciar Sesión</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
