import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
}));
const useStyless = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export default function PsicologoF() {


    const [values, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Ficha Clinica adulto
            </Typography>
            <Typography variant="h6" gutterBottom>
                Identificacion
            </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <form className={classes.container} noValidate>
                    <TextField
                        required
                        id="fecha"
                        label="Fecha "
                        type="date"
                        defaultValue="none"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                    <TextField required type = "number" id="rutPaci" label="Rut (Ej: 12345678-9)" fullWidth autoComplete="rut-paci" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        disabled
                        id="nombre"
                        label="Nombre"
                        fullWidth
                        autoComplete="nombre"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <form className={classes.container} noValidate>
                    <TextField
                        disabled
                        id="date"
                        label="Fecha de Nacimiento"
                        type="date"
                        defaultValue="none"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="lugNac"
                        label="Lugar de Nacimiento"
                        fullWidth
                        autoComplete="lug-nac"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        disabled
                        id="estC"
                        label="Estadi Civil"
                        fullWidth
                        autoComplete="est-civil"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        disabled
                        id="direcc"
                        label="Direccion"
                        fullWidth
                        autoComplete="direcc"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        disabled
                        id="telefCont"
                        label="Telefono Contacto"
                        fullWidth
                        autoComplete="telef-cont"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="ocupAct"
                        label="Ocupacion Actual"
                        fullWidth
                        autoComplete="ocup-act"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="esc"
                        label="Escolaridad"
                        fullWidth
                        autoComplete="esc"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                Antecedentes Iniciales
                </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <TextField
                        id="seBrev"
                        label="Señale brevemente las razones que le han traido a consulta"
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="cualCree"
                        label="Cual cree UD., que es la o las causas que originaron el o los problemas por los que consulta"
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="haCons"
                        label="Ha consultado con anterioridad a algun psicologo, psiquiatra o neurologo. Explique cuando y porque"
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Sistema BIO-Clinico
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Antecedentes Pre-Matales (Embarazo Materno)
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Antecedentes Perinatales
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Cuando nacio su parti fue:    </InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open2}
                        onClose={handleClose2}
                        onOpen={handleOpen2}
                        value={values}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>(Vacio)</em>
                        </MenuItem>
                        <MenuItem value={10}>Normal</MenuItem>
                        <MenuItem value={20}>Prematuro</MenuItem>
                        <MenuItem value={20}>Tardio</MenuItem>
                        <MenuItem value={20}>Cesaria</MenuItem>
                        <MenuItem value={20}>Espontaneo</MenuItem>
                        <MenuItem value={20}>Inducido</MenuItem>
                        <MenuItem value={20}>Force?</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Antecedentes recien nacido
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Antecedentes del desarrollo
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Dificultades para aprener a:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkAndar"
                            color="primary"
                        />
                        }
                        label="Andar"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkHablar"
                            color="primary"
                        />
                        }
                        label="Hablar"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkLeerEscribir"
                            color="primary"
                        />
                        }
                        label="Leer y Escribir"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkControlar"
                            color="primary"
                        />
                        }
                        label="Controlar Esfinter"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkConductual"
                            color="primary"
                        />
                        }
                        label="Conductual"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkOtros"
                            color="primary"
                        />
                        }
                        label="Otros"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="enferDe"
                        label="Enfermedades o ?"
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Historial escolar
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="esco"
                        label="Escolaridad (establecimiento y grado alcanzado)"
                        fullWidth
                        autoComplete="esco"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    A traves de su vida como estudiante, Ud ha sido un alumno:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkExelente"
                            color="primary"
                        />
                        }
                        label="Exelente"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkBueno"
                            color="primary"
                        />
                        }
                        label="Bueno"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkRegular"
                            color="primary"
                        />
                        }
                        label="Regular"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMalo"
                            color="primary"
                        />
                        }
                        label="Malo"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMMalo"
                            color="primary"
                        />
                        }
                        label="Muy Malo"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="tuvoProb"
                        label="Tuvo problemas de conducta en el colegio"
                        fullWidth
                        autoComplete="tuvo-prob"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="tuvoProb2"
                        label="Tuvo problemas de adaptacion en el colegio"
                        fullWidth
                        autoComplete="tuvo-prob2"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Evaluendo en terminos generales lo que ha sido su historial como estudiante Ud. se encuentra:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMSatisfecho"
                            color="primary"
                        />
                        }
                        label="Muy Satisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkSatisfecho"
                            color="primary"
                        />
                        }
                        label="Satisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkRSatisfecho"
                            color="primary"
                        />
                        }
                        label="Relativamente Satisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkInsatisfecho"
                            color="primary"
                        />
                        }
                        label="Insatisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMInsatisfecho"
                            color="primary"
                        />
                        }
                        label="Muy Insatisfecho"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Historial Laboral
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    Evalue el grado de satisfaccion con su trabajo:
                    </Typography>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="remu"
                            label="Remuneracion"
                            fullWidth
                            autoComplete="remu"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="tipTrab"
                            label="Tipo de trabajo que realiza"
                            fullWidth
                            autoComplete="tip-trab"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="calTrab"
                            label="Calidad de trabajo"
                            fullWidth
                            autoComplete="cal-trab"
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="relComp"
                            label="Relacion con sus compañeros de trabajo"
                            fullWidth
                            autoComplete="rel-comp"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="calRend"
                            label="Calidad de su rendimiento laboral"
                            fullWidth
                            autoComplete="cal-rend"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="relSup"
                            label="Relacion con su superior"
                            fullWidth
                            autoComplete="rel-sup"
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="estLab"
                            label="Estabilidad laboral"
                            fullWidth
                            autoComplete="est-lab"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type = "number"
                            id="perspDesa"
                            label="Perspectiva de desarrollo"
                            fullWidth
                            autoComplete="persp-desa"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Historial Social
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    A traves de su vida Ud. ha sido una persona:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkSociable"
                            color="primary"
                        />
                        }
                        label="Sociable"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkRSociable"
                            color="primary"
                        />
                        }
                        label="Relativamente sociable"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkPsociable"
                            color="primary"
                        />
                        }
                        label="Poco Sociable"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Historial Social
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    A traves de su vida Ud. ha sido una persona:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkPSatisfecho"
                            color="primary"
                        />
                        }
                        label="Plenamente Satisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkSatisfecho"
                            color="primary"
                        />
                        }
                        label="Satisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkRSatisfecho"
                            color="primary"
                        />
                        }
                        label="Relativamente Satisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkInsatisfecho"
                            color="primary"
                        />
                        }
                        label="Insatisfecho"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMInsatisfecho"
                            color="primary"
                        />
                        }
                        label="Muy Insatisfecho"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Sistema Afectivo
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                    En general sus estados de animo son:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMEstable"
                            color="primary"
                        />
                        }
                        label="Muy Estable"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkREstable"
                            color="primary"
                        />
                        }
                        label="Relativamente Estable"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkVariado"
                            color="primary"
                        />
                        }
                        label="Varia en funcion de las experiencias"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                    Alguna de situaciones ha estado presente en su vida durante el ultimo año:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkCesantia"
                            color="primary"
                        />
                        }
                        label="Cesantia"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkSMatrimonial"
                            color="primary"
                        />
                        }
                        label="Separacion Matrimonial"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkDLaboral"
                            color="primary"
                        />
                        }
                        label="Despido Laboral"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkMFamiliar"
                            color="primary"
                        />
                        }
                        label="Muerte de un Familiar Cercano"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkEnfermedad"
                            color="primary"
                        />
                        }
                        label="Enfermedad"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkFProblemas"
                            color="primary"
                        />
                        }
                        label="Fuertes Problemas Economicos"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkAccidente"
                            color="primary"
                        />
                        }
                        label="Accidente"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkFAcadenico"
                            color="primary"
                        />
                        }
                        label="Fracaso Academico"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkEHijo"
                            color="primary"
                        />
                        }
                        label="Enfermedad de un Hijo"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkCResidencia"
                            color="primary"
                        />
                        }
                        label="Cambio de Residencia"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}