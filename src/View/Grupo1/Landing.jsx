import React from 'react';
import '../../css/Grupo1/Landing.css';
import Button from '@material-ui/core/Button';
import NavBar from '../../Component/Grupo1/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import history from '../../history';

function Landing() {

  const redirectHome = () => 
  {
    history.push('/Home');
  }

  return (
    <div>
      <NavBar/>
      <div className="Body">
      <Grid container spacing={3} 
            direction="column"
            justify="center"
            alignItems="center">
        <Grid item xs={12}>
          <Paper >que shusha





          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
        <Button onClick={redirectHome} variant="contained" color="primary">
        Home
        </Button>
      </div>
      </div>
  );
}

export default Landing;
