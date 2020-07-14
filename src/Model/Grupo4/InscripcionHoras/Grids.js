import React, { useState } from 'react';

import Steps from '../../../Component/Grupo4/InscripcionHoras/Steps';
import Filters from '../../../View/Grupo4/InscripcionHoras/Fiters';
import Scheduling from '../../../View/Grupo4/InscripcionHoras/Scheduling';
import { LocalStorageObjects } from '../../../Component/Grupo4/InscripcionHoras/static_data/localstorage';
import Identify from '../../../View/Grupo4/InscripcionHoras/Identify';
import {useParams, useLocation} from 'react-router';
import IndentifyAdmin from '../../../View/Grupo4/InscripcionHoras/IdentifyAdmin';


export default function FullWidthGrid() {
  const [activeStep, setActiveStep] = useState(1);
  const [hour, setHour] = useState(null);
  const [area, setArea] = useState(localStorage.getItem('area') ? LocalStorageObjects.getObject('area') : null);
  const [specialty, setSpecialty] = useState(localStorage.getItem('specialty') ? LocalStorageObjects.getObject('specialty') : null);

  const location = useLocation();
  // console.log(location);


  
  switch (activeStep) {
        case 1:

            return (
            <Steps 
              children={location.pathname.includes('paciente') ? <Identify/> : <IndentifyAdmin/>} 
              setActiveStep={setActiveStep}
            />
            );

        case 2:
            return (
              <Steps 
                children={
                  <Filters
                    changeArea={setArea}
                    selectedArea={area}
                    changeSpecialty={setSpecialty}
                    selectedSpecialty={specialty}
                  />
                }
                area={area}
                specialty={specialty}
                hour={hour}
                setActiveStep={setActiveStep}
              />
            );

        case 3:
            return (
              <Steps 
                children={
                  <Scheduling
                    changeHour={setHour}
                    selectedHour={hour}
                    selectedSpecialty={specialty.specialty}
                  />
                }
                area={area}
                specialty={specialty}
                hour={hour}                
                setActiveStep={setActiveStep}
              />
            );
        
        default:
            return <div>Su hora ha sido agendada</div>

  }


}