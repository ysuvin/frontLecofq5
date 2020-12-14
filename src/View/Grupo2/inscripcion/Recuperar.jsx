import React from "react";
import Logo from "../../../logo.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import history from "../../../history";
import Confirmacion from "../../../Component/Grupo2/Confirmacion";

const volver = () => {
  history.push("");
};

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

export default function Recuperar() {
  const classes = useStyles();
  const [bandera, setBandera] = React.useState(false);

  const Recuperar = () => {
    setBandera(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      {!bandera ? (
        <div className={classes.paper}>
          <img src={Logo} height="100" alt="" />
          <Typography component="h1" variant="h5">
            Ingresa Tu Rut
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Rut"
                  label="Rut"
                  name="Rut"
                  autoComplete="Rut"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              onClick={Recuperar}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Aceptar
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link onClick={volver} variant="body2">
                  ← Volver a la pantalla de Inicio
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      ) : (
        <Confirmacion mensaje="recuperar su contraseña." />
      )}
    </Container>
  );
}
