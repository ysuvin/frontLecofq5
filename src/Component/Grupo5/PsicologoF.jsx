import React, { useState } from 'react';
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
import logo from '../../logo.png';


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


export default function PsicologoF() {


    const [values, setAge] = React.useState('');
    const [values3, setAge3] = React.useState('');
    const [values4, setAge4] = React.useState('');
    const [values2, setAge2] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

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
    const handleClose4 = () => {
        setOpen4(false);
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
    const handleChange4 = (event) => {
        setAge4(event.target.value);
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
    const handleOpen4 = () => {
        setOpen4(true);
    };



    const classes = useStyles();


    const [rut, setRut] = React.useState('');
    const [ocupacion, setOcupacion] = React.useState('');
    const [fechaAtencion, setFechaAtencion] = React.useState('');
    const [estado_civil, setEstado_civil] = React.useState('');
    const [lugarNacimiento, setLugarNacimiento] = React.useState('');
    const [escolaridad, setEscolaridad] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [ocupacionActual, setOcupacionActual] = React.useState('');
    const [razonesConsulta, setRazonesConsulta] = React.useState('');
    const [causasConsulta, setCausasConsulta] = React.useState('');
    const [psicologoAnteriorRazon, setPsicologoAnteriorRazon] = React.useState('');
    const [antecedentePrenatal, setAntecedentePrenatal] = React.useState('');
    const [tipoParto, setTipoParto] = React.useState('');
    const [antecedentePerinatal, setAntecedentePerinatal] = React.useState('');
    const [antecedenteNacido, setAntecedenteNacido] = React.useState('');
    const [nacimiento, setNacimiento] = React.useState('');
    const [antecedenteDesarrollo, setAntecedenteDesarrollo] = React.useState('');
    const [dificultadesAprender, setDificultadesAprender] = React.useState('');
    const [enfermedades, setEnfermedades] = React.useState('');
    const [datosEscolar, setDatosEscolar] = React.useState('');
    const [calidadAlumno, setCalidadAlumno] = React.useState('');
    const [conductaEscolar, setConductaEscolar] = React.useState('');
    const [adaptacionEscolar, setaAdaptacionEscolar] = React.useState('');
    const [remuneracion, setRemuneracion] = React.useState('');
    const [tipoTrabajo, setTipoTrabajo] = React.useState('');
    const [calidadTrabajo, setCalidadTrabajo] = React.useState('');
    const [relacionCompañeros, setRelacionCompañeros] = React.useState('');
    const [calidadLaboral, setCalidadLaboral] = React.useState('');
    const [relacionSuperior, setRelacionSuperior] = React.useState('');
    const [estabilidadLaboral, setEstabilidadLaboral] = React.useState('');
    const [perspectivaDesarrollo, setPerspectivaDesarrollo] = React.useState('');
    const [tipoPersona, setTipoPersona] = React.useState('');
    const [balanceSocial, setBalanceSocial] = React.useState('');
    const [estadoAnimo, setEstadoAnimo] = React.useState('');
    const [situacionUltimoAño, setSituacionUltimoAño] = React.useState('');
    const [tiempoPareja, setTiempoPareja] = React.useState('');
    const [nombrePareja, setNombrePareja] = React.useState('');
    const [edadPareja, setEdadPareja] = React.useState('');
    const [nivelEducacionalPareja, setNivelEducacionalPareja] = React.useState('');
    const [ocupacionActualPareja, setOcupacionActualPareja] = React.useState('');
    const [relacionPareja, setRelacionPareja] = React.useState('');
    const [metasVida, setMetasVida] = React.useState('');
    const [sintomas, setSintomas] = React.useState('');
    const [miedosDesproporcionados, setMiedosDesproporcionados] = React.useState('');
    const [otrosMiedos, setOtrosMiedos] = React.useState('');
    const [banderaAlerta, setBanderaAlerta] = useState(false);
    const [banderaAlertaOpcion, setBanderaAlertaOpcion] = useState(false);
    const [andar, setAndar] = React.useState(false);
    const [hablar, setHablar] = React.useState(false);
    const [leerYEscribir, setLeerYEscribir] = React.useState(false);
    const [controlarEsfinter, setControlarEsfinter] = React.useState(false);
    const [conductual, setConductual] = React.useState(false);
    const [otros, setOtros] = React.useState(false);
    const [muySatisfecho, setMuySatisfecho] = React.useState(false);
    const [satisfecho, setSatisfecho] = React.useState(false);
    const [relativamenteSatisfecho, setRelativamenteSatisfecho] = React.useState(false);
    const [insatisfecho, setInsatisfecho] = React.useState(false);
    const [muyInsatisfecho, setMuyInsatisfecho] = React.useState(false);
    const [sociable, setSociable] = React.useState(false);
    const [relativamenteSociable, setRelativamenteSociable] = React.useState(false);
    const [pocoSociable, setPocoSociable] = React.useState(false);
    const [plenamenteSatisfecho, setPlenamenteSatisfecho] = React.useState(false);
    const [satisfecho2, setSatisfecho2] = React.useState(false);
    const [relativamenteSatisfecho2, setRelativamenteSatisfecho2] = React.useState(false);
    const [insatisfecho2, setInsatisfecho2] = React.useState(false);
    const [muyInsatisfecho2, setMuyInsatisfecho2] = React.useState(false);
    const [muyEstable, setMuyEstable] = React.useState(false);
    const [relativamenteEstable, setRelativamenteEstable] = React.useState(false);
    const [variaEnFuncionDeLasExperencias, setVariaEnFuncionDeLasExperiencias] = React.useState(false);
    const [cesantia, setCesantia] = React.useState(false);
    const [separacionMatrimonial, setSeparacionMatrimonial] = React.useState(false);
    const [despidoLaboral, setDespidoLaboral] = React.useState(false);
    const [muerteDeUnFamiliarCercano, setMuerteDeUnFamiliarCercano] = React.useState(false);
    const [enfermedad, setEnfermedad] = React.useState(false);
    const [fuertesProblemasEconomicos, setFuertesProblemasEconomicos] = React.useState(false);
    const [accidente, setAccidente] = React.useState(false);
    const [fracasoAcademico, setFracasoAcademico] = React.useState(false);
    const [cambioDeResidencia, setCambioDeResidencia] = React.useState(false);
    const [si, setSi] = React.useState(false);
    const [no, setNo] = React.useState(false);
    const [ustedEstaMasSatisfechoQueSuPareja, setUstedEstaMasSatisfechoQueSuPareja] = React.useState(false);
    const [ambosEstanIgualDeSatisfechos, setAmbosEstanIgualDeSatisfechos] = React.useState(false);
    const [suParejaEstaMasSatisfechaQueUsted, setSuParejaEstaMasSatisfechaQueUsted] = React.useState(false);
    const [problemasConcentracion, setProblemasConcentracion] = React.useState(false);
    const [angustia, setAngustia] = React.useState(false);
    const [problemasMemoria, setProblemasMemoria] = React.useState(false);
    const [insomnio, setInsomnio] = React.useState(false);
    const [excesoSueño, setExcesoSueño] = React.useState(false);
    const [pesadillas, setPesadillas] = React.useState(false);
    const [sonambulismo, setSonambulismo] = React.useState(false);
    const [aburrimiento, setAburrimiento] = React.useState(false);
    const [irritabilidad, setIrritabilidad] = React.useState(false);
    const [mareos, setMareos] = React.useState(false);
    const [cefaleas, setCefaleas] = React.useState(false);
    const [vomitos, setVomitos] = React.useState(false);
    const [desmayos, setDesmayos] = React.useState(false);
    const [diarreas, setDiarreas] = React.useState(false);
    const [constipacion, setConstipacion] = React.useState(false);
    const [arritmia, setArritmia] = React.useState(false);
    const [transpiracionManos, setTranspiracionManos] = React.useState(false);
    const [onicofagia, setOnicofagia] = React.useState(false);
    const [temblorManos, setTemblorManos] = React.useState(false);
    const [enfermedadDeUnHijo, setEnfermedadDeUnHijo] = React.useState(false);
    const [bruxismo, setBruxismo] = React.useState(false);
    const [comeExceso, setComeExceso] = React.useState(false);
    const [inapetencia, setInapetencia] = React.useState(false);
    const [sequedadBucal, setSequedadBucal] = React.useState(false);
    const [ideasObsesivas, setIdeasObsesivas] = React.useState(false);
    const [ideasSuicidio, setIdeasSuicidio] = React.useState(false);
    const [sentimientosCulpa, setSentimientosCulpa] = React.useState(false);
    const [tartamudez, setTartamudez] = React.useState(false);
    const [alteracionesMenstruales, setAlteracionesMenstruales] = React.useState(false);
    const [impotenciaSecual, setImpotenciaSecual] = React.useState(false);
    const [frigidez, setFrigidez] = React.useState(false);
    const [eyaculacionprecoz, setEyaculacionprecoz] = React.useState(false);
    const [dolorVaginal, setDolorVaginal] = React.useState(false);
    const [pocoDeseo, setPocoDeseo] = React.useState(false);
    const [tics, setTics] = React.useState(false);
    const [fatiga, setFatiga] = React.useState(false);
    const [llanto, setLlanto] = React.useState(false);
    const [desanimo, setDesanimo] = React.useState(false);
    const [pena, setPena] = React.useState(false);
    const [ingestion, setIngestion] = React.useState(false);
    const [consumos, setConsumos] = React.useState(false);
    const [hipocondria, setHipocondria] = React.useState(false);
    const [alturas, setAlturas] = React.useState(false);
    const [espacios, setEspacios] = React.useState(false);
    const [viajar, setViajar] = React.useState(false);
    const [sangre, setSangre] = React.useState(false);
    const [espaciosAbiertos, setEspaciosAbiertos] = React.useState(false);



    const Listo = (id) => {
        Axios.get(`http://localhost:8080/fichaPsicologo/${id}`)
            .then(res => {
                console.log("console: ", res)
            })
    }


    const goLogin = () => {
        let data = {
            rut: rut,
            fechaAtencion: fechaAtencion,
            lugarNacimiento: lugarNacimiento,
            estado_civil: estado_civil,
            ocupacion: ocupacion,
            escolaridad: escolaridad,
            telefono: telefono,
            ocupacionActual: ocupacionActual,
            razonesConsulta: razonesConsulta,
            causasConsulta: causasConsulta,
            psicologoAnteriorRazon: psicologoAnteriorRazon,
            antecedentePrenatal: antecedentePrenatal,
            tipoParto: tipoParto,
            antecedentePerinatal: antecedentePerinatal,
            antecedenteNacido: antecedenteNacido,
            nacimiento: nacimiento,
            antecedenteDesarrollo: antecedenteDesarrollo,
            dificultadesAprender: dificultadesAprender,
            enfermedades: enfermedades,
            datosEscolar: datosEscolar,
            calidadAlumno: calidadAlumno,
            conductaEscolar: conductaEscolar,
            adaptacionEscolar: adaptacionEscolar,
            remuneracion: remuneracion,
            tipoTrabajo: tipoTrabajo,
            calidadTrabajo: calidadTrabajo,
            relacionCompañeros: relacionCompañeros,
            calidadLaboral: calidadLaboral,
            relacionSuperior: relacionSuperior,
            estabilidadLaboral: estabilidadLaboral,
            perspectivaDesarrollo: perspectivaDesarrollo,
            tipoPersona: tipoPersona,
            balanceSocial: balanceSocial,
            estadoAnimo: estadoAnimo,
            situacionUltimoAño: situacionUltimoAño,
            tiempoPareja: tiempoPareja,
            nombrePareja: nombrePareja,
            edadPareja: edadPareja,
            nivelEducacionalPareja: nivelEducacionalPareja,
            ocupacionActualPareja: ocupacionActualPareja,
            relacionPareja: relacionPareja,
            metasVida: metasVida,
            sintomas: sintomas,
            miedosDesproporcionados: miedosDesproporcionados,
            otrosMiedos: otrosMiedos,
            andar: andar,
            hablar: hablar,
            leerYEscribir: leerYEscribir,
            controlarEsfinter: controlarEsfinter,
            conductual: conductual,
            otros: otros,
            muySatisfecho: muySatisfecho,
            satisfecho: satisfecho,
            relativamenteSatisfecho: relativamenteSatisfecho,
            insatisfecho: insatisfecho,
            muyInsatisfecho: muyInsatisfecho,
            sociable: sociable,
            relativamenteSociable: relativamenteSociable,
            pocoSociable: pocoSociable,
            plenamenteSatisfecho: plenamenteSatisfecho,
            satisfecho2: satisfecho2,
            relativamenteSatisfecho2: relativamenteSatisfecho2,
            insatisfecho2 : insatisfecho2,
            muyInsatisfecho2: muyInsatisfecho2,
            muyEstable : muyEstable,
            relativamenteEstable : relativamenteEstable,
            variaEnFuncionDeLasExperencias : variaEnFuncionDeLasExperencias,
            cesantia : cesantia,
            separacionMatrimonial : separacionMatrimonial,
            despidoLaboral : despidoLaboral,
            muerteDeUnFamiliarCercano:muerteDeUnFamiliarCercano,
            enfermedad:enfermedad,
            fuertesProblemasEconomicos:fuertesProblemasEconomicos,
            accidente:accidente,
            fracasoAcademico:fracasoAcademico,
            enfermedadDeUnHijo:enfermedadDeUnHijo,
            cambioDeResidencia:cambioDeResidencia,
            si:si,
            no:no,
            ustedEstaMasSatisfechoQueSuPareja:ustedEstaMasSatisfechoQueSuPareja,
            ambosEstanIgualDeSatisfechos:ambosEstanIgualDeSatisfechos,
            suParejaEstaMasSatisfechaQueUsted:suParejaEstaMasSatisfechaQueUsted,
            problemasConcentracion:problemasConcentracion,
            angustia:angustia,
            problemasMemoria:problemasMemoria,
            insomnio:insomnio,
            excesoSueño:excesoSueño,
            pesadillas:pesadillas,
            sonambulismo:sonambulismo,
            aburrimiento:aburrimiento,
            irritabilidad:irritabilidad,
            mareos:mareos,
            cefaleas:cefaleas,
            vomitos:vomitos,
            desmayos:desmayos,
            diarreas:diarreas,
            constipacion:constipacion,
            arritmia:arritmia,
            transpiracionManos:transpiracionManos,
            onicofagia:onicofagia,
            temblorManos:temblorManos,
            bruxismo:bruxismo,
            comeExceso:comeExceso,
            inapetencia:inapetencia,
            sequedadBucal:sequedadBucal,
            ideasObsesivas:ideasObsesivas,
            ideasSuicidio:ideasSuicidio,
            sentimientosCulpa:sentimientosCulpa,
            tartamudez:tartamudez,
            alteracionesMenstruales:alteracionesMenstruales,
            impotenciaSecual:impotenciaSecual,
            frigidez:frigidez,
            eyaculacionprecoz:eyaculacionprecoz,
            dolorVaginal:dolorVaginal,
            pocoDeseo:pocoDeseo,
            tics:tics,
            fatiga:fatiga,
            llanto:llanto,
            desanimo:desanimo,
            pena:pena,
            ingestion:ingestion,
            consumos:consumos,
            hipocondria:hipocondria,
            alturas:alturas,
            espacios:espacios,
            viajar:viajar,
            sangre:sangre,
            espaciosAbiertos:espaciosAbiertos






        }
        Axios.post(`http://localhost:8080/fichaPsicologo/`, data)
            .then((response) => {
                if (response.data.state) {
                    setOpen(true);
                    setBanderaAlerta(true);
                    setBanderaAlertaOpcion(true)
                } else {
                    setOpen(true);
                    setBanderaAlerta(true);
                    setBanderaAlertaOpcion(false)
                }
                console.log(response)

            });

    }


    return (
        <div style={{
            marginLeft: 100, marginRight: 100, marginBottom: 50, marginTop: 50
        }}>
            <React.Fragment>
                <img src={logo} className="App-logo" alt="logo"/>
                <Grid xs={6} >
                    <Typography variant="h3"  >
                        Ficha Clinica Psicológica
                    </Typography>
                    
                     {/* <img xs={6} src={logo} className="App-logo" alt="logo" /> */}

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
                            <TextField required
                                type="number"
                                id="rutPaci"
                                label="Rut (Ej: 6345678-9)"
                                fullWidth
                                autoComplete="rut-paci"
                                value={rut} onChange={(e) => { setRut(e.target.value) }} />
                        </Grid>
                        <Grid item  >
                            <form className={classes.container} noValidate>
                                <TextField
                                    required
                                    id="fecha"
                                    label="Fecha"
                                    type="date"
                                    defaultValue="none"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={fechaAtencion} onChange={(e) => { setFechaAtencion(e.target.value) }} 
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
                            <TextField
                                required
                                id="lugNac"
                                label="Lugar de Nacimiento"
                                fullWidth
                                autoComplete="lug-nac"
                                value={lugarNacimiento} onChange={(e) => { setLugarNacimiento(e.target.value) }}

                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Estado Civil   </InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open4}
                                    onClose={handleClose4}
                                    onOpen={handleOpen4}
                                    value={values4}
                                    onChange={handleChange4}
                                    value={estado_civil} onChange={(e) => { setEstado_civil(e.target.value) }}
                                >
                                    <MenuItem value="">
                                        <em>(Vacio)</em>
                                    </MenuItem>
                                    <MenuItem value={"Soltero(a)"}>Soltero(a)</MenuItem>
                                    <MenuItem value={"Casado(a)"}>Casado(a)</MenuItem>
                                    <MenuItem value={"Viudo(a)"}>Viudo(a)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* <Grid item  >
                            <TextField
                                disabled
                                id="estC"
                                label="Estado Civil"
                                fullWidth
                                autoComplete="est-civil"

                            />
                        </Grid> */}
                        <Grid item  >
                            <TextField
                                disabled
                                id="direcc"
                                label="Direccion"
                                fullWidth
                                autoComplete="direcc"

                            />
                        </Grid>
                        <Grid item  >
                            <TextField
                                
                                id="telefCont"
                                label="Telefono Contacto"
                                fullWidth
                                autoComplete="telef-cont"
                                value={telefono} onChange={(e) => { setTelefono(e.target.value) }}
                            />
                        </Grid>
                        <Grid item  >
                            <TextField
                                required
                                id="ocupAct"
                                label="Ocupacion Actual"
                                fullWidth
                                autoComplete="ocup-act"
                                value={ocupacionActual} onChange={(e) => { setOcupacionActual(e.target.value) }}
                            />
                        </Grid>
                        <Grid item >
                            <TextField
                                required
                                id="esc"
                                label="Escolaridad"
                                fullWidth
                                autoComplete="esc"
                                value={escolaridad} onChange={(e) => { setEscolaridad(e.target.value) }}
                            />
                        </Grid>
                    </Grid>

                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Antecedentes Iniciales
                        </Typography>
                    </Grid>

                    <Grid item  >
                        <TextField
                            id="seBrev"
                            label="Señale brevemente las razones que le han traido a consulta"
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={razonesConsulta} onChange={(e) => { setRazonesConsulta(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            id="cualCree"
                            label="Cual cree UD., que es la o las causas que originaron el o los problemas por los que consulta"
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={causasConsulta} onChange={(e) => { setCausasConsulta(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            id="haCons"
                            label="Ha consultado con anterioridad a algun psicologo, psiquiatra o neurologo. Explique cuando y porque"
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={psicologoAnteriorRazon} onChange={(e) => { setPsicologoAnteriorRazon(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Sistema BIO-Clinico
                        </Typography>
                        <Typography variant="h7" gutterBottom>
                            Antecedentes Pre-Natales (Embarazo Materno)
                            comente:
                        </Typography>
                        <TextField
                            className={classes.container2}
                            id="PNatals"
                            label=""
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={antecedentePrenatal} onChange={(e) => { setAntecedentePrenatal(e.target.value) }}
                        /> <br />
                        <Typography variant="h7" gutterBottom>
                            Antecedentes Perinatales, comente:
                        </Typography>
                    </Grid>
                    <Grid item  >
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Cuando nacio su parto fue:    </InputLabel>
                            <Select

                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open2}
                                onClose={handleClose2}
                                onOpen={handleOpen2}
                                value={values2}
                                onChange={handleChange2}
                                value={antecedentePerinatal} onChange={(e) => { setAntecedentePerinatal(e.target.value) }}
                            >
                                <MenuItem value="">
                                    <em>(Vacio)</em>
                                </MenuItem>
                                <MenuItem value={"Normal"}>Normal</MenuItem>
                                <MenuItem value={"Prematuro"}>Prematuro</MenuItem>
                                <MenuItem value={"Tardio"}>Tardio</MenuItem>
                                <MenuItem value={"Cesárea"}>Cesárea</MenuItem>
                                <MenuItem value={"Espontaneo"}>Espontaneo</MenuItem>
                                <MenuItem value={"Inducido"}>Inducido</MenuItem>
                                <MenuItem value={"Forceps"}>Forceps</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item  >
                        <Typography variant="h7" gutterBottom>
                            Antecedentes recien nacido, comente:
                    </Typography> <br />
                        <TextField
                            className={classes.container2}
                            id="PNatals"
                            label=""
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={antecedenteNacido} onChange={(e) => { setAntecedenteNacido(e.target.value) }}
                        />
                        <Typography variant="h7" gutterBottom>
                            Antecedentes del desarrollo, comente:
                    </Typography><br />
                        <TextField
                            className={classes.container2}
                            id="PNatals"
                            label=""
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={antecedenteDesarrollo} onChange={(e) => { setAntecedenteDesarrollo(e.target.value) }}
                        />
                        <Typography variant="h7" gutterBottom>
                            Dificultades para aprender a:
                    </Typography>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkAndar"
                                    color="primary"
                                    value={true} onClick={(e) => { setAndar(e.target.value) }}
                                />
                            }
                            label="Andar"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkHablar"
                                    color="primary"
                                    value={true} onClick={(e) => { setHablar(e.target.value) }}
                                />
                            }
                            label="Hablar"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkLeerEscribir"
                                    color="primary"
                                    value={true} onClick={(e) => { setLeerYEscribir(e.target.value) }}
                                    
                                />
                            }
                            label="Leer y Escribir"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkControlar"
                                    color="primary"
                                    value={true} onClick={(e) => { setControlarEsfinter(e.target.value) }}
                                />
                            }
                            label="Controlar Esfinter"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkConductual"
                                    color="primary"
                                    value={true} onClick={(e) => { setConductual(e.target.value) }}
                                />
                            }
                            label="Conductual"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkOtros"
                                    color="primary"
                                    value={true} onClick={(e) => { setOtros(e.target.value) }}
                                />
                            }
                            label="Otros"
                            
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            id="enferDe"
                            label="Enfermedades"
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue=""
                            value={enfermedades} onChange={(e) => { setEnfermedades(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h4" gutterBottom className={classes.container1}>
                            Historial escolar
                    </Typography>
                    </Grid>
                    <Grid item  >
                        <TextField
                            className={classes.container2}
                            id="esco"
                            label="Nivel Escolar y establecimiento"
                            fullWidth
                            autoComplete="esco"
                            value={datosEscolar} onChange={(e) => { setDatosEscolar(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h7" gutterBottom>
                            A traves de su vida como estudiante, usted ha sido un alumno:
                    </Typography>
                    </Grid>
                    <Grid item  >
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label3">Evalue su calidad    </InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label3"
                                id="demo-controlled-open-select3"
                                open={open3}
                                onClose={handleClose3}
                                onOpen={handleOpen3}
                                value={values3}
                                onChange={handleChange3}
                                value={calidadAlumno} onChange={(e) => { setCalidadAlumno(e.target.value) }}
                            >
                                <MenuItem value="">
                                    <em>(Vacio)</em>
                                </MenuItem>
                                <MenuItem value={"Excelente"}>Excelente</MenuItem>
                                <MenuItem value={"Bueno"}>Bueno</MenuItem>
                                <MenuItem value={"Regular"}>Regular</MenuItem>
                                <MenuItem value={"Malo"}>Malo</MenuItem>
                                <MenuItem value={"Muy Malo"}>Muy Malo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* <Grid item  >
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
                            value={conductaEscolar} onChange={(e) => { setConductaEscolar(e.target.value) }}
                        />
                    </Grid> */}
                    <Grid item  >
                        <TextField
                            id="tuvoProb"
                            label="Tuvo problemas de conducta en el colegio"
                            fullWidth
                            autoComplete="tuvo-prob"
                            value={conductaEscolar} onChange={(e) => { setConductaEscolar(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            className={classes.container2}
                            id="tuvoProb2"
                            label="Tuvo problemas de adaptacion en el colegio"
                            fullWidth
                            autoComplete="tuvo-prob2"
                            value={adaptacionEscolar} onChange={(e) => { setaAdaptacionEscolar(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <Typography variant="h7" gutterBottom>
                            Evaluando en terminos generales lo que ha sido su historial como estudiante Usted se encuentra:
                    </Typography>
                    </Grid>
                    <Grid item className={classes.container3} >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkMSatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setMuySatisfecho(e.target.value) }}
                                />
                            }
                            label="Muy Satisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkSatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setSatisfecho(e.target.value) }}
                                />
                            }
                            label="Satisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkRSatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setRelativamenteSatisfecho(e.target.value) }}
                                />
                            }
                            label="Relativamente Satisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkInsatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setInsatisfecho(e.target.value) }}
                                />
                            }
                            label="Insatisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkMInsatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setMuyInsatisfecho(e.target.value) }}
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
                        <TextField
                            type="number"
                            id="remu"
                            label="Remuneracion"
                            fullWidth
                            autoComplete="remu"
                            value={remuneracion} onChange={(e) => { setRemuneracion(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            type=""
                            id="tipTrab"
                            label="Tipo de trabajo que realiza"
                            fullWidth
                            autoComplete="tip-trab"
                            value={tipoTrabajo} onChange={(e) => { setTipoTrabajo(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            type=""
                            id="calTrab"
                            label="Calidad de trabajo"
                            fullWidth
                            autoComplete="cal-trab"
                            value={calidadTrabajo} onChange={(e) => { setCalidadTrabajo(e.target.value) }}
                        />
                    </Grid>
                    {/* </Grid>
                    <Grid container justify="space-around" spacing={1}> */}
                    <Grid item  >
                        <TextField
                            type=""
                            id="relComp"
                            label="Relacion con sus compañeros de trabajo"
                            fullWidth
                            autoComplete="rel-comp"
                            value={relacionCompañeros} onChange={(e) => { setRelacionCompañeros(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            type=""
                            id="calRend"
                            label="Calidad de su rendimiento laboral"
                            fullWidth
                            autoComplete="cal-rend"
                            value={calidadLaboral} onChange={(e) => { setCalidadLaboral(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            type=""
                            id="relSup"
                            label="Relacion con su superior"
                            fullWidth
                            autoComplete="rel-sup"
                            value={relacionSuperior} onChange={(e) => { setRelacionSuperior(e.target.value) }}
                        />
                    </Grid>
                    {/* </Grid>
                        <Grid container justify="space-around" spacing={1}> */}
                    <Grid item  >
                        <TextField
                            type=""
                            id="estLab"
                            label="Estabilidad laboral"
                            fullWidth
                            autoComplete="est-lab"
                            value={estabilidadLaboral} onChange={(e) => { setEstabilidadLaboral(e.target.value) }}
                        />
                    </Grid>
                    <Grid item  >
                        <TextField

                            type=""
                            id="perspDesa"
                            label="Perspectiva de desarrollo"
                            fullWidth
                            autoComplete="persp-desa"
                            value={perspectivaDesarrollo} onChange={(e) => { setPerspectivaDesarrollo(e.target.value) }}
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
                            control={
                                <Checkbox
                                    name="checkSociable"
                                    color="primary"
                                    value={true} onClick={(e) => { setSociable(e.target.value) }}
                                />
                            }
                            label="Sociable"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkRSociable"
                                    color="primary"
                                    value={true} onClick={(e) => { setRelativamenteSociable(e.target.value) }}
                                />
                            }
                            label="Relativamente sociable"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkPsociable"
                                    color="primary"
                                    value={true} onClick={(e) => { setPocoSociable(e.target.value) }}
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
                            control={
                                <Checkbox
                                    name="checkPSatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setPlenamenteSatisfecho(e.target.value) }}
                                />
                            }
                            label="Plenamente Satisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkSatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setSatisfecho2(e.target.value) }}
                                />
                            }
                            label="Satisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkRSatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setRelativamenteSatisfecho2(e.target.value) }}
                                />
                            }
                            label="Relativamente Satisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkInsatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setInsatisfecho2(e.target.value) }}
                                />
                            }
                            label="Insatisfecho"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkMInsatisfecho"
                                    color="primary"
                                    value={true} onClick={(e) => { setMuyInsatisfecho2(e.target.value) }}
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
                            control={
                                <Checkbox
                                    name="checkMEstable"
                                    color="primary"
                                    value={true} onClick={(e) => { setMuyEstable(e.target.value) }}
                                />
                            }
                            label="Muy Estable"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkREstable"
                                    color="primary"
                                    value={true} onClick={(e) => { setRelativamenteEstable(e.target.value) }}
                                />
                            }
                            label="Relativamente Estable"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkVariado"
                                    color="primary"
                                    value={true} onClick={(e) => { setVariaEnFuncionDeLasExperiencias(e.target.value) }}
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
                            control={
                                <Checkbox
                                    name="checkCesantia"
                                    color="primary"
                                    value={true} onClick={(e) => { setCesantia(e.target.value) }}
                                />
                            }
                            label="Cesantia"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkSMatrimonial"
                                    color="primary"
                                    value={true} onClick={(e) => { setSeparacionMatrimonial(e.target.value) }}
                                />
                            }
                            label="Separacion Matrimonial"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkDLaboral"
                                    color="primary"
                                    value={true} onClick={(e) => { setDespidoLaboral(e.target.value) }}
                                />
                            }
                            label="Despido Laboral"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkMFamiliar"
                                    color="primary"
                                    value={true} onClick={(e) => { setMuerteDeUnFamiliarCercano(e.target.value) }}
                                />
                            }
                            label="Muerte de un Familiar Cercano"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkEnfermedad"
                                    color="primary"
                                    value={true} onClick={(e) => { setEnfermedad(e.target.value) }}
                                />
                            }
                            label="Enfermedad"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkFProblemas"
                                    color="primary"
                                    value={true} onClick={(e) => { setFuertesProblemasEconomicos(e.target.value) }}
                                />
                            }
                            label="Fuertes Problemas Economicos"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkAccidente"
                                    color="primary"
                                    value={true} onClick={(e) => { setAccidente(e.target.value) }}
                                />
                            }
                            label="Accidente"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkFAcadenico"
                                    color="primary"
                                    value={true} onClick={(e) => { setFracasoAcademico(e.target.value) }}
                                />
                            }
                            label="Fracaso Academico"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkEHijo"
                                    color="primary"
                                    value={true} onClick={(e) => { setEnfermedadDeUnHijo(e.target.value) }}
                                />
                            }
                            label="Enfermedad de un Hijo"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkCResidencia"
                                    color="primary"
                                    value={true} onClick={(e) => { setCambioDeResidencia(e.target.value) }}
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
                                control={
                                    <Checkbox
                                        name="checkSi"
                                        color="primary"
                                        value={true} onClick={(e) => { setSi(e.target.value) }}
                                    />
                                }
                                label="Si"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkNo"
                                        color="primary"
                                        value={true} onClick={(e) => { setNo(e.target.value) }}
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
                                value={tiempoPareja} onChange={(e) => { setTiempoPareja(e.target.value) }}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                required
                                id="namePareja"
                                label="Nombre de la pareja"
                                fullWidth
                                autoComplete="nombre-pareja"
                                value={nombrePareja} onChange={(e) => { setNombrePareja(e.target.value) }}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                required
                                id="edadPareja"
                                label="Edad"
                                fullWidth
                                autoComplete="edad-pareja"
                                value={edadPareja} onChange={(e) => { setEdadPareja(e.target.value) }}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                required
                                id="nvEdPareja"
                                label="Nivel educacional"
                                fullWidth
                                autoComplete="nivelEd-pareja"
                                value={nivelEducacionalPareja} onChange={(e) => { setNivelEducacionalPareja(e.target.value) }}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                className={classes.container2}
                                required
                                id="cupacionPareja"
                                label="Ocupacion Actual"
                                fullWidth
                                autoComplete="ocupacion-pareja"
                                value={ocupacionActualPareja} onChange={(e) => { setOcupacionActualPareja(e.target.value) }}
                            />
                        </Grid>
                        <Typography variant="h7" gutterBottom>
                            En la relacion de pareja:
                    </Typography>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkSatisUd"
                                        color="primary"
                                        value={true} onClick={(e) => { setUstedEstaMasSatisfechoQueSuPareja(e.target.value) }}
                                    />
                                }
                                label="Usted está más satisfecho que su pareja"
                            />
                        </Grid>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkSatisAmbos"
                                        color="primary"
                                        value={true} onClick={(e) => { setAmbosEstanIgualDeSatisfechos(e.target.value) }}
                                    />
                                }
                                label="Ambos estan igual de satisfechos"
                            />
                        </Grid>
                        <Grid className={classes.container3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkSatisPareja"
                                        color="primary"
                                        value={true} onClick={(e) => { setSuParejaEstaMasSatisfechaQueUsted(e.target.value) }}
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
                            <TextField
                                className={classes.container2}
                                id="tresMetas"
                                label="Mencione Tres metas en la vida"
                                fullWidth
                                multiline
                                rows={4}
                                defaultValue=""
                                value={metasVida} onChange={(e) => { setMetasVida(e.target.value) }}
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
                            <FormControlLabel control={<Checkbox name="S1" color="primary" value={true} onClick={(e) => { setProblemasConcentracion(e.target.value) }}/>}
                                label="1. Problemas de concentración y atención"
                            />
                            <FormControlLabel control={<Checkbox name="S2" color="primary" value={true} onClick={(e) => { setAngustia(e.target.value) }} />}
                                label="2. Angustia "
                            />
                            <FormControlLabel control={<Checkbox name="S3" color="primary" value={true} onClick={(e) => { setProblemasMemoria(e.target.value) }} />}
                                label="3. Problemas de memoria "
                            />
                            <FormControlLabel control={<Checkbox name="S4" color="primary" value={true} onClick={(e) => { setInsomnio(e.target.value) }}/>}
                                label="4. Insomnío "
                            />
                            <FormControlLabel control={<Checkbox name="S5" color="primary" value={true} onClick={(e) => { setExcesoSueño(e.target.value) }} />}
                                label="5. Exceso de sueño "
                            />
                            <FormControlLabel control={<Checkbox name="S6" color="primary" value={true} onClick={(e) => { setPesadillas(e.target.value) }}/>}
                                label="6. Pesadillas "
                            />
                            <FormControlLabel control={<Checkbox name="S7" color="primary" value={true} onClick={(e) => { setSonambulismo(e.target.value) }}/>}
                                label="7. Sonambulismo "
                            />
                            <FormControlLabel control={<Checkbox name="S8" color="primary" value={true} onClick={(e) => { setAburrimiento(e.target.value) }}/>}
                                label="8. Aburrimiento "
                            />
                            <FormControlLabel control={<Checkbox name="S9" color="primary" value={true} onClick={(e) => { setIrritabilidad(e.target.value) }}/>}
                                label="9. Irritabilidad "
                            />
                            <FormControlLabel control={<Checkbox name="S10" color="primary" value={true} onClick={(e) => { setMareos(e.target.value) }}/>}
                                label="10. Mareos "
                            />
                            <FormControlLabel control={<Checkbox name="S11" color="primary" value={true} onClick={(e) => { setCefaleas(e.target.value) }}/>}
                                label="11. Cefaleas (Dolores de cabeza) "
                            />
                            <FormControlLabel control={<Checkbox name="S6" color="primary" value={true} onClick={(e) => { setVomitos(e.target.value) }}/>}
                                label="6. Vomitos "
                            />
                            <FormControlLabel control={<Checkbox name="S13" color="primary" value={true} onClick={(e) => { setDesmayos(e.target.value) }}/>}
                                label="13. Desmayos "
                            />
                            <FormControlLabel control={<Checkbox name="S14" color="primary" value={true} onClick={(e) => { setDiarreas(e.target.value) }}/>}
                                label="14. Diarreas "
                            />
                            <FormControlLabel control={<Checkbox name="S15" color="primary" value={true} onClick={(e) => { setConstipacion(e.target.value) }}/>}
                                label="15. Constipacion (dificultad para defecar) "
                            />

                            <FormControlLabel control={<Checkbox name="S17" color="primary" value={true} onClick={(e) => { setArritmia(e.target.value) }}/>}
                                label="17. Arritmia "
                            />
                            <FormControlLabel control={<Checkbox name="S18" color="primary" value={true} onClick={(e) => { setTranspiracionManos(e.target.value) }} />}
                                label="18. Transpiracion en las manos "
                            />
                            <FormControlLabel control={<Checkbox name="S19" color="primary" value={true} onClick={(e) => { setOnicofagia(e.target.value) }}/>}
                                label="19. Onicofagia(se come las uñas) "
                            />
                            <FormControlLabel control={<Checkbox name="S20" color="primary" value={true} onClick={(e) => { setTemblorManos(e.target.value) }}/>}
                                label="20. Temblor en las manos "
                            />
                            <FormControlLabel control={<Checkbox name="S21" color="primary" value={true} onClick={(e) => { setBruxismo(e.target.value) }}/>}
                                label="21. Bruxismo (Aprieta mucho la mandibulas al dormir) "
                            />
                            <FormControlLabel control={<Checkbox name="S22" color="primary" value={true} onClick={(e) => { setComeExceso(e.target.value) }}/>}
                                label="22. Come en exceso "
                            />
                            <FormControlLabel control={<Checkbox name="S23" color="primary" value={true} onClick={(e) => { setInapetencia(e.target.value) }}/>}
                                label="23. Inapetancia "
                            />
                            <FormControlLabel control={<Checkbox name="S24" color="primary" value={true} onClick={(e) => { setSequedadBucal(e.target.value) }}/>}
                                label="24. Sequedad bucal "
                            />
                            <FormControlLabel control={<Checkbox name="S25" color="primary" value={true} onClick={(e) => { setIdeasObsesivas(e.target.value) }}/>}
                                label="25. Ideas obsesivas "
                            />
                            <FormControlLabel control={<Checkbox name="S26" color="primary" value={true} onClick={(e) => { setIdeasSuicidio(e.target.value) }}/>}
                                label="26. Ideas de suicidio "
                            />
                            <FormControlLabel control={<Checkbox name="S27" color="primary" value={true} onClick={(e) => { setSentimientosCulpa(e.target.value) }}/>}
                                label="27. Sentimientos de culpa "
                            />
                            <FormControlLabel control={<Checkbox name="S28" color="primary" value={true} onClick={(e) => { setTartamudez(e.target.value) }}/>}
                                label="28. Tartamudez "
                            />
                            <FormControlLabel control={<Checkbox name="S29" color="primary" value={true} onClick={(e) => { setAlteracionesMenstruales(e.target.value) }}/>}
                                label="29. Alteraciones menstruales "
                            />
                            <FormControlLabel control={<Checkbox name="S30" color="primary" value={true} onClick={(e) => { setImpotenciaSecual(e.target.value) }}/>}
                                label="30. Impotencia secual "
                            />
                            <FormControlLabel control={<Checkbox name="S31" color="primary" value={true} onClick={(e) => { setFrigidez(e.target.value) }} />}
                                label="31. Frigidez "
                            />
                            <FormControlLabel control={<Checkbox name="S32" color="primary" value={true} onClick={(e) => { setEyaculacionprecoz(e.target.value) }}/>}
                                label="32. Eyaculación precoz "
                            />
                            <FormControlLabel control={<Checkbox name="S33" color="primary" value={true} onClick={(e) => { setDolorVaginal(e.target.value) }}/>}
                                label="33. Dolor vaginal al tener relaciones Sexuales "
                            />
                            <FormControlLabel control={<Checkbox name="S34" color="primary" value={true} onClick={(e) => { setPocoDeseo(e.target.value) }}/>}
                                label="34. Poco deseo Sexual "
                            />
                            <FormControlLabel control={<Checkbox name="S35" color="primary" value={true} onClick={(e) => { setTics(e.target.value) }}/>}
                                label="35. Tics "
                            />
                            <FormControlLabel control={<Checkbox name="S36" color="primary" value={true} onClick={(e) => { setFatiga(e.target.value) }}/>}
                                label="36. Se fatiga fácilmente "
                            />
                            <FormControlLabel control={<Checkbox name="S37" color="primary" value={true} onClick={(e) => { setLlanto(e.target.value) }}/>}
                                label="37. Llanto "
                            />
                            <FormControlLabel control={<Checkbox name="S38" color="primary" value={true} onClick={(e) => { setDesanimo(e.target.value) }}/>}
                                label="38. Desanimo "
                            />
                            <FormControlLabel control={<Checkbox name="S39" color="primary" value={true} onClick={(e) => { setPena(e.target.value) }}/>}
                                label="39. Pena "
                            />
                            <FormControlLabel control={<Checkbox name="S40" color="primary" value={true} onClick={(e) => { setIngestion(e.target.value) }}/>}
                                label="40. Ingestión escesiva de alcohol "
                            />
                            <FormControlLabel control={<Checkbox name="S41" color="primary" value={true} onClick={(e) => { setConsumos(e.target.value) }}/>}
                                label="41. Consumo de Drogas "
                            />
                            <FormControlLabel control={<Checkbox name="S42" color="primary" value={true} onClick={(e) => { setHipocondria(e.target.value) }}/>}
                                label="42. Hipocondría (tendecia excesiva a atribuirse enfermedades) "
                            />
                            <Grid >
                                <Typography variant="h7" gutterBottom >
                                    43. Miedos desproporcionados: <br />
                                </Typography>
                                <FormControlLabel control={<Checkbox name="S43.a" color="primary" value={true} onClick={(e) => { setAlturas(e.target.value) }}/>}
                                    label="a. Las alturas  "
                                />
                                <FormControlLabel control={<Checkbox name="S43.b" color="primary" value={true} onClick={(e) => { setEspacios(e.target.value) }}/>}
                                    label="b. Los espacios cerrados "
                                />
                                <FormControlLabel control={<Checkbox name="S43.c" color="primary" value={true} onClick={(e) => { setViajar(e.target.value) }}/>}
                                    label="c. Viajar en avión "
                                />
                                <FormControlLabel control={<Checkbox name="S43.d" color="primary" value={true} onClick={(e) => { setSangre(e.target.value) }}/>}
                                    label="d. Ver sangre "
                                />
                                <FormControlLabel control={<Checkbox name="S43.e" color="primary" value={true} onClick={(e) => { setEspaciosAbiertos(e.target.value) }}/>}
                                    label="e. Los espacios abiertos  "

                                /><br />
                            </Grid>
                            <Typography variant="h7" gutterBottom>
                                44. Otros miedos: <br />
                            </Typography>
                            <TextField
                                id="tresMetas"
                                label=""
                                fullWidth
                                multiline
                                rows={4}
                                defaultValue=""
                                value={otrosMiedos} onChange={(e) => { setOtrosMiedos(e.target.value) }}
                            />
                        </Grid>
                    </Grid>



                    <Grid item alignContent="flex-end" className={classes.root}>
                        <Button className={classes.container1} variant="outlined" color="primary" href="#contained-buttons" startIcon={<CheckIcon />} onClick={e => { goLogin(); Listo() }} >
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
                         

                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    );
}