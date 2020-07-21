/* eslint-disable no-lone-blocks */
import React from 'react';
import logo from '../logo.png';
import '../css/Home.css';
import Button from '@material-ui/core/Button';
import history from '../history';
import Grid from '@material-ui/core/Grid';

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
    {/*history.push('/Grupo3')*/}
  }
  const redirectGrupo4 = () =>
  {
    {/*history.push('/Grupo4')*/}
  }
  const redirectGrupo5 = () =>
  {
    {/*history.push('/Grupo5')*/}
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
          <Grid item xs={12}>
          <Button onClick={redirectGrupo1} variant="contained" color = "primary">Sistema de Seguimiento de Actividades en Casa</Button>
          </Grid>
          <Grid item xs={12}>
          <Button onClick={redirectGrupo2} variant="contained" color = "secondary">Grupo2</Button>
          </Grid>
          <Grid item xs={12}>
          <Button onClick={redirectGrupo3} variant="contained" color = "primary">Grupo3</Button>
          </Grid>
          <Grid item xs={12}>
          <Button onClick={redirectGrupo4} variant="contained" color = "secondary">Grupo4</Button>
          </Grid>
          <Grid item xs={12}>
          <Button onClick={redirectGrupo5} variant="contained" color = "primary">Grupo5</Button>
          </Grid>
        </Grid>
          </p>
        </div>
      </div>  
    );
}

export default Home;
