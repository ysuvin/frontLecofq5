import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo1/NavBar';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import KsVerPacientes from './Kinesiologo/KsVerPacientes';
import KsAsFecha from './Kinesiologo/KsAsFecha';
import KsAsEjercicios from './Kinesiologo/KsAsEjercicios';
import PacVerFechas from './Paciente/PacVerFechas';
import PacVerEjercicios from './Paciente/PacVerEjercicios';

function G1Landing() {
	return(
  		<div>
        <NavBar className="paper"/>
    		<Switch>   
        {/* Routing Grupo 1	*/}
				<Route exact path="/Grupo1/" component={KsVerPacientes}/>	
        <Route exact path="/Grupo1/Login" component={Login}/>
        <Route exact path="/Grupo1/KsAsFecha" component={KsAsFecha}/>
        <Route exact path="/Grupo1/KsAsFecha/KsAsEjercicios" component={KsAsEjercicios}/>
        <Route exact path="/Grupo1/PacVerFechas" component={PacVerFechas}/>
        <Route exact path="/Grupo1/PacVerFechas/PacVerEjercicios" component={PacVerEjercicios}/>
				{/* Fin Routing Grupo 1*/}	
        </Switch>
    		
  		</div>
  );
}

export default G1Landing;
