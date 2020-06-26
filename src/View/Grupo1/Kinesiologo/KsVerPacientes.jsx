import React from 'react';
import '../../../css/Grupo1/G1Landing.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pacientes from '../../../Model/Grupo1/Pacientes';
import Button from '@material-ui/core/Button';
import history from '../../../history.jsx';

function KsVerPacientes() {
  

    const [paciente, setValue] = React.useState(Pacientes[0]);

    const redirectKsAsFecha = () =>
    {
      history.push('/Grupo1/KsAsFecha')
    }

  return (
    <div className="wrapper">
      <div className="body">
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
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Paciente" variant="outlined" />}
      />
        <Grid container spacing={0} 
              direction="column"
              justify="center"
              alignItems="center">
          <Grid item xs={12}>
            {/* Handling de imagen, si no se asigna un paciente se muestra una imagen no definida */}
            <Paper className="img-box" style={ (!!paciente.imgName) ? {backgroundImage: "url("+require('../../../Model/Grupo1/Assets/FotosPacientes/'+paciente.imgName)+")"}
            : {backgroundImage: "url("+require('../../../Model/Grupo1/Assets/FotosPacientes/anon.jpg')}}
            >
            
            </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className="paper">
            <p>Nombre: {`${paciente !== null ? `${paciente.nombre}` : ''}`}</p>
            <p>Edad: {` ${paciente !== null ? `${paciente.edad}` : ''}`}</p>
            <p>Peso: {` ${paciente !== null ? `${paciente.peso}` : ''}`}</p>
            <p>Estatura: {` ${paciente !== null ? `${paciente.estatura}` : ''}`}</p>
            </Paper>
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