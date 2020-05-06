import React from 'react';
import './App.css';
import Navbar from './Components/NavbarMenu';
import FormFicheTech from "./Components/FicheTechnique/FromFicheTech";


function App() {
  return (
    <div className="App">
      <Navbar />
      <FormFicheTech />
    </div>
  );
}

export default App;
