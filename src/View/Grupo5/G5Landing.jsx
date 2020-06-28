import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo5/NavBar';
import { Route, Switch } from 'react-router-dom';
import Paciente from "./Plantillapaciente/Paciente";
import Home from './HomeG5';


function G5Landing() {
    
    return (
        <div>
            <NavBar className="paper" />
            
            <Switch>
                {/* Routing Grupo 5	*/}
                <Route exact path="/Grupo5/" component={Home} />
                <Route exact path="/Grupo5/Plantillapaciente/" component={Paciente} />

                {/* Fin Routing Grupo 5*/}
            </Switch>

        </div>
    );
}

export default G5Landing;