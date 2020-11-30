import React, { useEffect } from 'react';
import '../../../css/Grupo1/G1Landing.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {GetFichasPaciente} from '../../../Model/Grupo1/fichasPacienteController';
import Button from '@material-ui/core/Button';
import history from '../../../history.jsx';

import logo from '../../../logo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { PacienteContext } from '../../../Model/Grupo1/PacienteContext';
import { KsViewContext } from '../../../Model/Grupo1/KsViewContext';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


function KsVerPacientes() {

    //Query que recupera a los pacientes
    const [pacienteC, setPacienteC] = React.useContext(PacienteContext);
    const [fichasDePacientes,setFichasDePacientes] = React.useState(null);
    const [fichasPaciente, setFichasPaciente] = React.useState(null);
    const [fichaPaciente, setFichaPaciente] = React.useState(null);
    const [ksViewC, setKsViewC] = React.useContext(KsViewContext);
    const [isLoading,setIsLoading] = React.useState(true);
    const [fichasRut,setFichasRut] = React.useState(null);
    const [fichaRut,setFichaRut ] = React.useState(null);
    
    const fetchDataFicha = async () => {
      const query = await GetFichasPaciente();
      return query;
    }

    useEffect(() => {
        fetchDataFicha().then((query) =>{
          var rut = [];
          var prevRut = "";
          for(var i = 0; i < query.length; i++)
          {
            if(query[i].rut != prevRut)
            {
              rut.push(query[i].rut);
              prevRut = query[i].rut;
            }
          }
          setFichasDePacientes(query);
          setFichasRut(rut);
          setFichaRut(rut[0]);
          var fichas = [];
          for(var i = 0; i < rut.length; i++)
          {
            if(query[i].rut == rut[0])
            {
              fichas.push(query[i]);
            }
          }
          setFichasPaciente(fichas);
          setFichaPaciente(fichas[0]);
          console.log("lassfichas");
          console.log(fichas);
          setPacienteC({rut: query[0].rut,});
          setIsLoading(false);
          console.log(query);
        });
    },[]);

  ////
    

    const redirectKsAsFecha = () =>
    {
      setKsViewC(1);
    }
    /*const updateFichas = () =>
    {
      var fichas = [];
      for(var i = 0; i < fichasDePacientes.length; i++)
      {
        if(fichasDePacientes[i].rut == fichaRut)
        {
          fichas.push(fichasDePacientes[i]);
        }
      }
      setFichasPaciente(fichas);
      setFichaPaciente(fichas[0]);
      console.log("lassfichas");
      console.log(fichas);
    }*/

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className="g1_wrapper">
      
      <div className="g1_body">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Seleccionar Paciente:</p>
      {isLoading ? 
      (
        <div>Cargando...</div>
      ) : 
      ( 
      <div>   
      <Autocomplete
        value={fichaRut}
        onChange={(event, newValue) => {
          //Si obtengo un valor null, no actualizo el display para evitar un crash, se utiliza redundancia
          //con console.log() debido a que la condicional no puede no retornar una funcion, cualquiera que sea.
          if(newValue !== null)
          {
            setFichaRut(newValue)
            setPacienteC({rut: newValue,})
            var fichas = [];
            for(var i = 0; i < fichasDePacientes.length; i++)
            {
              if(fichasDePacientes[i].rut == newValue)
              {
                fichas.push(fichasDePacientes[i]);
              }
            }
            setFichasPaciente(fichas);
            setFichaPaciente(fichas[0]);
            console.log("lassfichas");
            console.log(fichas);
            console.log(pacienteC);
          }
        }}
        id="help"
        options={fichasRut}
        getOptionLabel={(option) => option}
        style={{ width: 300, color: '#f99f31'}}
        renderInput={(params) => <TextField {...params} label="Rut Paciente" variant="outlined" />}
      />
      <p></p>
        <Grid container spacing={1} 
              direction="column"
              justify="center"
              alignItems="center">
          <Grid item xs={12}>
              <p>Seleccionar Ficha:</p>
              <Autocomplete
              value={fichaPaciente}
              onChange={(event, newValue) => {
                //Si obtengo un valor null, no actualizo el display para evitar un crash, se utiliza redundancia
                //con console.log() debido a que la condicional no puede no retornar una funcion, cualquiera que sea.
                if(newValue !== null)
                {
                  setFichaPaciente(newValue)
                }
              }}
              id="help"
              options={fichasPaciente}
              getOptionLabel={(option) => option.fecha_ingreso}
              style={{ width: 300, color: '#f99f31'}}
              renderInput={(params) => <TextField {...params} label="Rut Paciente" variant="outlined" />}
              />
            </Grid>
            <Grid item xs={12}>
            {/* <Paper className="paper">
            <p>Nombre: {`${paciente !== null ? `${paciente.nombre}` : ''}`}</p>
            <p>Edad: {` ${paciente !== null ? `${paciente.edad}` : ''}`}</p>
            <p>Peso: {` ${paciente !== null ? `${paciente.peso}` : ''}`}</p>
            <p>Estatura: {` ${paciente !== null ? `${paciente.estatura}` : ''}`}</p>
            </Paper> */}
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
              Ver Ficha
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
            <DialogTitle id="responsive-dialog-title">{"Ficha del paciente"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p>Domicilio: {`${fichaPaciente !== null ? `${fichaPaciente.domicilio}` : ''}`}</p>
                <p>Comuna: {` ${fichaPaciente !== null ? `${fichaPaciente.comuna}` : ''}`}</p>
                <p>Estado Civil: {` ${fichaPaciente !== null ? `${fichaPaciente.estado_civil}` : ''}`}</p>
                <p>Prevision: {` ${fichaPaciente !== null ? `${fichaPaciente.prevision}` : ''}`}</p>
                <p>Motivo de la consulta: {` ${fichaPaciente !== null ? `${fichaPaciente.motivo_consulta}` : ''}`}</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* <Button autoFocus onClick={handleClose} color="primary">
                Disagree
              </Button> */}
              <Button onClick={handleClose} color="primary" autoFocus>
                Listo
              </Button>
            </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={12}>
            {fichaPaciente !== null
              ? <Button onClick={redirectKsAsFecha} variant="contained" color = "primary">Asignar Ejercicios</Button> 
              : ''} 
          </Grid>
        </Grid>
        </div>
      )}  
      </div>
    </div>
  );
}

export default KsVerPacientes;