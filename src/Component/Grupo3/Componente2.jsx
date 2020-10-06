import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Inscribite from "./InscripcionComponent";
import Footer from "./Footer";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import MuroP from "./MuroProf";
import MuroP1 from "./MuroProf1";


//import 'react-calendar/dist/Calendar.css';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Orange Hesit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({

  img: {
    backgroundImage:
      "url(https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-sports-and-active-living.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
  },
  cardMedia: {
    paddingTop: "63.25%", // 16:9
  },
  cardMedia1: {
    width: 250, height: 250,


  },
  title: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#4054c7",
    padding: theme.spacing(2),
  },
  //appBarSpacer: theme.mixins.toolbar,// me genera el espcio en la wea
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 5, 6),

  },
  root1: {
    height: 200,
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  container: {

  },
  paper: {
    padding: theme.spacing(2),// espacio dentro de grid
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: { // ancho de las 2 primeras grid
    height: 960,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {

  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Dashboard() {
  const classes = useStyles();



  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment >
      <main>
        <div className={classes.root}>
          <CssBaseline />

          <Container  >
            <Grid container spacing={1}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={7}>
                <Paper className={fixedHeightPaper}>
                  <Typography variant="h2" align="left" color="primary" paragraph>
                    Deporte X
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Cupos: 10/20
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Lugar: Villa las palmas, pasaje el maqui n°234.
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Implementación: implementación.
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Otros detalles: Detalle extenso.
                </Typography>

                  <br></br>

                  <Typography variant="body2" align="justify" color="inherit" paragraph>
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
              </Typography>
                  <Typography variant="body2" align="justify" color="inherit" paragraph>
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte

              </Typography>
                  <br></br>
                  <Divider />
                  <br></br>




                  {/*
                                      {<CardMedia
                    className={classes.cardMedia1}
                    image="https://source.unsplash.com/random"
                    title="Image title"
              />}
                    <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Nombre: Felipe Castro A
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Rut: 9.999.999-0
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Correo: felipe.castroa@alumnos.uv.cl
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Direccion: Melipilla.
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Numero: +56962967905
                </Typography>
                    */}

                  <div className={classes.details}>
                    <Typography variant="h5" align="center" color="inherit" paragraph>
                      Datos del profesor 1
                </Typography>

                    <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={6}>

                        <Grid container>
                          <Grid item>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Nombre: Felipe Castro A
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Rut: 9.999.999-0
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Correo: felipe.castroa@alumnos.uv.cl
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Direccion: Melipilla.
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Numero: +56962967905
                </Typography>



                            <Typography variant="subtitle2" align="letf">
                              Horario de clases: Martes
                    </Typography>
                            <Typography variant="subtitle2" align="letf">
                              15:50 pm - 16:30 pm
                    </Typography>
                            <h1 align="left">
                              <Inscribite></Inscribite></h1>
                          </Grid>
                        </Grid>

                      </Grid>
                      <Grid item xs={6}>

                        <Grid container>
                          <Grid item>


                            <CardMedia

                              align="center"
                              className={classes.cardMedia1}
                              image="https://informatica.uv.cl/images/contenido/academicos/actualizado/rodrigo_olivares.png"
                              title="Image title"
                            />

                          </Grid>
                        </Grid>

                      </Grid>
                    </Grid>

                  </div>
                  <br></br>
                  <Divider />
                  <br></br>

                  <div className={classes.details}>
                    <Typography variant="h5" align="center" color="inherit" paragraph>
                      Datos del profesor 2
                </Typography>

                    <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={6}>

                        <Grid container>
                          <Grid item>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Nombre: Fernando del pino
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Rut: 9.999.999-0
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Correo: Fernando.delprino@alumnos.uv.cl
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Direccion: san fernando.
                </Typography>
                            <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                              Numero: +56962967905
                </Typography>



                            <Typography variant="subtitle2" align="letf">
                              Horario de clases: Martes
                    </Typography>
                            <Typography variant="subtitle2" align="letf">
                              15:50 pm - 16:30 pm
                    </Typography>

                            <h1 align="left">
                              <Inscribite></Inscribite></h1>
                          </Grid>
                        </Grid>

                      </Grid>
                      <Grid item xs={6}>

                        <Grid container>
                          <Grid item>
                            <CardMedia
                              align="center"
                              className={classes.cardMedia1}
                              image="https://informatica.uv.cl/images/contenido/academicos/actualizado/gabriel_astudillo.png"
                              title="Image title"
                            />
                          </Grid>
                        </Grid>

                      </Grid>
                    </Grid>

                  </div>


                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={5}>
                <Paper className={fixedHeightPaper}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://postgrados.derecho.uchile.cl/wp-content/uploads/2019/05/Deporte2.jpg"
                    title="Image title"
                  />
                  <br></br>
                  <Divider />
                  <br></br>
                  <Typography variant="h5" align="center">Muro del taller</Typography>
                  <MuroP></MuroP>
                  <br></br>
                  <MuroP1></MuroP1>
                </Paper>
              </Grid>

            </Grid>

          </Container>

        </div>
      </main>
      <Footer></Footer>
    </React.Fragment>

  );
}
