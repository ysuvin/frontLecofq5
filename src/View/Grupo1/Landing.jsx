import React from 'react';
import '../../css/Grupo1/Landing.css';
import NavBar from '../../Component/Grupo1/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Landing() {

  return (
    <div className="wrapper">
      <NavBar className="paper"/>
      <div className="body">
        <Grid container spacing={3} 
              direction="column"
              justify="center"
              alignItems="center">
          <Grid item xs={12}>
            <Paper>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Amet aliquam id diam maecenas. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Eu nisl nunc mi ipsum faucibus vitae 
              aliquet. Massa sed elementum tempus egestas sed sed risus pretium. Egestas fringilla phasellus faucibus scelerisque eleifend 
              donec pretium. Pulvinar neque laoreet suspendisse interdum. Duis at tellus at urna condimentum mattis pellentesque. Pellentesque 
              dignissim enim sit amet venenatis urna cursus eget nunc. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. 
              Adipiscing elit duis tristique sollicitudin nibh. 
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
      </div>
    </div>
  );
}

export default Landing;
