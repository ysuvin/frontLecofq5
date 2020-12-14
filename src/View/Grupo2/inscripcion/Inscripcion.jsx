import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import history from "../../../history";
import Logo from "../../../logo.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import Confirmacion from "../../../Component/Grupo2/Confirmacion";
import axios from "axios";

export default function Inscripcion() {
  const volver = () => {
    history.push("");
  };

  const validarRut = (run) => {
    setRut(run);
    if (run == "") return false;
    var r = run;
    r = r.trim();
    r = r.toLowerCase();
    if (
      r.indexOf(" ") > -1 ||
      r.indexOf(".") > -1 ||
      r.indexOf("-") > -1 ||
      (r.indexOf(".") > -1 && r.indexOf("-") > -1) ||
      (r.indexOf(".") > -1 && r.indexOf("-") > -1 && r.indexOf(" ") > -1)
    ) {
      r = elimPunGui(r);
    }
    var rutString = r;
    if (r.length < 9) {
      r = "0" + r;
    }
    var rut = r.substr(0, 8);
    var dv = r.charAt(r.length - 1);

    let dvs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "k", "K"];
    var num = /^([0-9]+|[0-9]+[k])*$/;
    if (num.test(r)) {
      if (!isNaN(rut)) {
        if (dvs.includes(dv)) {
          let _dv = calculaDv(rut);
          if (dv == _dv) {
            if (rutString.length < 9) {
              let runValidado =
                rutString.substr(0, 1) +
                "." +
                rutString.substr(1, 3) +
                "." +
                rutString.substr(4, 3) +
                "-" +
                dv;
              setBanderaErrorEntrada(false);
              setBanderaSuccesEntrada(true);
              setRut(runValidado);
            } else {
              let runValidado =
                rutString.substr(0, 2) +
                "." +
                rutString.substr(2, 3) +
                "." +
                rutString.substr(5, 3) +
                "-" +
                dv;
              setBanderaErrorEntrada(false);
              setBanderaSuccesEntrada(true);

              setRut(runValidado);
            }
          } else {
            let runValidado =
              rutString.substr(0, rutString.length - 1) + "-" + dv;
            setRut(runValidado);
            setBanderaErrorEntrada(true);
          }
        } else {
          let runValidado =
            rutString.substr(0, rutString.length - 1) + "-" + dv;

          setRut(runValidado);
          setBanderaErrorEntrada(true);
        }
      } else {
        let runValidado = rutString.substr(0, rutString.length - 1) + "-" + dv;

        setRut(runValidado);
        setBanderaErrorEntrada(true);
      }
    } else {
      let runValidado = rutString.substr(0, rutString.length - 1) + "-" + dv;

      setRut(runValidado);
      setBanderaErrorEntrada(true);
    }
  };
  const calculaDv = (T) => {
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? (S - 1).toString() : "k";
  };

  const elimPunGui = (n) => {
    while (n.toString().indexOf(".") != -1) {
      n = n.toString().replace(".", "");
    }
    while (n.toString().indexOf("-") != -1) {
      n = n.toString().replace("-", "");
    }
    while (n.toString().indexOf(" ") != -1) {
      n = n.toString().replace(" ", "");
    }
    return n;
  };

  function isEmpty(data) {
    if (data == "" || data == " ") {
      return true;
    } else {
      return false;
    }
  }

  const Ingreso = () => {
    history.push("Grupo2/Ingreso");
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
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();
  const [nombre, setNombre] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [telefonoap, setTelefonoAp] = React.useState("");
  const [rut, setRut] = React.useState("");
  const [localidad, setLocalidad] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [bandera, setBandera] = React.useState(false);

  const [errorTelefonoA, setErrorTelefono] = React.useState(false);
  const [errorRut, setErrorRut] = React.useState(false);
  const [errorNombre, setErrorNombre] = React.useState(false);
  const [errorCorreo, setErrorCorreo] = React.useState(false);

  const [banderaErrorEntrada, setBanderaErrorEntrada] = useState(false);
  const [banderaSuccesEntrada, setBanderaSuccesEntrada] = useState(false);

  const confirmacionDatos = () => {
    if (
      !isEmpty(nombre) ||
      !isEmpty(correo) ||
      !isEmpty(rut) ||
      !isEmpty(telefonoap) ||
      !banderaErrorEntrada
    ) {
      let data = {
        Nombre: nombre,
        Correo: correo,
        Telefono: parseInt(telefono),
        TelefonoApoderado: parseInt(telefonoap),
        RutSinDV: rut,
        DigitoVerificador: rut,
        Localidad: localidad,
        Direccion: direccion,
      };
      console.log("data: ", data);


      axios.post(`http://localhost:8080/users/add`, data).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      setErrorTelefono(isEmpty(telefonoap));
      setErrorRut(isEmpty(rut));
      setErrorNombre(isEmpty(nombre));
      setErrorCorreo(isEmpty(correo));
    }
    setBandera(true);
  };
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#f99f31"),
      backgroundColor: "#f99f31",
      "&:hover": {
        backgroundColor: "#f99f31",
      },
    },
  }))(Button);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      {!bandera ? (
        <div className={classes.paper}>
          <img src={Logo} height="100" alt="" />
          <Typography variant="h3">Ingrese sus datos </Typography>
          <Typography variant="h6">
            Estos datos se enviarán al Laboratorio de Evaluación de la Condición
            Física de Quintero (LECOFQ) y le llegará un correo confirmando su
            hora de atención.{" "}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                error={errorNombre}
                required
                id="nombre"
                name="nombre"
                label="Nombre"
                fullWidth
                autoComplete="formulario nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errorCorreo}
                required
                id="correo"
                name="correo"
                label="Correo"
                fullWidth
                autoComplete="formulario correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="telefono"
                name="telefono"
                label="Telefono (opcional)"
                fullWidth
                autoComplete="formulario telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={errorTelefonoA}
                required
                id="telefonoApoderado"
                name="telefonoApoderado"
                label="Telefono Apoderado"
                fullWidth
                autoComplete="formulario telefono apoderado"
                value={telefonoap}
                onChange={(e) => setTelefonoAp(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {!banderaErrorEntrada ? (
                <TextField
                  style={{ borderColor: "green" }}
                  required
                  id="rut"
                  name="rut"
                  label="Rut"
                  onBlur={(e) => validarRut(e.target.value)}
                  fullWidth
                  autoComplete="formulario rut"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              ) : (
                <div>
                  <TextField
                    required
                    id="rut"
                    name="rut"
                    label="Rut"
                    onBlur={(e) => validarRut(e.target.value)}
                    fullWidth
                    autoComplete="formulario rut"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    error
                  />
                </div>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.form}>
                <InputLabel id="demo-simple-select-label">
                  Localidad (opcional)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={localidad}
                  onChange={(e) => setLocalidad(e.target.value)}
                >
                  <MenuItem value={"Santa Luisa"}>Santa Luisa</MenuItem>
                  <MenuItem value={"Santa Adela"}>Santa Adela</MenuItem>
                  <MenuItem value={"Santa Julia"}>Santa Julia</MenuItem>
                  <MenuItem value={"Mantagua"}>Mantagua</MenuItem>
                  <MenuItem value={"Valle Alegre"}>Valle Alegre</MenuItem>
                  <MenuItem value={"Loncura"}>Loncura</MenuItem>
                  <MenuItem value={"Quintero"}>Quintero</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="dir"
                name="direccion"
                label="Direccion (opcional)"
                fullWidth
                autoComplete="formulario direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </Grid>
          </Grid>

          <ColorButton
            onClick={confirmacionDatos}
            type="submit"
            fullWidth
            variant="contained"
            color="Red"
            className={classes.submit}
          >
            Listo!
          </ColorButton>
          <ColorButton
            onClick={Ingreso}
            type="submit"
            fullWidth
            variant="contained"
            color="Red"
            className={classes.submit}
          >
            Login Funcionarios
          </ColorButton>
          <Grid container>
            <Grid item>
              <Link onClick={volver} variant="body2">
                ← Volver a la pantalla de Inicio
              </Link>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Confirmacion mensaje="confirmar su hora." />
      )}
    </Container>
  );
}
