import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import logo from '../../../logo.png';
import PacVerFechasTabla from '../../../Component/Grupo1/Paciente/PacVerFechasTabla'
import Button from '@material-ui/core/Button';
import { PacViewContext } from '../../../Model/Grupo1/PacViewContext';


function PacVerFechas() {
  
const [pacViewC,setPacViewC] = React.useContext(PacViewContext);


  return (
      <div className="g1_wrapper">
        <div className="g1_body_alt">
        <img src={logo} className="App-logo" alt="logo" />
          <PacVerFechasTabla/>
          <p><Button variant="contained" color="secondary" onClick={() => { setPacViewC(0);}}>Volver</Button></p>
        </div>
      </div>
  );
}

export default PacVerFechas;