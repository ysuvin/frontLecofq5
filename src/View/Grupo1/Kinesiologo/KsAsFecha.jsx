import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import KsAsigFechaTabla from '../../../Component/Grupo1/KsAsigFechaTabla'


function KsAsFecha() {
  
  /*const [rutinas, setRutinas] = React.useState(null);

  const fetchData = async () => {
    const query = await GetRutinas();
    setRutinas(query);
    console.log(query);
  }

  useEffect(() => {
    fetchData();
  }, []);*/

  return (
      <div className="g1_wrapper">
        <div className="g1_body_alt">
          <KsAsigFechaTabla/>
        </div>
      </div>
  );
}

export default KsAsFecha;