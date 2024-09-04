import React from 'react';
import NavBar from './NavBar';
import MainPageComponent from './MainPageComponent';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPageComponent />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
