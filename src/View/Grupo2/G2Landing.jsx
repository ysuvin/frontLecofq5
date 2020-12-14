import React from "react";
import "../../css/Grupo1/G1Landing.css";
import { Route, Switch } from "react-router-dom";
import Inscripcion from "./inscripcion/Inscripcion";
import Ingreso from "./inscripcion/ingreso";
import Recuperar from "./inscripcion/Recuperar";
import Paperbase from "./PortalAdmin/Paperbase";


function G2Landing() {
  return (
    <div>
      <Switch>
        {/* Routing Grupo 2	*/}
        <Route exact path="/Grupo2/" component={Inscripcion} />
        <Route exact path="/Grupo2/Ingreso" component={Ingreso} />
        <Route exact path="/Grupo2/Recuperar" component={Recuperar} />
        <Route exact path="/Grupo2/Admin" component={Paperbase} />

        {/* 
				
				<Route exact path="/Grupo2/Laboratorio" component={Laboratorio}/>
				
				<Route exact path="/Grupo2/Listoco" component={Listoco}/> */}
        {/* Fin Routing Grupo 2*/}
      </Switch>
    </div>
  );
}

export default G2Landing;
