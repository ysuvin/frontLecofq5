import React from 'react';
import Home from './View/Home';
import G1Landing from './View/Grupo1/G1Landing';
import { Route, Switch, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import ContainerHoras from './View/Grupo4/ContainerHoras';
import ContainerSecretario from './View/Grupo4/ContainerSecretario';
import ContainerSelect from './View/Grupo4/ContainerSelect';
=======

//Grupo 4 - Componentes
import ContainerHoras from './View/Grupo4/ContainerHoras';
import ContainerSecretario from './View/Grupo4/ContainerSecretario';
import ContainerSelect from './View/Grupo4/ContainerSelect';
//Fin Grupo 4 - Componentes


>>>>>>> e48c91c5797be7aba602f96655985b6bb406600a
function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/Home" component={Home} />
				<Route exact path="/">
					<Redirect to="/Home" />
				</Route>

				{/* Routing Grupo 1	*/}
				<Route exact path="/Grupo1/" component={G1Landing} />
				<Route exact path="/Grupo1/*" component={G1Landing} />
				{/* Fin Routing Grupo 1*/}

				{/* Routing Grupo 4 */}
				<Route exact path="/Grupo4" component={ContainerSelect}/>
				<Route exact path={["/Grupo4/paciente/horas", "/Grupo4/secretario/horas" ]} component={ContainerHoras} />
				<Route exact path="/Grupo4/secretario/administrar/horas-medicas" component={ContainerSecretario} />

				{/* Fin Routing Grupo 4*/}

<<<<<<< HEAD
			</Switch>

		</div>
	);
=======
				{/* Routing Grupo 4 */}
				<Route exact path="/Grupo4" component={ContainerSelect}/>
				<Route exact path={["/Grupo4/paciente/horas", "/Grupo4/secretario/horas" ]} component={ContainerHoras} />
				<Route exact path="/Grupo4/secretario/administrar/horas-medicas" component={ContainerSecretario} />

				{/* Fin Routing Grupo 4*/}

    		</Switch>
    		
  		</div>
  );
>>>>>>> e48c91c5797be7aba602f96655985b6bb406600a
}

export default App;
