import React from 'react';
import Home from './View/Home';
import Pag2 from './View/Pag2';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
	return(
  		<div>
    		<Switch>
      			<Route exact path="/Home" component={Home}/>
      			<Route exact path="/">
        			<Redirect to ="/Home"/>
        		</Route>
        		<Route exact path="/Pag2" component={Pag2}/>     			
    		</Switch>
    		
  		</div>
  );
}
  
export default App;
