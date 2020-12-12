import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import PacVerFechas from './PacVerFechas';
import PacVerEjercicios from './PacVerEjercicios';
import PacLogin from './PacLogin';
import { PacViewContext } from '../../../Model/Grupo1/PacViewContext';

function PacSSA() {

  const [pacViewC,setPacViewC] = React.useContext(PacViewContext);

  switch (pacViewC) { 
    case 0:
      return <PacLogin/>;
    case 1:
      return <PacVerFechas/>;
    case 2:
      return <PacVerEjercicios/>;
    default:
      return null;
  }
}

export default PacSSA;