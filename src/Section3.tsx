import React from 'react';
import './Section3.css';
import ArmsCrossed from '../public/arms-crossed-ali.jpeg'; // Asegúrate de que la ruta sea correcta

const Section3: React.FC = () => {
    return (
    <div className="section3">
      <div className="section3-content">
        <div className="section3-text">
          <h2>¿Quieres saber cómo organizarte en la cocina?</h2>
          <p>Descárgate GRATIS este plan de menú de 5 días y accede a mis trucos y secretos para organizar tu menú semanal...</p>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Mándamelo ahora</button>
          </form>
        </div>
        <div className="section3-image">
          <img src={ArmsCrossed} alt="Persona con brazos cruzados" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
