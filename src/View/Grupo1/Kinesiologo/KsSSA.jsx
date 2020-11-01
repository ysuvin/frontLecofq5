import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import KsAsEjercicios from './KsAsEjercicios';
import KsVerPacientes from './KsVerPacientes';
import KsAsFecha from './KsAsFecha';
import { KsViewContext } from '../../../Model/Grupo1/KsViewContext';

function KsSSA() {

  const [ksViewC,setKsViewC] = React.useContext(KsViewContext);

  switch (ksViewC) { 
    case 0:
      return <KsVerPacientes/>;
    case 1:
      return <KsAsFecha/>;
    case 2:
      return <KsAsEjercicios/>;
    default:
      return null;
  }
}

export default KsSSA;