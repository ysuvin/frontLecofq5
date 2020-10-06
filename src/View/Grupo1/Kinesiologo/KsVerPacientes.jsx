import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pacientes from '../../../Model/Grupo1/Pacientes';
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

function KsVerPacientes() {
  

    const [paciente, setValue] = React.useState(Pacientes[0]);

    const redirectKsAsFecha = () =>
    {
      history.push('/Grupo1/KsAsFecha')
    }

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
      Seleccionar Paciente:
      <Autocomplete
        value={paciente}
        onChange={(event, newValue) => {
          //Si obtengo un valor null, no actualizo el display para evitar un crash, se utiliza redundancia
          //con console.log() debido a que la condicional no puede no retornar una funcion, cualquiera que sea.
          newValue !== null ? setValue(newValue) : console.log() ;
          console.log(newValue);
        }}
        id="help"
        options={Pacientes}
        getOptionLabel={(option) => option.nombre}
        style={{ width: 300, color: '#f99f31'}}
        renderInput={(params) => <TextField {...params} label="Paciente" variant="outlined" />}
      />
      <p></p>
        <Grid container spacing={2} 
              direction="column"
              justify="center"
              alignItems="center">
          <Grid item xs={12} spacing={2}>
            {/* Handling de imagen, si no se asigna un paciente se muestra una imagen no definida */}
            <Paper spacing={2} className="img-box" style={ (!!paciente.imgName) ? {backgroundImage: "url("+require('../../../Model/Grupo1/Assets/FotosPacientes/'+paciente.imgName)+")"}
            : {backgroundImage: "url("+require('../../../Model/Grupo1/Assets/FotosPacientes/anon.jpg')}}
            >
            
            </Paper>
            </Grid>
            <Grid item xs={12}>
            {/* <Paper className="paper">
            <p>Nombre: {`${paciente !== null ? `${paciente.nombre}` : ''}`}</p>
            <p>Edad: {` ${paciente !== null ? `${paciente.edad}` : ''}`}</p>
            <p>Peso: {` ${paciente !== null ? `${paciente.peso}` : ''}`}</p>
            <p>Estatura: {` ${paciente !== null ? `${paciente.estatura}` : ''}`}</p>
            </Paper> */}
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
              Ver detalle
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
                <p>Nombre: {`${paciente !== null ? `${paciente.nombre}` : ''}`}</p>
                <p>Edad: {` ${paciente !== null ? `${paciente.edad}` : ''}`}</p>
                <p>Peso: {` ${paciente !== null ? `${paciente.peso}` : ''}`}</p>
                <p>Estatura: {` ${paciente !== null ? `${paciente.estatura}` : ''}`}</p>
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
            {paciente !== null
              ? <Button onClick={redirectKsAsFecha} variant="contained" color = "primary">Asignar Ejercicios</Button> 
              : ''} 
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}

export default KsVerPacientes;