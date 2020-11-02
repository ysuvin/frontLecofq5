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
import {useParams} from 'react-router-dom';

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
    const {id} = useParams();

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
             console.log("console: ",response.data.data);

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
                            <TextField disabled id="rutPaci" label={data.rut} fullWidth autoComplete="rut-paci" 
                            />
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
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField disabled required id="domici" label="Domicilio" fullWidth autoComplete="domici" defaultValue ={data.domicilio}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                disabled
                                required
                                id="com"
                                label="Comuna"
                                fullWidth
                                autoComplete="com"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl disabled className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Estado Civil   </InputLabel>
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
                                    <MenuItem value={"Soltero(a)"}>Soltero(a)</MenuItem>
                                    <MenuItem value={"Casado(a)"}>Casado(a)</MenuItem>
                                    <MenuItem value={"Viudo(a)"}>Viudo(a)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                disabled
                                type="number"
                                required
                                fullWidth
                                id="telef"
                                label="Telefono(+56912345678)"
                                autoComplete="telef"
                            />

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                disabled
                                required
                                fullWidth
                                id="prev"
                                label="Previsión"
                                autoComplete="prev"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                disabled
                                id="filled-multiline-static"
                                label="Motivo de Consulta"
                                fullWidth
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    disabled
                                    id="fechIngreso"
                                    label="Fecha de Ingreso"
                                    type="date"
                                    defaultValue="2017-05-24T10:30"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </Grid>
                    </Grid>
                </form >
            </React.Fragment>
        </div>
    );
}