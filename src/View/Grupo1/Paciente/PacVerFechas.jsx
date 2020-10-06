import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import logo from '../../../logo.png';
import PacVerFechasTabla from '../../../Component/Grupo1/Paciente/PacVerFechasTabla'


function PacVerFechas() {
  

  return (
      <div className="g1_wrapper">
        <div className="g1_body_alt">
        <img src={logo} className="App-logo" alt="logo" />
          <PacVerFechasTabla/>
        </div>
      </div>
  );
}

export default PacVerFechas;