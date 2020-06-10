import React from 'react';
import Home from './View/Home';
import Landing from './View/Grupo1/Landing';
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
				<Route exact path="/Grupo1/Landing" component={Landing}/>	
				<Route exact path="/Grupo1">
        			<Redirect to ="/Grupo1/Landing"/>
        		</Route>
				{/* Fin Routing Grupo 1*/}	

    		</Switch>
    		
  		</div>
  );
}
  
export default App;
