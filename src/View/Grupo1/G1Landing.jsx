import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo1/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import KsVerPacientes from './Kinesiologo/KsVerPacientes'
import KsAsEjercicios from './Kinesiologo/KsAsEjercicios'

function G1Landing() {
	return(
  		<div>
        <NavBar className="paper"/>
    		<Switch>   
        {/* Routing Grupo 1	*/}
				<Route exact path="/Grupo1/" component={KsVerPacientes}/>	
        <Route exact path="/Grupo1/Login" component={Login}/>
        <Route exact path="/Grupo1/KsAsEjercicios" component={KsAsEjercicios}/>
				{/* Fin Routing Grupo 1*/}	
        </Switch>
    		
  		</div>
  );
}

export default G1Landing;
