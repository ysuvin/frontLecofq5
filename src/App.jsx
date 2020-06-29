import React from 'react';
import Home from './View/Home';
import G1Landing from './View/Grupo1/G1Landing';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContainerHorasPaciente from './View/Grupo4/ContainerHorasPaciente';
import ContainerSecretario from './View/Grupo4/ContainerSecretario';
import Grid from './Model/Grupo4/InscripcionHoras/Grids'

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
				<Route exact path="/Grupo4/paciente/horas" component={ContainerHorasPaciente} />
				<Route exact path="/Grupo4">
					<Redirect to="/Grupo4/paciente/horas" />
				</Route>

				<Route exact path="/Grupo4/secretario/administrar/horas-medicas" component={ContainerSecretario} />

				<Route exact path="/Grupo4/inscripcionHoras" component={Grid} />
				{/* Fin Routing Grupo 4*/}

			</Switch>

		</div>
	);
}

export default App;
