import React, { useEffect } from 'react';
import '../../../css/Grupo1/G1Landing.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../../logo.png';
import { PacViewContext } from '../../../Model/Grupo1/PacViewContext';
import { GetRutinas } from '../../../Model/Grupo1/RutinasController';
import { PacienteContext } from '../../../Model/Grupo1/PacienteContext';


function PacLogin() {

    const [pacViewC,setPacViewC] = React.useContext(PacViewContext);
    const [pacienteC, setPacienteC] = React.useContext(PacienteContext);
    const [rut, setRut] = React.useState("");
    

    const fetchData = async () => {
      const query = await GetRutinas().then((res) => {
        var response = []
        for(var i = 0; i < res.length; i++)
        {
          if(res[i].rut == rut)
          {
            setPacienteC({rut: rut,});
            redirectPacVerFechas();
          }
        }
      });

  }

  ////
    
    const handleRutChange = (event) => {
      setRut(event.target.value);
    };
    
    const redirectPacVerFechas = () =>
    {
      setPacViewC(1);
    }

    

  return (
    <div className="g1_wrapper">
      
      <div className="g1_body">
      <img src={logo} className="App-logo" alt="logo" />
      Ingrese su RUT:
        <div>   
          <p>
            <TextField 
              id="outlined-full-width"
              label="RUT" 
              defaultValue={""}
              variant="outlined"
              onChange={handleRutChange}
            />
          </p>
          <p>
            <Button variant="contained" color="primary" onClick={fetchData} >
                Buscar Rutinas
            </Button>
          </p>      
        </div>
      </div>
    </div>
  );
}

export default PacLogin;