import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo1/NavBar';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import KsAsFecha from './Kinesiologo/KsAsFecha';
import KsAsEjercicios from './Kinesiologo/KsAsEjercicios';
import KsSSA from './Kinesiologo/KsSSA';
import PacVerFechas from './Paciente/PacVerFechas';
import PacVerEjercicios from './Paciente/PacVerEjercicios';
import { PacienteProvider } from '../../Model/Grupo1/PacienteContext';
import { RutinaProvider } from '../../Model/Grupo1/RutinaContext';
import { KsViewProvider } from '../../Model/Grupo1/KsViewContext';


function G1Landing() {
	return(
  		<div>
        <PacienteProvider>
            <RutinaProvider>
              <KsViewProvider>
              <NavBar className="paper"/>
          
              <Switch>   
                {/* Routing Grupo 1	*/}
                <Route exact path="/Grupo1/" component={KsSSA}/>	
                <Route exact path="/Grupo1/Login" component={Login}/>
                <Route exact path="/Grupo1/PacVerFechas" component={PacVerFechas}/>
                <Route exact path="/Grupo1/PacVerFechas/PacVerEjercicios" component={PacVerEjercicios}/>
                {/* Fin Routing Grupo 1*/}	
              </Switch>
              </KsViewProvider>
            </RutinaProvider>
          </PacienteProvider>
  		</div>
  );
}

export default G1Landing;
