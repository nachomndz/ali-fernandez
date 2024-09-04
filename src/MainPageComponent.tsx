import React from 'react';
import './MainPageComponent.css';
import aliImage from '../../personal-brand-ali/src/assets/white-dress-ali.jpeg';

const MainPageComponent = () => {
  return (
    <div className="main-page">
      <div className="background-image" style={{ backgroundImage: `url(${aliImage})` }}>
        <div className="content">
          <h1>¡Hola, soy Alicia Fernandez!</h1>
          <p>
            Soy una apasionada de la cocina saludable, natural y llena de energía.
            Mi misión es inspirar a otros a vivir una vida plena a través de la alimentación consciente.
          </p>
          <button className="cta-button">Conóceme mejor</button>
        </div>
      </div>
    </div>
  );
}

export default MainPageComponent;
