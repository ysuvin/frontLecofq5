import React from 'react';
import Home from './View/Home';
import G1Landing from './View/Grupo1/G1Landing';
import G5Landing from './View/Grupo5/G5Landing';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return(
  		<div>
    		<Switch>
      			<Route exact path="/Home" component={Home}/>
      			<Route exact path="/">
        			<Redirect to ="/Home"/>
        		</Route>     

				{/* Routing Grupo 1	*/}
				<Route exact path="/Grupo1/" component={G1Landing}/>
				<Route exact path="/Grupo1/*" component={G1Landing}/>	
				{/* Fin Routing Grupo 1*/}	
				{/* Routing Grupo 5 */}
				<Route exact path= "/Grupo5/" component={G5Landing}/>
				<Route exact path= "/Grupo5/*" component={G5Landing}/>

				{/*Fin Routing Grupo5*/}
    		</Switch>
    		
  		</div>
  );
}
  
export default App;
