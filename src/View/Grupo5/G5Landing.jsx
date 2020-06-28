import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo5/NavBar';
import { Route, Switch } from 'react-router-dom';


function G5Landing() {
	return(
  		<div>
        <NavBar className = "paper"/>
        <Switch>   
        {/* Routing Grupo 5	*/}
		


		{/* Fin Routing Grupo 5*/}	
        </Switch>
    		
  		</div>
  );
}

export default G5Landing;