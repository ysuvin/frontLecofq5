import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import KsAsigFechaTabla from '../../../Component/Grupo1/KsAsigFechaTabla';
import { PacienteContext } from '../../../Model/Grupo1/PacienteContext';



function KsAsFecha() {
  
  /*const [rutinas, setRutinas] = React.useState(null);

  const fetchData = async () => {
    const query = await GetRutinas();
    setRutinas(query);
    console.log(query);
  }
*/
  const[pacienteC,setPacienteC] = React.useContext(PacienteContext);

  React.useEffect(() => {
    console.log(pacienteC);
  }, []);

  return (
      <div className="g1_wrapper">
        <div className="g1_body_alt">
          <KsAsigFechaTabla/>
        </div>
      </div>
  );
}

export default KsAsFecha;