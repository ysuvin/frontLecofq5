import React from 'react';
import '../../css/Grupo1/G1Landing.css';
import NavBar from '../../Component/Grupo5/NavBar';
import { Route, Switch } from 'react-router-dom';
import Paciente from './Plantillapaciente/Paciente';
import Medico from './PlantillaMedico/Medico';
import Kinesiologo from './PlantillaKinesiologo/Kinesiologo';
import Home from './HomeG5';
import Nutricionista from './PlantillaNutricionista/Nutricionista';
import Psicologo from './PlantillaPsicologo/Psicologo';
import VerFichasPacientes from './Plantillapaciente/VerFichasPaciente';
import PutFichaPaciente from './Plantillapaciente/PutFichaPaciente';
import VerFichasNutricionista from './PlantillaNutricionista/VerFichasNutricionista';
import PutFichaNutricionista from './PlantillaNutricionista/PutFichaPaciente';
import VerFichasPsicologo from './PlantillaPsicologo/VerFichasPsicologo';
import PutFichaPsicologo from './PlantillaPsicologo/PutFichaPaciente';

function G5Landing() {
    
    return (
        <div>
            <NavBar className="paper" />
            
            <Switch>
                {/* Routing Grupo 5	*/}
                
                {/* <Route exact path="/Grupo5/" component={Home} /> */}
                
                <Route exact path="/Grupo5/Plantillapaciente/" component={Paciente} />
                <Route exact path="/Grupo5/PlantillaNutricionista/" component={Nutricionista} />
                <Route exact path="/Grupo5/PlantillaPsicologo/" component={Psicologo} />
                <Route exact path="/Grupo5/PlantillaKinesiologo/" component={Kinesiologo} />
                <Route exact path="/Grupo5/VerFichasPaciente/" component={VerFichasPacientes} />
                <Route exact path="/Grupo5/PutFichaPaciente/:id" component={PutFichaPaciente} />
                <Route exact path="/Grupo5/VerFichasNutricionistas/" component={VerFichasNutricionista} />
                <Route exact path="/Grupo5/PutFichaNutricionista/:id" component={PutFichaNutricionista} />
                <Route exact path="/Grupo5/VerFichasPsicologos/" component={VerFichasPsicologo} />
                <Route exact path="/Grupo5/PutFichaPsicologo/:id" component={PutFichaPsicologo} />
                {/* <Route exact path="/Grupo5/PlantillaMedico/" component={Medico} /> */}
                {/* Fin Routing Grupo 5*/}
            </Switch>

        </div>
    );
}

export default G5Landing;