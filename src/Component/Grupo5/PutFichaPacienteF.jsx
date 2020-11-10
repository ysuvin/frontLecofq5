import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import history from '../../history';
import { useParams } from 'react-router-dom';
import { Input } from '@material-ui/core';

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
        minWidth: 380,
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

export default function PutFichaPacienteF() {

    const classes = useStyles();
    const [values, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
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
    const [value, setValue] = React.useState('Controlled')



    // const Listeilor = () => {
    //     axios.get(`http://localhost:8080/fichaPaciente/`)
    //         .then(res => {
    //             console.log("console: ", res)
    //         })
    //     //history.push('Listeilor')
    // }
    useEffect(() => {

        peticionGet(id)
        // eslint-disable-next-line
    }, []);
    const [data, setData] = useState([]);

    const peticionGet = (id) => {
        axios.get(`http://localhost:8080/fichaPaciente/${id}`).then(response => {
            setData(response.data.data);
            console.log("console: ", response.data.data);

        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div style={{
            marginLeft: 30, marginRight: 30, marginBottom: 30, marginTop: 30
        }}>
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                </Typography>
                <form className={classes.form} noValidate >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                        <InputLabel >Rut</InputLabel>
                            <TextField disabled id="rutPaci" //label="Rut" 
                            fullWidth autoComplete="rut-paci" value={Number(data.rut)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <InputLabel >Nombre</InputLabel>
                            <TextField
                                disabled
                                id="nombre"
                                label="NaN"
                                fullWidth
                                autoComplete="nombre"
                                value=""
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <InputLabel >Fecha de Nacimiento</InputLabel>
                            <TextField
                                disabled
                                id="date"
                                //label="NaN"
                                //type="date"
                                defaultValue="NaN/NaN/NaN"
                                className={classes.textField}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <InputLabel >Domicilio</InputLabel>
                            <TextField disabled  id="domici" //label="Domicilio"
                             fullWidth autoComplete="domici" value={data.domicilio}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <InputLabel >Comuna</InputLabel>

                            <TextField
                                disabled
                                
                                id="com"
                               label={data.comuna}
                                fullWidth
                                autoComplete="com"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                           
                            <InputLabel >Estado Civil</InputLabel>

                               {/* <br></br> */}
                            
                               <TextField
                                disabled
                               
                                id="com"
                               label={data.estado_civil} 
                                fullWidth
                                autoComplete="com"
                            />
                           
                            
                                
                                
                       
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <InputLabel >Telefono</InputLabel>
                        <TextField
                            disabled
                            type="number"
                            required
                            fullWidth
                            id="telef"
                            //label="Telefono(+56912345678)"
                            autoComplete="telef"
                            value={data.telefono}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                    <InputLabel >Prevision</InputLabel>
                        <TextField
                            disabled
                            required
                            fullWidth
                            id="prev"
                            //label="Previsión"
                            autoComplete="prev"
                            value={data.prevision}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <InputLabel >Motivo de consulta</InputLabel>
                        <TextField
                            
                            disabled
                            id="filled-multiline-static"
                            // label="Motivo de Consulta"
                            fullWidth
                            multiline
                            rows={4}
                            value={data.motivo_consulta}
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <InputLabel >Fecha de Ingreso</InputLabel>
                        <form className={classes.container} noValidate>
                            <TextField
                                disabled
                                id="fechIngreso"

                                type="date"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                value={data.fecha_ingreso}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                    </Grid>
                </form >
            </React.Fragment>
        </div >
    );
}