import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Imput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

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
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    table: {
        minWidth: 650,

    },
    tablecell: {
        width: 400,

    },
}));

export default function NutricionistaF() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {id} = useParams();
    const [banderaAlerta, setBanderaAlerta] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // const [cont, setCont] = useState(1);
    // const [matriz, setMatriz] = useState([])

    

    // useEffect(() => {
    //     iterar()
    // }, [cont])

    // const iterar = () => {
    //     var matriztemp = [];
    //     for (let index = 0; index < cont; index++) {
    //         matriztemp.push(
    //             <TableRow>
    //                 <TableCell>
    //                     <TextField id="tiempComida" variant="outlined" fullWidth></TextField>
    //                 </TableCell >
    //                 <TableCell >
    //                     <TextField id="comida" variant="outlined" fullWidth></TextField>
    //                 </TableCell>
    //                 <TableCell>
    //                     {/* <Button>+</Button> */}
    //                 </TableCell>
    //             </TableRow>
    //         )
    //     }
    //     setMatriz(matriztemp)
    // }


    const[rut,setRut] = React.useState('');
    const[actividadLaboral,setActividadLaboral] = React.useState('');
    const[actividadFisica,setActividadFisica] = React.useState('');
    const[horasSemanales,setHorasSemanales] = React.useState('');
    const[consumoAlcohol,setConsumoAlcohol] = React.useState('');
    const[cantidadSemanalAlcohol,setCantidadSemanalAlcohol] = React.useState('');
    const[habitoTabaquico,setHabitoTabaquico] = React.useState('');
    const[cantidadSemanalTabaco,setCantidadSemanalTabaco] = React.useState('');
    const[peso,setPeso] = React.useState('');
    const[talla,setTalla] = React.useState('');
    const[imc,setImc] = React.useState('');
    const[cCintura,setCCintura] = React.useState('');
    const[cCadera,setCCadera] = React.useState('');
    const[icc,setIcc] = React.useState('');
    const[pitri,setPitri] = React.useState('');
    const[pibi,setPibi] = React.useState('');
    const[pisb,setPisb] = React.useState('');
    const[pisc,setPisc] = React.useState('');
    const[grasa,setGrasa] = React.useState('');
    const[gmb,setGmb] = React.useState('');
    const[pesoIdeal,setPesoIdeal] = React.useState('');
    const[patologia,setPatologia] = React.useState(false);
    const[diabetes,setDiabetes] = React.useState(false);
    const[obesidad,setObesidad] = React.useState(false);
    const[dislipidemia,setDislipidemia] = React.useState(false);
    const[cancer,setCancer] = React.useState(false);
    const[hta,setHta] = React.useState(false);
    const[otrasPatologias,setOtrasPatologias] = React.useState('');
    const[tiemposComida,setTiemposComida] = React.useState('');
    const[alimentosPorciones,setAlimentosPorciones] = React.useState('');

    // const [banderaAlerta, setBanderaAlerta] = useState(false);
    // const [banderaAlertaOpcion, setBanderaAlertaOpcion] = useState(false);

    // const [rut,setRut] = useState()


    const Listo = () => {
        Axios.get(`http://api.lecofq.informatica.uv.cl//fichaNutricionista/`)
        .then(res => {
            console.log("console: ",res)
        })
    }


    const goLogin = () =>{
        let data = {
            rut: rut,
            actividadLaboral: actividadLaboral,
            actividadFisica: actividadFisica,
            horasSemanales: horasSemanales,
            consumoAlcohol: consumoAlcohol,
            cantidadSemanalAlcohol: cantidadSemanalAlcohol,
            habitoTabaquico: habitoTabaquico,
            cantidadSemanalTabaco: cantidadSemanalTabaco,
            patologia: patologia,
            diabetes: diabetes,
            obesidad: obesidad,
            dislipidemia: dislipidemia,
            cancer: cancer,
            hta: hta,
            otrasPatologias: otrasPatologias,
            peso: peso,
            talla: talla,
            imc: imc,
            cCintura: cCintura,
            cCadera: cCadera,
            icc: icc,
            pitri: pitri,
            pibi: pibi,
            pisb: pisb,
            pisc: pisc,
            grasa: grasa,
            gmb: gmb,
            pesoIdeal: pesoIdeal,
            tiemposComida: tiemposComida,
            alimentosPorciones: alimentosPorciones,
        }
        Axios.put(`http://api.lecofq.informatica.uv.cl//fichaNutricionista/${id}`, data)
    }

    const check = (data) => {
        if (data == true) {
            return;
        }

        setOpen(false);
    };


    useEffect(() => {
        peticionGet(id)
    }, []);

    const [data, setData] = useState([]);
    
    const peticionGet = (id) => {
        Axios.get(`http://api.lecofq.informatica.uv.cl//fichaNutricionista/${id}`).then(response => {
            setData(response.data.data);
            setRut(response.data.data.rut);
            setActividadLaboral(response.data.data.actividadLaboral);
            setActividadFisica(response.data.data.actividadFisica);
            setHorasSemanales(response.data.data.horasSemanales);
            setConsumoAlcohol(response.data.data.consumoAlcohol);
            setCantidadSemanalAlcohol(response.data.data.cantidadSemanalAlcohol);
            setHabitoTabaquico(response.data.data.habitoTabaquico);
            setCantidadSemanalTabaco(response.data.data.cantidadSemanalTabaco);
            setPeso(response.data.data.peso);
            setTalla(response.data.data.talla);
            setImc(response.data.data.imc);
            setCCintura(response.data.data.cCintura);
            setCCadera(response.data.data.cCadera);
            setIcc(response.data.data.icc);
            setPitri(response.data.data.icc);
            setPibi(response.data.data.pibi);
            setPisb(response.data.data.pisb);
            setPisc(response.data.data.pisc);
            setGrasa(response.data.data.grasa);
            setGmb(response.data.data.gmb);
            setPesoIdeal(response.data.data.pesoIdeal);
            setPatologia(response.data.data.patologia);
            setDiabetes(response.data.data.diabetes);
            setObesidad(response.data.data.obesidad);
            setDislipidemia(response.data.data.dislipidemia);
            setCancer(response.data.data.cancer);
            setHta(response.data.data.hta);
            setOtrasPatologias(response.data.data.otrasPatologias);
            setTiemposComida(response.data.data.tiemposComida);
            setAlimentosPorciones(response.data.data.alimentosPorciones);
            console.log("console: ", response.data.data);
    })
        // }).catch.(error => {
        //     console.log(error.message);
        // })
    }



    return (

        <div style={{
            marginLeft: 30, marginRight: 30, marginBottom: 30, marginTop: 30
        }}>
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Antecedentes Personales
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <InputLabel >Rut del Paciente</InputLabel>
                        <TextField
                            required
                            id="rutPaci"
                            fullWidth 
                            autoComplete="rut-paci"
                            value = {rut}
                            onChange={e => setRut(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            disabled
                            id="paciName"
                            label="Nombre del Paciente"
                            fullWidth
                            autoComplete="paci-number"
                        />
                    </Grid>
                    <Grid item xs={15} md={6}>
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
                            disabled
                            id="estC"
                            label="Estadi Civil"
                            fullWidth
                            autoComplete="est-civil"
                        />
                    </Grid>
                    <Grid item xs={6} md={12}>
                    <InputLabel >Actividad Laboral</InputLabel>
                        <TextField
                            id="actL"
                            fullWidth
                            autoComplete="act-lab"
                            value={actividadLaboral}
                            onChange={e => setActividadLaboral(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    <InputLabel >Actividad Fisica</InputLabel>
                        <TextField
                            id="actF"
                            // label="Actividad Fisica"
                            fullWidth
                            autoComplete="act-fis"
                            value={actividadFisica}
                            onChange={e => setActividadFisica(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    <InputLabel >Hrs Por Semanas</InputLabel>
                        <TextField
                            type="number"
                            id="hSem"
                            // label="Hrs Por Semanas"
                            fullWidth
                            autoComplete="h-sem"
                            value={horasSemanales}
                            onChange={e => setHorasSemanales(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    <InputLabel >Consumo de Alcohol</InputLabel>
                        <TextField
                            id="conAl"
                            // label="Consumo de Alcohol"
                            fullWidth
                            autoComplete="con-Al"
                            value={consumoAlcohol}
                            onChange={e => setConsumoAlcohol(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    <InputLabel >Cantidad por Semana</InputLabel>
                        <TextField
                            type="number"
                            id="cantSem1"
                            // label="Cantidad por Semana"
                            fullWidth
                            autoComplete="cant-sem1"
                            value={cantidadSemanalAlcohol}
                            onChange={e => setCantidadSemanalAlcohol(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    <InputLabel >Hábito tabáquico</InputLabel>
                        <TextField
                            id="habTaba"
                            // label="Hábito tabáquico"
                            fullWidth
                            autoComplete="hab-taba"
                            value={habitoTabaquico}
                            onChange={e => setHabitoTabaquico(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                    <InputLabel >Cantidad por Semana</InputLabel>
                        <TextField
                            type="number"
                            id="cantSem2"
                            // label="Cantidad por Semana"
                            fullWidth
                            autoComplete="cant-sem2"
                            value={cantidadSemanalTabaco}
                            onChange={e => setCantidadSemanalTabaco(e.target.value)}
                        />
                    </Grid>
                    <div>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                Antecedentes Mórbidos
                        </Typography>
                        </Grid>

                        <Grid item xs={12}>
                        <FormControlLabel
                            
                             control={
                                <Checkbox                                          
                                    color="primary"
                                    checked={patologia}
                                    // value={patologia}
                                    onClick={(e) => { setPatologia(!patologia) }}

                                />
                            }
                            label="Patologia"
                        />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkDiabetes"
                                        color="primary"
                                        checked={diabetes}
                                        // value={diabetes} 
                                        onClick={(e) => { setDiabetes(!diabetes) }}
                                    />
                                }
                                label="Diabetes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkObesidad"
                                        color="primary"
                                        checked={obesidad}
                                        // value={obesidad}
                                        onClick={(e) => { setObesidad(!obesidad) }}
                                    />
                                }
                                label="Obesidad"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkDislipidemia"
                                        color="primary"
                                        checked={dislipidemia}
                                        // value={dislipidemia} 
                                        onClick={(e) => { setDislipidemia(!dislipidemia)}}
                                    />
                                }
                                label="Dislipidemia"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkCancer"
                                        color="primary"
                                        checked={cancer}
                                        // value={cancer}
                                        onClick={(e) => { setCancer(!cancer)}}
                                    />
                                }
                                label="Cancer"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkHTA"
                                        color="primary"
                                        checked={hta}
                                        // value={hta} 
                                        onClick={(e) => { setHta(!hta) }}
                                    />
                                }
                                label="HTA"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <InputLabel >Otras Patologias</InputLabel>
                            <TextField
                                id="otrasPat"
                                // label="Otras Patologias"
                                fullWidth
                                multiline
                                rows={3}
                                value={otrasPatologias}
                                onChange={e => setOtrasPatologias(e.target.value)}
                                
                            />
                        </Grid>
                    </div>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h6" gutterBottom>
                            Antropometría
                    </Typography>
                    </Grid>
                    <Grid container justify="flex-start" spacing={1}>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="peso"
                                label="Peso (Kg)"
                                fullWidth
                                autoComplete="peso-kg"
                                value={peso}
                                onChange={e => setPeso(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="talla"
                                label="Talla (cm)"
                                fullWidth
                                autoComplete="talla-cm"
                                value={talla}
                                onChange={e => setTalla(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="imc"
                                label="IMC"
                                fullWidth
                                autoComplete="imc"
                                value={imc}
                                onChange={e => setImc(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="cCint"
                                label="C. cintura"
                                fullWidth
                                autoComplete="c-cint"
                                value={cCintura}
                                onChange={e => setCCintura(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="cCad"
                                label="C. Cadera"
                                fullWidth
                                autoComplete="c-cad"
                                value={cCadera}
                                onChange={e => setCCadera(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="icc"
                                label="I.C.C."
                                fullWidth
                                autoComplete="icc"
                                value={icc}
                                onChange={e => setIcc(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="pitri"
                                label="PITRI"
                                fullWidth
                                autoComplete="pitri"
                                value={pitri}
                                onChange={e => setPitri(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="pibi"
                                label="PIBI"
                                fullWidth
                                autoComplete="pibi"
                                value={pibi}
                                onChange={e => setPibi(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="pisb"
                                label="PISB"
                                fullWidth
                                autoComplete="pisb"
                                value={pisb}
                                onChange={e => setPisb(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="pisc"
                                label="PISC"
                                fullWidth
                                autoComplete="pisc"
                                value={pisc}
                                onChange={e => setPisc(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="porcentG"
                                label="% Grasa"
                                fullWidth
                                autoComplete="porcent-g"
                                value={grasa}
                                onChange={e => setGrasa(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField
                                type="number"
                                id="gmb"
                                label="G.M.B."
                                fullWidth
                                autoComplete="gmb"
                                value={gmb}
                                onChange={e => setGmb(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2} >
                            <TextField
                                type="number"
                                id="pesoIdeal"
                                label="Peso Ideal"
                                fullWidth
                                autoComplete="peso-ideal"
                                value={pesoIdeal}
                                onChange={e => setPesoIdeal(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Anamnesis alimentaria: Recordatorio 24 Hrs
                    </Typography>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={3} md={3}>
                        <InputLabel >Tiempos de Comida</InputLabel>
                            <TextField
                                id="tiempcomida"
                                // label="Tiempos de Comida"
                                fullWidth
                                autoComplete="tiempo-comida"
                                multiline
                                rows={15}
                                value={tiemposComida}
                                onChange={e => setTiemposComida(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={9} md={9}>
                        <InputLabel >Alimentos y Porciiones</InputLabel>
                            <TextField
                                id="alimPorc"
                                // label="Alimentos y Porciiones"
                                fullWidth
                                autoComplete="alimentos-porciones"
                                multiline
                                rows={15}
                                value={alimentosPorciones}
                                onChange={e => setAlimentosPorciones(e.target.value)}
                            />
                        </Grid>
                        {/* <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tablecell} size="small" >Tiempos de Comida</TableCell>
                                    <TableCell>Alimentos y Porciiones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    matriz
                                }
                                <Button variant="contained" color="primary" onClick={e => { setCont(cont + 1) }}>Agregar Comida</Button>
                                <Button variant="contained" color="secondary" onClick={e => { setCont(cont - 1) }}>Quitar Comida</Button>

                            </TableBody>
                        </Table> */}


                        <Button variant="outlined" color="primary" href="#contained-buttons" startIcon={<CheckIcon />} onClick={e => { goLogin(); Listo() }} >
                            Finalizar
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    );
}