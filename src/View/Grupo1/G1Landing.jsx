import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo1/NavBar';
import { Route, Switch } from 'react-router-dom';
import KsSSA from './Kinesiologo/KsSSA';
import PacSSA from './Paciente/PacSSA';
import PacVerEjercicios from './Paciente/PacVerEjercicios';
import { PacienteProvider } from '../../Model/Grupo1/PacienteContext';
import { RutinaProvider } from '../../Model/Grupo1/RutinaContext';
import { KsViewProvider } from '../../Model/Grupo1/KsViewContext';
import { PacViewProvider } from '../../Model/Grupo1/PacViewContext';


function G1Landing() {
	return(
  		<div>
        <PacienteProvider>
            <RutinaProvider>
              <KsViewProvider>
                <PacViewProvider>
                  <NavBar className="paper"/>
                  <Switch>   
                    {/* Routing Grupo 1	*/}
                    <Route exact path="/Grupo1/" component={KsSSA}/>	
                    <Route exact path="/Grupo1/Paciente" component={PacSSA}/>
                    <Route exact path="/Grupo1/PacVerFechas/PacVerEjercicios" component={PacVerEjercicios}/>
                    {/* Fin Routing Grupo 1*/}	
                  </Switch>
                </PacViewProvider>
              </KsViewProvider>
            </RutinaProvider>
          </PacienteProvider>
  		</div>
  );
}

export default G1Landing;
