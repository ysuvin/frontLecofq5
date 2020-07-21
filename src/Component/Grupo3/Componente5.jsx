import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStylesTabla = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nombre, apellido, fono, asistencia) {
  return { nombre, apellido, fono, asistencia };
}

const rows = [
  createData("Juan", "Perez Pulido", "(+56)(9)89233464"),
  createData("Rocio", "Lopez Aguilar", "(+56)(9)57457458"),
  createData("Alejandro", "Salgado Villarroel", "(+56)(9)37279454"),
  createData("Omar", "Olivares Montecino", "(+56)(9)54389583"),
  createData("Luis", "Pulido Valdes", "(+56)(9)43824937"),
];

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

// BOTON GUARDAR
const useStylesBoton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

// CONTENEDOR
const useStylesContenedor = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

// SELECCIONADOR
const useStylesTaller = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DatePickers() {

  const classesTabla = useStylesTabla();

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classesBoton = useStylesBoton();

  const classesContenedor = useStylesContenedor();

  const classesSeleccionar = useStylesTaller();
  const [taller, setTaller] = React.useState('');

  const handleChangeTaller = (event) => {
    setTaller(event.target.value);
  };

  return (
    <div>
      <br />
      <div className={classesContenedor.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Container maxWidth="xs">
              <FormControl className={classesSeleccionar.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Seleccione taller
        </InputLabel>
                <Select
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={taller}
                  onChange={handleChangeTaller}
                  displayEmpty
                  className={classesSeleccionar.selectEmpty}
                >
                  <MenuItem value="">
                    <em>Seleccione</em>
                  </MenuItem>
                  <MenuItem value={10}>Danza pequeños</MenuItem>
                  <MenuItem value={20}>Club nautico</MenuItem>
                  <MenuItem value={30}>Kayak y Vela</MenuItem>
                  <MenuItem value={30}>Yoga</MenuItem>
                  <MenuItem value={30}>Buce</MenuItem>
                  <MenuItem value={30}>Acuicultura</MenuItem>
                  <MenuItem value={30}>Kayak inclusivo</MenuItem>
                  <MenuItem value={30}>Body Board</MenuItem>
                  <MenuItem value={30}>Vela</MenuItem>
                  <MenuItem value={30}>Surf</MenuItem>
                  <MenuItem value={30}>Fútbol niños</MenuItem>
                  <MenuItem value={30}>Fútbol femenino</MenuItem>
                  <MenuItem value={30}>Elige vivir sano</MenuItem>
                  <MenuItem value={30}>Atletismo</MenuItem>
                  <MenuItem value={30}>Tenis de campo</MenuItem>
                  <MenuItem value={30}>Ciclismo</MenuItem>
                  <MenuItem value={30}>Zumba</MenuItem>
                  <MenuItem value={30}>Patinaje municipal</MenuItem>
                  <MenuItem value={30}>Voley</MenuItem>
                  <MenuItem value={30}>Basquetbol</MenuItem>
                  <MenuItem value={30}>Discapacidad</MenuItem>
                  <MenuItem value={30}>Escalada</MenuItem>
                  <MenuItem value={30}>Gimnacia Ritmica</MenuItem>
                  <MenuItem value={30}>Taekwondo</MenuItem>
                  <MenuItem value={30}>Tenis Mesa</MenuItem>
                  <MenuItem value={30}>Capoeira</MenuItem>
                </Select>

              </FormControl>
            </Container>
            <br />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>

      <Container maxWidth="xl">
        <TableContainer component={Paper}>
          <Table
            className={classesTabla.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center"> Nombre</TableCell>
                <TableCell align="center"> Apellidos</TableCell>
                <TableCell align="center"> Fono</TableCell>
                <TableCell align="center"> Aceptación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.nombre}>
                  <TableCell align="left">{row.nombre}</TableCell>
                  <TableCell align="left">{row.apellido}</TableCell>
                  <TableCell align="center">{row.fono}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                        />
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container maxWidth="false">
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classesBoton.button}
          startIcon={<SaveIcon />}
        >
          Guardar
        </Button>
      </Container>
    </div>
  );
}
