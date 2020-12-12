import React from "react";
import Logo from "../../../logo.png";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import history from "../../../history";
import axios from "axios";



const Recuperar = () => {
  history.push("Recuperar");
};

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

export default function Ingreso() {
  const classes = useStyles();

  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmYmQ0NzUwYjc2YmY1MDAxZGUzNGE5ZiIsImVtYWlsIjoiYW5kcmVzLnphcGF0YUBhbHVtbm9zLnV2LmNsIiwicGFzc3dvcmQiOiIkMmEkMTAkajdGbnFiVHNIZ2N5NVMvazF5eUREZUdxeFRjaENLWWxnMXRSMlBuNUYzdDUvb3JKZ3ZyNjIiLCJfX3YiOjB9LCJpYXQiOjE2MDYzMzI5MzQsImV4cCI6MTYwNjM0MDEzNH0.M0FeIAHlTZ9VSRRAeBJlaqX0adEmv-z6Oq0k1Zp7gpo'
  );
  
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = React.useState(storedJwt || null);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [passFlag, setPassFlag] = React.useState(false);


  const Log = () => {
    let data = {email: email, password: pass};
    let url = `http://localhost:8080/funcionarios/login`;
    let reqParams= { 
      headers: {'Authorization': jwt}
    };

    axios.post(url, data, reqParams)
    .then(
      (response) => {
        setJwt(response.data.token)
      },
      (error) => {
        setPassFlag(true);
        console.log(error);
      }
    );

  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} height="100" alt="" />
        <Typography component="h1" variant="h5">
          Ingresa tus datos para acceder a la plataforma
        </Typography>
          <TextField
            error={passFlag}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id=""
            label="Email"
            name="email"
            autoComplete="Rut"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}

          />
          <TextField
            error={passFlag}
            id="standard-password-input"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Contraseña"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPass(e.target.value)}
          />

          {passFlag? 
            <div style={{color:"red"}}>
              Contraseña o correo incorrecto.
              <br></br>
            </div>
          :
          ""
          }

          <Button
            onClick={Log}
            type="Ingresa"
            fullWidth
            variant="contained"
            color="primary"
          >
            Aceptar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={Recuperar} variant="body2">
                ¿No recuerdas tu contraseña?
              </Link>
            </Grid>
            <Grid item></Grid>
          </Grid>
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
