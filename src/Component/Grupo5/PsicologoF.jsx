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
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
      root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
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

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleChange = (event) => {
        setAge(event.target.value);
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
            <Typography variant="h4" gutterBottom>
                Ficha Clinica Psicológica
            </Typography>
            <Typography variant="h5" gutterBottom>
                Identificación
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
                <Typography variant="h5" gutterBottom>
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
                    <Typography variant="h5" gutterBottom>
                    Sistema BIO-Clinico
                    </Typography>
                    <Typography variant="h7" gutterBottom>
                    Antecedentes Pre-Natales (Embarazo Materno)
                    comente:
                    </Typography>
                    <TextField
                        id="PNatals"
                        label=""
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    /> <br/>
                    <Typography variant="h7" gutterBottom>
                    Antecedentes Perinatales, comente:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel  id="demo-controlled-open-select-label">Cuando nacio su parti fue:    </InputLabel>
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
                    <Typography variant="h7" gutterBottom>
                    Antecedentes recien nacido, comente:
                    </Typography> <br/>
                    <TextField
                        id="PNatals"
                        label=""
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                    <Typography variant="h7" gutterBottom>
                    Antecedentes del desarrollo, comente:
                    </Typography><br/>
                    <TextField
                        id="PNatals"
                        label=""
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                    <Typography variant="h7" gutterBottom>
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
                        label="Enfermedades"
                        fullWidth
                        multiline
                        rows={5}
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                    Historial escolar
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="esco"
                        label="Nivel Escolar y establecimiento"
                        fullWidth
                        autoComplete="esco"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h7" gutterBottom>
                    A traves de su vida como estudiante, usted ha sido un alumno:
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
                    <Typography variant="h7" gutterBottom>
                    Evaluando en terminos generales lo que ha sido su historial como estudiante Usted se encuentra:
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
                    <Typography variant="h5" gutterBottom>
                    Historial Laboral
                    </Typography>
                    <Typography variant="h7" gutterBottom>
                    Evalue el grado de satisfaccion con su trabajo:
                    </Typography>
                </Grid>
                
                    <Grid item xs={12} md={6}>
                        <TextField
                            type = "number"
                            id="remu"
                            label="Remuneracion"
                            fullWidth
                            autoComplete="remu"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type = "number"
                            id="tipTrab"
                            label="Tipo de trabajo que realiza"
                            fullWidth
                            autoComplete="tip-trab"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                        <TextField
                            type = "number"
                            id="relComp"
                            label="Relacion con sus compañeros de trabajo"
                            fullWidth
                            autoComplete="rel-comp"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type = "number"
                            id="calRend"
                            label="Calidad de su rendimiento laboral"
                            fullWidth
                            autoComplete="cal-rend"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                        <TextField
                            type = "number"
                            id="estLab"
                            label="Estabilidad laboral"
                            fullWidth
                            autoComplete="est-lab"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            type = "number"
                            id="perspDesa"
                            label="Perspectiva de desarrollo"
                            fullWidth
                            autoComplete="persp-desa"
                        />
                    </Grid>
                
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                    Historial Social
                    </Typography>
                    <Typography variant="h7" gutterBottom>
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
                    <Typography variant="h7" gutterBottom>
                    Haciendo un balance de su actual vida social, incluyendo cantidad y calidad de amigos, frecuancia de actividades sociales. etc.
                    </Typography><br/>
                    <Typography variant="h7" gutterBottom>
                        Usted esta:
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
                    <Typography variant="h5" gutterBottom>
                    Sistema Afectivo
                    </Typography>
                    <Typography variant="h7" gutterBottom>
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
                    <Typography variant="h7" gutterBottom>
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
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                    Relacion de Pareja
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h7" gutterBottom>
                        En la actualidad tiene una relaion de pareja:
                    </Typography>
                    <Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkSi"
                                color="primary"
                            />
                            }
                            label="Si"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkNo"
                                color="primary"
                            />
                            }
                            label="No"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="datePareja"
                            label="Hace cuanto tiempo tiene pareja"
                            fullWidth
                            autoComplete="tiempo-pareja"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="namePareja"
                            label="Nombre de la pareja"
                            fullWidth
                            autoComplete="nombre-pareja"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="edadPareja"
                            label="Edad"
                            fullWidth
                            autoComplete="edad-pareja"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="nvEdPareja"
                            label="Nivel educacional"
                            fullWidth
                            autoComplete="nivelEd-pareja"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            required
                            id="cupacionPareja"
                            label="Ocupacion Actual"
                            fullWidth
                            autoComplete="ocupacion-pareja"
                        />
                    </Grid>
                    <Typography variant="h7" gutterBottom>
                        En la relacion de pareja:
                    </Typography>
                    <Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkSatisUd"
                                color="primary"
                            />
                            }
                            label="Usted está más satisfecho que su pareja"
                        />
                    </Grid>
                    <Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkSatisAmbos"
                                color="primary"
                            />
                            }
                            label="Ambos estan igual de satisfechos"
                        />
                    </Grid>
                    <Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkSatisPareja"
                                color="primary"
                            />
                            }
                            label="Su pareja esta más satisfecha que usted"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                    Sentido de Vida
                    </Typography>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="tresMetas"
                            label="Mencione Tres metas en la vida"
                            fullWidth
                            multiline
                            rows={5}
                            defaultValue=""
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant="h7" gutterBottom>
                    De la siguiente lista, marque los sintomas que usted presenta con frecuencia en la actualidad:
                    </Typography>
                    <FormControlLabel control={<Checkbox name="S1" color="primary"/>}
                            label="1. Problemas de concentración y atención"
                    />      
                    <FormControlLabel control={<Checkbox name="S2" color="primary"/>}
                            label="2. Angustia "
                    />
                    <FormControlLabel control={<Checkbox name="S3" color="primary"/>}
                            label="3. Problemas de memoria "
                    />
                    <FormControlLabel control={<Checkbox name="S4" color="primary"/>}
                            label="4. Insomnío "
                    />
                    <FormControlLabel control={<Checkbox name="S5" color="primary"/>}
                            label="5. Exceso de sueño "
                    />
                    <FormControlLabel control={<Checkbox name="S6" color="primary"/>}
                            label="6. Pesadillas "
                    />
                    <FormControlLabel control={<Checkbox name="S7" color="primary"/>}
                            label="7. Sonambulismo "
                    />
                    <FormControlLabel control={<Checkbox name="S8" color="primary"/>}
                            label="8. Aburrimiento "
                    />
                    <FormControlLabel control={<Checkbox name="S9" color="primary"/>}
                            label="9. Irritabilidad "
                    />
                    <FormControlLabel control={<Checkbox name="S10" color="primary"/>}
                            label="10. Mareos "
                    />
                    <FormControlLabel control={<Checkbox name="S11" color="primary"/>}
                            label="11. Cefaleas (Dolores de cabeza) "
                    />
                    <FormControlLabel control={<Checkbox name="S12" color="primary"/>}
                            label="12. Vommitos "
                    />
                    <FormControlLabel control={<Checkbox name="S13" color="primary"/>}
                            label="13. Desmayos "
                    />
                    <FormControlLabel control={<Checkbox name="S14" color="primary"/>}
                            label="14. Diarreas "
                    />
                    <FormControlLabel control={<Checkbox name="S15" color="primary"/>}
                            label="15. Constipacion (dificultad para defecar) "
                    />
                    <FormControlLabel control={<Checkbox name="S16" color="primary"/>}
                            label="16. Vomitos "
                    />
                    <FormControlLabel control={<Checkbox name="S17" color="primary"/>}
                            label="17. Arritmia "
                    />
                    <FormControlLabel control={<Checkbox name="S18" color="primary"/>}
                            label="18. Transpiracion en las manos "
                    />
                    <FormControlLabel control={<Checkbox name="S19" color="primary"/>}
                            label="19. Onicofagia(se come las uñas) "
                    />
                    <FormControlLabel control={<Checkbox name="S20" color="primary"/>}
                            label="20. Temblor en las manos "
                    />
                    <FormControlLabel control={<Checkbox name="S21" color="primary"/>}
                            label="21. Bruxismo (Aprieta mucho la mandibulas al dormir) "
                    />
                    <FormControlLabel control={<Checkbox name="S22" color="primary"/>}
                            label="22. Come en exceso "
                    />
                    <FormControlLabel control={<Checkbox name="S23" color="primary"/>}
                            label="23. Inapetancia "
                    />
                    <FormControlLabel control={<Checkbox name="S24" color="primary"/>}
                            label="24. Sequedad bucal "
                    />
                    <FormControlLabel control={<Checkbox name="S25" color="primary"/>}
                            label="25. Ideas obsesivas "
                    />
                    <FormControlLabel control={<Checkbox name="S26" color="primary"/>}
                            label="26. Ideas de suicidio "
                    />
                    <FormControlLabel control={<Checkbox name="S27" color="primary"/>}
                            label="27. Sentimientos de culpa "
                    />
                    <FormControlLabel control={<Checkbox name="S28" color="primary"/>}
                            label="28. Tartamudez "
                    />
                    <FormControlLabel control={<Checkbox name="S29" color="primary"/>}
                            label="29. Alteraciones menstruales "
                    />
                    <FormControlLabel control={<Checkbox name="S30" color="primary"/>}
                            label="30. Impotencia secual "
                    />
                    <FormControlLabel control={<Checkbox name="S31" color="primary"/>}
                            label="31. Frigidez "
                    />
                    <FormControlLabel control={<Checkbox name="S32" color="primary"/>}
                            label="32. Eyaculación precoz "
                    />
                    <FormControlLabel control={<Checkbox name="S33" color="primary"/>}
                            label="33. Dolor vaginal al tener relaciones Sexuales "
                    />
                    <FormControlLabel control={<Checkbox name="S34" color="primary"/>}
                            label="34. Poco deseo Sexual "
                    />
                    <FormControlLabel control={<Checkbox name="S35" color="primary"/>}
                            label="35. Tics "
                    />
                    <FormControlLabel control={<Checkbox name="S36" color="primary"/>}
                            label="36. Se fatiga fácilmente "
                    />
                    <FormControlLabel control={<Checkbox name="S37" color="primary"/>}
                            label="37. Llanto "
                    />
                    <FormControlLabel control={<Checkbox name="S38" color="primary"/>}
                            label="38. Desanimo "
                    />
                    <FormControlLabel control={<Checkbox name="S39" color="primary"/>}
                            label="39. Pena "
                    />
                    <FormControlLabel control={<Checkbox name="S40" color="primary"/>}
                            label="40. Ingestión escesiva de alcohol "
                    />
                    <FormControlLabel control={<Checkbox name="S41" color="primary"/>}
                            label="41. Consumo de Drogas "
                    />
                    <FormControlLabel control={<Checkbox name="S42" color="primary"/>}
                            label="42. Hipocondría (tendecia excesiva a atribuirse enfermedades) "
                    />
                    <Typography variant="h7" gutterBottom>
                    43. Miedos desproporcionados: <br />
                    </Typography>
                    <FormControlLabel control={<Checkbox name="S43.a" color="primary"/>}
                            label="a. Las alturas  "
                    />
                    <FormControlLabel control={<Checkbox name="S43.b" color="primary"/>}
                            label="b. Los espacios cerrados "
                    />
                    <FormControlLabel control={<Checkbox name="S43.c" color="primary"/>}
                            label="c. Viajar en avión "
                    />
                    <FormControlLabel control={<Checkbox name="S43.d" color="primary"/>}
                            label="d. Ver sangre "
                    />
                    <FormControlLabel control={<Checkbox name="S43.e" color="primary"/>}
                            label="e. Los espacion abiertos  "
                    /><br />
                    <Typography variant="h7" gutterBottom>
                    44. Otros miedos: <br />
                    </Typography>
                    <TextField
                            id="tresMetas"
                            label=""
                            fullWidth
                            multiline
                            rows={3}
                            defaultValue=""
                        />






                </Grid>








                <Grid item xs={12} md={6} alignContent="flex-end" className={classes.root}>
                    <Button variant="outlined" color="primary" href="#contained-buttons" startIcon={<CheckIcon />} onClick={handleClick} >
                        Finalizar
                </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            La ficha se ha creado con exito!
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}