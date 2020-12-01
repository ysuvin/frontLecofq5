import React, { useState, useEffect } from 'react';
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
import Axios from 'axios';
import { useParams } from 'react-router-dom';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    //uso:    className={classes.container3}
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    container1: {
        marginTop: 50,
        marginBottom: 5,

    },
    container2: {
        marginBottom: 10,
    },
    container3: {
        marginLeft: 10,
    },
    textField: {
        marginTop: 10,
        marginBottom: 0,
        width: 300,
    },
    button: {
        display: 'block',
        marginTop: 50,
    },
    formControl: {

        marginTop: 0,
        marginBottom: 10,
        width: 300,
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }


}));


export default function PutFichaPsicologoF() {


    const [values, setAge] = React.useState('');
    const [values3, setAge3] = React.useState('');
    const [values2, setAge2] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const { id } = useParams();
    
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };
    const handleChange3 = (event) => {
        setAge3(event.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleOpen3 = () => {
        setOpen3(true);
    };
    const classes = useStyles();

    // value={Number(data.rut)}

    useEffect(() => {
        peticionGet(id)
    }, []);

    const [data, setData] = useState([]);

    const peticionGet = (id) => {
        Axios.get(`http://localhost:8080/fichaPsicologo/${id}`).then(response => {
            setData(response.data.data);
            console.log("console: ", response.data.data);
        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div style={{
            marginLeft: 100, marginRight: 100, marginBottom: 50, marginTop: 50
        }}>
            <React.Fragment>
                <Grid xs={12} >
                    <Typography variant="h3"  >
                        Ficha Clinica Psicológica
                    </Typography>
                </Grid>
                <Grid container 
                    direction="column"
                    //justify="flex-start"
                    //alignItems="stretch"
                    >

                    <Grid item >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Identificación Paciente
                        </Typography>
                        <Grid item >
                            <TextField 
                                disabled
                                type="number"
                                id="rutPaci"
                                label="Rut (Ej: 6345678-9)"
                                fullWidth
                                autoComplete="rut-paci"
                                value={Number(data.rut)} />
                        </Grid>
                        <Grid item  >
                            <form className={classes.container} noValidate>
                                <TextField
                                    disabled
                                    id="fecha"
                                    label="Fecha"
                                    type="date"
                                    defaultValue="none"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={data.fechaAtencion}
                                />
                            </form>
                        </Grid>
                        <Grid item  >
                            <TextField
                                disabled
                                id="nombre"
                                label="Nombre"
                                fullWidth
                                autoComplete="nombre"
                                
                            />
                        </Grid>
                        <Grid item  >
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
                        <Grid item  >
                        <InputLabel >Lugar de Nacimiento</InputLabel>

                            <TextField
                                disabled
                                id="lugNac"
                                //label="Lugar de Nacimiento"
                                fullWidth
                                autoComplete="lug-nac"
                                value= {data.lugarNacimiento}
                            />
                        </Grid>
                        <Grid item  >
                        <InputLabel >Estado Civil</InputLabel>
                            <TextField
                                disabled
                                id="estC"
                                //label="Estado Civil"
                                fullWidth
                                autoComplete="est-civil"
                                value={data.estado_civil}

                            />
                        </Grid>
                        <Grid item  >
                        <InputLabel >Dirección</InputLabel>
                            <TextField
                                disabled
                                id="direcc"
                                //label="Direccion"
                                fullWidth
                                autoComplete="direcc"

                            />
                        </Grid>
                        <Grid item  >
                        
                            <TextField
                                disabled
                                id="telefCont"
                                label="Telefono Contacto"
                                fullWidth
                                autoComplete="telef-cont"
                                value={Number(data.telefono)}
                                
                            />
                        </Grid>
                        <Grid item  >
                        <InputLabel >Ocupacion Actual</InputLabel>
                            <TextField
                                disabled
                                id="ocupAct"
                                //label="Ocupacion Actual"
                                fullWidth
                                autoComplete="ocup-act"
                                value={data.ocupacionActual}
                                
                            />
                        </Grid>
                        <Grid item >
                        <InputLabel >Escolaridad</InputLabel>
                            <TextField
                                disabled
                                id="esc"
                                //label="Escolaridad"
                                fullWidth
                                autoComplete="esc"
                                value={data.escolaridad}
                            />
                        </Grid>
                    </Grid>

                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Antecedentes Iniciales
                        </Typography>
                    </Grid>

                    <Grid item  >
                    <InputLabel >Señale brevemente las razones que le han traido a consulta</InputLabel>
                        <TextField
                            disabled
                            id="seBrev"
                           // label="Señale brevemente las razones que le han traido a consulta"
                            fullWidth
                            multiline
                            rows={4}
                            value={data.razonesConsulta}
                            
                        />
                    </Grid>
                    <Grid item  >
                        <InputLabel >Cual cree UD., que es la o las causas que originaron el o los problemas por los que consulta</InputLabel>
                        <TextField
                            disabled
                            id="cualCree"
                           // label="Cual cree UD., que es la o las causas que originaron el o los problemas por los que consulta"
                            fullWidth
                            multiline
                            rows={4}
                            value={data.causasConsulta}
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Ha consultado con anterioridad a algun psicologo, psiquiatra o neurologo. Explique cuando y porque</InputLabel>
                        <TextField
                            disabled
                            id="haCons"
                            //label="Ha consultado con anterioridad a algun psicologo, psiquiatra o neurologo. Explique cuando y porque"
                            fullWidth
                            multiline
                            rows={4}
                            value={data.psicologoAnteriorRazon}
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Sistema BIO-Clinico
                        </Typography>
                        <InputLabel >Antecedentes Pre-Natales (Embarazo Materno)</InputLabel>
                        
                        <TextField
                            disabled
                            className={classes.container2}
                            id="PNatals"
                            label=""
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value= {data.antecedentePrenatal}
                            
                        /> <br />
                        
                    </Grid>
                    <Grid item  >
                        <InputLabel >Antecedentes Perinatales</InputLabel>
                        <TextField
                                disabled
                                id="ANpERI"
                               // label="Antecedente Perinatal"
                                fullWidth
                                autoComplete="ant_perinatal"
                                value={data.antecedentePerinatal}

                            />
                        
                    </Grid>
                    <Grid item  >
                    <InputLabel >Antecedentes del recien nacido</InputLabel>
                        
                        <TextField
                            disabled
                            className={classes.container2}
                            id="PNatals"
                            label=""
                            fullWidth
                            multiline
                            rows={4}
                            value= {data.antecedenteNacido}
                            
                        />
                        
                    <InputLabel >Antecedentes del desarrollo</InputLabel>
                        <TextField
                            disabled
                            className={classes.container2}
                            id="PNatals"
                            label=""
                            fullWidth
                            multiline
                            rows={4}
                            value= {data.antecedenteDesarrollo}
                            
                        />
                        
                    </Grid>
                    <Grid item className={classes.container3} >
                    <InputLabel >Dificultades para aprender a:</InputLabel>
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkAndar"
                                    color="primary"
                                    checked={Boolean(data.andar)}
                                />
                            }
                            label="Andar"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkHablar"
                                    color="primary"
                                    checked={Boolean(data.hablar)}
                                />
                            }
                            label="Hablar"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkLeerEscribir"
                                    color="primary"
                                    checked={Boolean(data.leerYEscribir)}
                                />
                            }
                            label="Leer y Escribir"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkControlar"
                                    color="primary"
                                    checked={Boolean(data.controlarEsfinter)}
                                />
                            }
                            label="Controlar Esfinter"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkConductual"
                                    color="primary"
                                    checked={Boolean(data.conductual)}
                                />
                            }
                            label="Conductual"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkOtros"
                                    color="primary"
                                    checked={Boolean(data.otros)}
                                />
                            }
                            label="Otros"
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Enfermedades del paciente:</InputLabel>
                        <TextField
                            disabled
                            id="enferDe"
                           // label="Enfermedades"
                            fullWidth
                            multiline
                            rows={4}
                            value= {data.enfermedades}
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Historial escolar
                    </Typography>
                    </Grid>
                    <Grid item  >
                    <InputLabel >Nivel Escolar y establecimiento</InputLabel>
                        <TextField
                            disabled
                            className={classes.container2}
                            id="esco"
                            //label="Nivel Escolar y establecimiento"
                            fullWidth
                            autoComplete="esco"
                            value={data.datosEscolar}
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >A traves de su vida como estudiante, usted ha sido un alumno, comente:</InputLabel>
                        
                    </Grid>
                    <Grid item  >
                        <TextField
                                disabled
                                id="ANpERI"
                               // label="Calidad como escolar"
                                fullWidth
                                autoComplete="cal_escolarl"
                                value={data.calidadAlumno}

                            />
                        
                    </Grid>
                    
                    <Grid item  >
                    <InputLabel >Tuvo problemas de conducta en el colegio, comente:</InputLabel>
                        <TextField
                            disabled
                            id="tuvoProb"
                            //label="Tuvo problemas de conducta en el colegio"
                            fullWidth
                            autoComplete="tuvo-prob"
                            value={data.conductaEscolar}
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Tuvo problemas de adaptacion en el colegio, comente:</InputLabel>
                        <TextField
                            disabled
                            className={classes.container2}
                            id="tuvoProb2"
                            //label="Tuvo problemas de adaptacion en el colegio"
                            fullWidth
                            autoComplete="tuvo-prob2"
                            value={data.adaptacionEscolar}
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Evaluando en terminos generales lo que ha sido su historial como estudiante Usted se encuentra:</InputLabel>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                        disabled
                            control={
                                <Checkbox
                                    name="checkMSatisfecho"
                                    color="primary"
                                    checked={Boolean(data.muySatisfecho)}
                                />
                            }
                            label="Muy Satisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkSatisfecho"
                                    color="primary"
                                    checked={Boolean(data.satisfecho)}
                                />
                            }
                            label="Satisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkRSatisfecho"
                                    color="primary"
                                    checked={Boolean(data.relativamenteSatisfecho)}
                                />
                            }
                            label="Relativamente Satisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkInsatisfecho"
                                    color="primary"
                                    checked={Boolean(data.insatisfecho)}
                                />
                            }
                            label="Insatisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkMInsatisfecho"
                                    color="primary"
                                    checked={Boolean(data.muyInsatisfecho)}
                                />
                            }
                            label="Muy Insatisfecho"
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Historial Laboral
                    </Typography>
                        <Typography variant="h7" gutterBottom>
                            Evalue el grado de satisfaccion con su trabajo:
                    </Typography>
                    </Grid>

                    <Grid item  >
                    <InputLabel >Remuneracion</InputLabel>
                        <TextField
                            disabled
                            type="number"
                            id="remu"
                           // label="Remuneracion"
                            fullWidth
                            autoComplete="remu"
                            value= {data.remuneracion}

                           
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Tipo de trabajo que realiza</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="tipTrab"
                            //label="Tipo de trabajo que realiza"
                            fullWidth
                            autoComplete="tip-trab"
                            value= {data.tipoTrabajo}
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Calidad de trabajo</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="calTrab"
                            //label="Calidad de trabajo"
                            fullWidth
                            autoComplete="cal-trab"
                            value= {data.calidadTrabajo}
                            
                        />
                    </Grid>
                    {/* </Grid>
                    <Grid container justify="space-around" spacing={1}> */}
                    <Grid item  >
                    <InputLabel >Relacion con sus de compañeros de trabajo</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="relComp"
                            //label="Relacion con sus compañeros de trabajo"
                            fullWidth
                            autoComplete="rel-comp"
                            value= {data.relacionCompañeros}
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Calidad de rendimiento laboral</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="calRend"
                            //label="Calidad de su rendimiento laboral"
                            fullWidth
                            autoComplete="cal-rend"
                            value= {data.calidadLaboral}
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Relacion con su superior</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="relSup"
                           // label="Relacion con su superior"
                            fullWidth
                            autoComplete="rel-sup"
                            value= {data.relacionSuperior}
                            
                        />
                    </Grid>
                    {/* </Grid>
                        <Grid container justify="space-around" spacing={1}> */}
                    <Grid item  >
                    <InputLabel >Estabilidad laboral</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="estLab"
                            //label="Estabilidad laboral"
                            fullWidth
                            autoComplete="est-lab"
                            value= {data.estabilidadLaboral}
                            
                        />
                    </Grid>
                    <Grid item  >
                    <InputLabel >Perspectiva de desarrollo</InputLabel>
                        <TextField
                            disabled
                            type=""
                            id="perspDesa"
                            //label="Perspectiva de desarrollo"
                            fullWidth
                            autoComplete="persp-desa"

                            value= {data.perspectivaDesarrollo}
                        />
                    </Grid>

                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Historial Social
                    </Typography>
                        <Typography variant="h7" gutterBottom>
                            A traves de su vida Ud. ha sido una persona:
                    </Typography>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkSociable"
                                    color="primary"
                                    checked={Boolean(data.sociable)}
                                />
                            }
                            label="Sociable"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkRSociable"
                                    color="primary"
                                    checked={Boolean(data.relativamenteSociable)}
                                />
                            }
                            label="Relativamente sociable"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkPsociable"
                                    color="primary"
                                    checked={Boolean(data.pocoSociable)}
                                />
                            }
                            label="Poco Sociable"
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h7" gutterBottom>
                            Haciendo un balance de su actual vida social, incluyendo cantidad y calidad de amigos, frecuancia de actividades sociales. etc.
                    </Typography><br />
                        <Typography variant="h7" gutterBottom>
                            Usted esta:
                    </Typography>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkPSatisfecho"
                                    color="primary"
                                    checked={Boolean(data.plenamenteSatisfecho)}
                                />
                            }
                            label="Plenamente Satisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkSatisfecho"
                                    color="primary"
                                    checked={Boolean(data.satisfecho2)}
                                />
                            }
                            label="Satisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkRSatisfecho"
                                    color="primary"
                                    checked={Boolean(data.relativamenteSatisfecho2)}
                                />
                            }
                            label="Relativamente Satisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkInsatisfecho"
                                    color="primary"
                                    checked={Boolean(data.insatisfecho2)}
                                />
                            }
                            label="Insatisfecho"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkMInsatisfecho"
                                    color="primary"
                                    checked={Boolean(data.muyInsatisfecho2)}
                                />
                            }
                            label="Muy Insatisfecho"
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Sistema Afectivo
                    </Typography>
                        <Typography variant="h7" gutterBottom>
                            En general sus estados de animo son:
                    </Typography>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkMEstable"
                                    color="primary"
                                    checked={Boolean(data.muyEstable)}
                                />
                            }
                            label="Muy Estable"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkREstable"
                                    color="primary"
                                    checked={Boolean(data.relativamenteEstable)}
                                />
                            }
                            label="Relativamente Estable"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkVariado"
                                    color="primary"
                                    checked={Boolean(data.variaEnFuncionDeLasExperencias)}
                                />
                            }
                            label="Varia en funcion de las experiencias"
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h7" gutterBottom>
                            Alguna de situaciones ha estado presente en su vida durante el ultimo año:
                    </Typography>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkCesantia"
                                    color="primary"
                                    checked={Boolean(data.cesantia)}
                                />
                            }
                            label="Cesantia"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkSMatrimonial"
                                    color="primary"
                                    checked={Boolean(data.separacionMatrimonial)}
                                />
                            }
                            label="Separacion Matrimonial"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkDLaboral"
                                    color="primary"
                                    checked={Boolean(data.despidoLaboral)}
                                />
                            }
                            label="Despido Laboral"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkMFamiliar"
                                    color="primary"
                                    checked={Boolean(data.muerteDeUnFamiliarCercano)}
                                />
                            }
                            label="Muerte de un Familiar Cercano"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkEnfermedad"
                                    color="primary"
                                    checked={Boolean(data.enfermedad)}
                                />
                            }
                            label="Enfermedad"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkFProblemas"
                                    color="primary"
                                    checked={Boolean(data.fuertesProblemasEconomicos)}
                                />
                            }
                            label="Fuertes Problemas Economicos"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkAccidente"
                                    color="primary"
                                    checked={Boolean(data.accidente)}
                                />
                            }
                            label="Accidente"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkFAcadenico"
                                    color="primary"
                                    checked={Boolean(data.fracasoAcademico)}
                                />
                            }
                            label="Fracaso Academico"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkEHijo"
                                    color="primary"
                                    checked={Boolean(data.enfermedadDeUnHijo)}
                                />
                            }
                            label="Enfermedad de un Hijo"
                        />
                        <FormControlLabel
                            disabled
                            control={
                                <Checkbox
                                    name="checkCResidencia"
                                    color="primary"
                                    checked={Boolean(data.cambioDeResidencia)}
                                />
                            }
                            label="Cambio de Residencia"
                            
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Relacion de Pareja
                    </Typography>
                    </Grid>
                    <Grid item  >
                        
                        <Typography variant="h7" gutterBottom>
                            En la actualidad tiene una relaion de pareja:
                    </Typography>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                disabled
                                control={
                                    <Checkbox
                                        name="checkSi"
                                        color="primary"
                                        checked={Boolean(data.si)}
                                    />
                                }
                                label="Si"
                            />
                            <FormControlLabel
                                disabled
                                control={
                                    <Checkbox
                                        name="checkNo"
                                        color="primary"
                                        checked={Boolean(data.no)}
                                    />
                                }
                                label="No"
                                
                            />
                        </Grid>
                        <Grid>
                        <InputLabel >Hace cuanto tiempo tiene pareja</InputLabel>
                            <TextField
                                disabled
                                id="datePareja"
                               // label="Hace cuanto tiempo tiene pareja"
                                fullWidth
                                autoComplete="tiempo-pareja"
                                value= {data.tiempoPareja}
                                
                            />
                        </Grid>
                        <Grid>
                        <InputLabel >Nombre de la pareja</InputLabel>
                            <TextField
                                disabled
                                id="namePareja"
                                //label="Nombre de la pareja"
                                fullWidth
                                autoComplete="nombre-pareja"
                                value= {data.nombrePareja}
                                
                            />
                        </Grid>
                        <Grid>
                        <InputLabel >Edad de la pareja</InputLabel>
                            <TextField
                                disabled
                                id="edadPareja"
                                //label="Edad"
                                fullWidth
                                autoComplete="edad-pareja"
                                value= {data.edadPareja}
                                
                            />
                        </Grid>
                        <Grid>
                        <InputLabel >Nivel de educacion</InputLabel>
                            <TextField
                                disabled
                                id="nvEdPareja"
                                //label="Nivel educacional"
                                fullWidth
                                autoComplete="nivelEd-pareja"
                                value= {data.nivelEducacionalPareja}
                                
                            />
                        </Grid>
                        <Grid>
                        <InputLabel >Ocupacion actual</InputLabel>
                            <TextField
                                disabled
                                className={classes.container2}
                                required
                                id="cupacionPareja"
                                //label="Ocupacion Actual"
                                fullWidth
                                autoComplete="ocupacion-pareja"
                                value= {data.ocupacionActualPareja}
                                
                            />
                        </Grid>
                        <Typography variant="h7" gutterBottom>
                            En la relacion de pareja:
                    </Typography>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                disabled
                                control={
                                    <Checkbox
                                        name="checkSatisUd"
                                        color="primary"
                                        checked={Boolean(data.ustedEstaMasSatisfechoQueSuPareja)}
                                    />
                                }
                                label="Usted está más satisfecho que su pareja"
                            />
                        </Grid>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                disabled
                                control={
                                    <Checkbox
                                        name="checkSatisAmbos"
                                        color="primary"
                                        checked={Boolean(data.ambosEstanIgualDeSatisfechos)}
                                    />
                                }
                                label="Ambos estan igual de satisfechos"
                            />
                        </Grid>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                disabled
                                control={
                                    <Checkbox
                                        name="checkSatisPareja"
                                        color="primary"
                                        checked={Boolean(data.suParejaEstaMasSatisfechaQueUsted)}
                                    />
                                }
                                label="Su pareja esta más satisfecha que usted"
                                
                            />
                        </Grid>
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Sentido de Vida
                    </Typography>
                        <Grid item  >
                        <InputLabel >Mencione tres metas en la vida</InputLabel>
                            <TextField
                                disabled
                                className={classes.container2}
                                id="tresMetas"
                               // label="Mencione Tres metas en la vida"
                                fullWidth
                                multiline
                                rows={4}
                                value= {data.metasVida}
                                
                            />
                        </Grid>
                    </Grid>
                    <Grid item  >
                        <Typography variant="h7" gutterBottom>
                            De la siguiente lista, marque los sintomas que usted presenta con frecuencia en la actualidad:

                        </Typography>
                    </Grid>
                    <Grid item  className={classes.container3} >
                        <Grid item xs={2} md={6} >
                            <FormControlLabel disabled control={<Checkbox name="S1" color="primary" checked={Boolean(data.problemasConcentracion)}/>}
                                label="1. Problemas de concentración y atención"
                            />
                            <FormControlLabel disabled control={<Checkbox name="S2" color="primary" checked={Boolean(data.angustia)}/>}
                                label="2. Angustia "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S3" color="primary" checked={Boolean(data.problemasMemoria)}/>}
                                label="3. Problemas de memoria "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S4" color="primary" checked={Boolean(data.insomnio)}/>}
                                label="4. Insomnío "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S5" color="primary" checked={Boolean(data.excesoSueño)}/>}
                                label="5. Exceso de sueño "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S6" color="primary" checked={Boolean(data.pesadillas)}/>}
                                label="6. Pesadillas "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S7" color="primary" checked={Boolean(data.sonambulismo)}/>}
                                label="7. Sonambulismo "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S8" color="primary" checked={Boolean(data.aburrimiento)}/>}
                                label="8. Aburrimiento "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S9" color="primary" checked={Boolean(data.irritabilidad)}/>}
                                label="9. Irritabilidad "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S10" color="primary" checked={Boolean(data.mareos)} />}
                                label="10. Mareos "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S11" color="primary" checked={Boolean(data.cefaleas)}/>}
                                label="11. Cefaleas (Dolores de cabeza) "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S6" color="primary" checked={Boolean(data.vomitos)}/>}
                                label="6. Vomitos "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S13" color="primary" checked={Boolean(data.desmayos)}/>}
                                label="13. Desmayos "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S14" color="primary" checked={Boolean(data.diarreas)}/>}
                                label="14. Diarreas "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S15" color="primary" checked={Boolean(data.constipacion)}/>}
                                label="15. Constipacion (dificultad para defecar) "
                            />

                            <FormControlLabel disabled control={<Checkbox name="S17" color="primary" checked={Boolean(data.arritmia)}/>}
                                label="17. Arritmia "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S18" color="primary" checked={Boolean(data.transpiracionManos)}/>}
                                label="18. Transpiracion en las manos "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S19" color="primary" checked={Boolean(data.onicofagia)}/>}
                                label="19. Onicofagia(se come las uñas) "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S20" color="primary" checked={Boolean(data.temblorManos)}/>}
                                label="20. Temblor en las manos "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S21" color="primary" checked={Boolean(data.bruxismo)}/>}
                                label="21. Bruxismo (Aprieta mucho la mandibulas al dormir) "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S22" color="primary" checked={Boolean(data.comeExceso)}/>}
                                label="22. Come en exceso "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S23" color="primary" checked={Boolean(data.inapetencia)}/>}
                                label="23. Inapetancia "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S24" color="primary" checked={Boolean(data.sequedadBucal)}/>}
                                label="24. Sequedad bucal "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S25" color="primary" checked={Boolean(data.ideasObsesivas)}/>}
                                label="25. Ideas obsesivas "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S26" color="primary" checked={Boolean(data.ideasSuicidio)}/>}
                                label="26. Ideas de suicidio "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S27" color="primary" checked={Boolean(data.sentimientosCulpa)}/>}
                                label="27. Sentimientos de culpa "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S28" color="primary" checked={Boolean(data.tartamudez)}/>}
                                label="28. Tartamudez "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S29" color="primary" checked={Boolean(data.alteracionesMenstruales)}/>}
                                label="29. Alteraciones menstruales "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S30" color="primary" checked={Boolean(data.impotenciaSecual)}/>}
                                label="30. Impotencia sexual "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S31" color="primary" checked={Boolean(data.frigidez)}/>}
                                label="31. Frigidez "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S32" color="primary" checked={Boolean(data.eyaculacionprecoz)}/>}
                                label="32. Eyaculación precoz "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S33" color="primary" checked={Boolean(data.dolorVaginal)}/>}
                                label="33. Dolor vaginal al tener relaciones Sexuales "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S34" color="primary" checked={Boolean(data.pocoDeseo)}/>}
                                label="34. Poco deseo Sexual "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S35" color="primary" checked={Boolean(data.tics)}/>}
                                label="35. Tics "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S36" color="primary" checked={Boolean(data.fatiga)}/>}
                                label="36. Se fatiga fácilmente "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S37" color="primary" checked={Boolean(data.llanto)}/>}
                                label="37. Llanto "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S38" color="primary" checked={Boolean(data.desanimo)}/>}
                                label="38. Desanimo "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S39" color="primary" checked={Boolean(data.pena)}/>}
                                label="39. Pena "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S40" color="primary" checked={Boolean(data.ingestion)}/>}
                                label="40. Ingestión escesiva de alcohol "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S41" color="primary" checked={Boolean(data.consumos)}/>}
                                label="41. Consumo de Drogas "
                            />
                            <FormControlLabel disabled control={<Checkbox name="S42" color="primary" checked={Boolean(data.hipocondria)}/>}
                                label="42. Hipocondría (tendecia excesiva a atribuirse enfermedades) "
                            />
                            <Grid >
                                <Typography variant="h7" gutterBottom >
                                    43. Miedos desproporcionados: <br />
                                </Typography>
                                <FormControlLabel disabled control={<Checkbox name="S43.a" color="primary" checked={Boolean(data.alturas)}/>}
                                    label="a. Las alturas  "
                                />
                                <FormControlLabel disabled control={<Checkbox name="S43.b" color="primary" checked={Boolean(data.espacios)}/>}
                                    label="b. Los espacios cerrados "
                                />
                                <FormControlLabel disabled control={<Checkbox name="S43.c" color="primary" checked={Boolean(data.viajar)}/>}
                                    label="c. Viajar en avión "
                                />
                                <FormControlLabel disabled control={<Checkbox name="S43.d" color="primary" checked={Boolean(data.sangre)}/>}
                                    label="d. Ver sangre "
                                />
                                <FormControlLabel disabled control={<Checkbox name="S43.e" color="primary" checked={Boolean(data.espaciosAbiertos)}/>}
                                    label="e. Los espacios abiertos  "
                                    
                                /><br />
                            </Grid>
                            <Typography variant="h7" gutterBottom>
                                44. Otros miedos: <br />
                            </Typography>
                            <TextField
                                disabled
                                id="tresMetas"
                                label=""
                                fullWidth
                                multiline
                                rows={4}
                                value= {data.otrosMiedos}
                                
                            />
                        </Grid>
                    </Grid>



                    {/* <Grid item alignContent="flex-end" className={classes.root}>
                        <Button className={classes.container1} variant="outlined" color="primary" href="#contained-buttons" startIcon={<CheckIcon />} >
                            Finalizar
                        </Button>
                        {
                            banderaAlerta &&
                            <div>
                                {
                                    banderaAlertaOpcion ?
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success">
                                                La ficha se ha creado con exito!
                            </Alert>
                                        </Snackbar>
                                        :
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="error">
                                                Los datos no se han subido correctamente!
                            </Alert>
                                            </Snackbar>
                                    }
                                </div>
                            }
                        

                    </Grid> */}
                </Grid>
            </React.Fragment>
        </div>
    );
}