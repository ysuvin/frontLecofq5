import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../logo.png";
import history from "../../history"


const volver = () => {
    history.push("");
}
const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "#ffffff",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    paddingTop: "2em",
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "#ffffff",
  },
}));

export default function Confirmacion({mensaje}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} height="100" alt="" />
      </div>
      <div className={classes.root}>
        {/* <Typography variant = "h6" >Estos datos se enviarán al Laboratorio y le llegará un correo confirmando su hora de atención. </Typography>   */}
        <Typography variant="h4" component="h1" gutterBottom>
          Gracias por completar el formulario
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Pronto se pondran se pondran en contacto, para {mensaje}
        </Typography>
        <Grid container>
          <Grid item>
            <Link onClick={volver} variant="body2">
              ← Volver a la pantalla de Inicio
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
