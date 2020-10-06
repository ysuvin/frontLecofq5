/* eslint-disable no-lone-blocks */
import React from 'react';
import logo from '../logo.png';
import '../css/Home.css';
import history from '../history';
import Grid from '@material-ui/core/Grid';
import StyledButton from '../Component/Homepage/StyledButton'

function Home() {

  const redirectGrupo1 = () =>
  {
    history.push('/Grupo1')
  }
  const redirectGrupo2 = () =>
  {
    {/*history.push('/Grupo2')*/}
  }
  const redirectGrupo3 = () =>
  {
    history.push('/Grupo3/VistaPrincipal')
  }
  const redirectGrupo4 = () =>
  {
    {history.push('/Grupo4')}
  }
  const redirectGrupo5 = () =>
  {
    {history.push('/Grupo5/Plantillapaciente')}
  }

  

  return ( 
      <div className="home_wrapper">
        
        <div className="home_body">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
          <Grid item xs={12} width="100%">
          <StyledButton onClick={redirectGrupo1} variant="contained" >Sistema de Seguimiento de Actividades en Casa</StyledButton>
          </Grid>
          <Grid item xs={12}>
          <StyledButton onClick={redirectGrupo2} variant="contained">Grupo2</StyledButton>
          </Grid>
          <Grid item xs={12}>
          <StyledButton onClick={redirectGrupo3} variant="contained">Inscripción talleres</StyledButton>
          </Grid>
          <Grid item xs={12}>
          <StyledButton onClick={redirectGrupo4} variant="contained">Agendamiento de Horas Médicas</StyledButton>
          </Grid>
          <Grid item xs={12}>
          <StyledButton onClick={redirectGrupo5} variant="contained">Ficha clinica</StyledButton>
          </Grid>
        </Grid>
          </p>
        </div>
      </div>  
    );
}

export default Home;
