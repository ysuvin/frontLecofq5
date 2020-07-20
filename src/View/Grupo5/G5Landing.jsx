import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo5/NavBar';
import { Route, Switch } from 'react-router-dom';
import Paciente from './Plantillapaciente/Paciente';
import Medico from './PlantillaMedico/Medico';
import Kinesiologo from './PlantillaKinesiologo/Kinesiologo';
import Home from './HomeG5';
import Nutricionista from './PlantillaNutricionista/Nutricionista';
import Psicologo from './PlantillaPsicologo/Psicologo';



function G5Landing() {
    
    return (
        <div>
            <NavBar className="paper" />
            
            <Switch>
                {/* Routing Grupo 5	*/}
                
                {/* <Route exact path="/Grupo5/" component={Home} /> */}
                
                <Route exact path="/Grupo5/Plantillapaciente/" component={Paciente} />
                <Route exact path="/Grupo5/PlantillaNutricionista/" component={Nutricionista} />
                <Route exact path="/Grupo5/PlantillaPsicologo/" component={Psicologo} />
                <Route exact path="/Grupo5/PlantillaKinesiologo/" component={Kinesiologo} />
                {/* <Route exact path="/Grupo5/PlantillaMedico/" component={Medico} /> */}
                {/* Fin Routing Grupo 5*/}
            </Switch>

        </div>
    );
}

export default G5Landing;