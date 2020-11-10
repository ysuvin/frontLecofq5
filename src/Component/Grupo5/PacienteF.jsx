import React, {useState} from 'react';
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

export default function PacienteF() {
    const classes = useStyles();
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
    const [value, setValue] = React.useState('Controlled')


    const [rut, setRut] = React.useState('');
    const [domicilio, setDomicilio] = React.useState('');
    const [comuna, setComuna] = React.useState('');
    const [estado_civil, setEstado_civil] = React.useState('');
    const [prevision, setPrevision] = React.useState('');
    const [motivo_consulta, setMotivo_consulta] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [fecha_ingreso, setFecha_ingreso] = React.useState('');
    const [banderaAlerta, setBanderaAlerta] = useState(false);
    const [banderaAlertaOpcion, setBanderaAlertaOpcion] = useState(false);

    const Listeilor = (id) => {
        axios.get(`http://localhost:8080/fichaPaciente/${id}`)
            .then(res => {
                console.log("console: ", res)
            })
        //history.push('Listeilor')
    }

    const goLogIn = () => {
        let data = {
            rut: rut,
            domicilio: domicilio,
            comuna: comuna,
            estado_civil: estado_civil,
            prevision: prevision,
            motivo_consulta: motivo_consulta,
            telefono: telefono,
            fecha_ingreso: fecha_ingreso

        }
        axios.post(`http://localhost:8080/fichaPaciente/`, data) // callback( [] , false)
            .then((response) => {
                if (response.data.state) {
                    setOpen(true);
                    setBanderaAlerta(true);
                    setBanderaAlertaOpcion(true)
                }else{
                    setOpen(true);
                    setBanderaAlerta(true);
                    setBanderaAlertaOpcion(false)
                }
                console.log(response)
            
            }).finally(() => { console.log("termina") }).catch((e) => { console.log(e);
                setOpen(true);
                setBanderaAlerta(true);
                setBanderaAlertaOpcion(false)
            });
    }

    return (
        <div style={{
            marginLeft:30, marginRight:30, marginBottom:30, marginTop:30
        }}>
            <React.Fragment>
                <Typography variant="h4" gutterBottom>
                    Creacion ficha clinica paciente
                </Typography>
                <form className={classes.form} noValidate >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField required type="number" id="rutPaci" label="Rut (Ej: 12345678-9)" fullWidth autoComplete="rut-paci"
                                value={rut} onChange={(e) => { setRut(e.target.value) }}
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
                            <TextField required id="domici" label="Domicilio" fullWidth autoComplete="domici"
                                value={domicilio} onChange={(e) => { setDomicilio(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="com"
                                label="Comuna"
                                fullWidth
                                autoComplete="com"
                                value={comuna} onChange={(e) => { setComuna(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Estado Civil   </InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open2}
                                    onClose={handleClose2}

                                    onOpen={handleOpen2}
                                    value={values}
                                    onChange={handleChange}
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
                        <Grid item xs={12} md={6}>
                            <TextField
                            type="number"
                                required
                                fullWidth
                                id="telef"
                                label="Telefono(+56912345678)"
                                autoComplete="telef"
                                value={telefono} onChange={(e) => { setTelefono(e.target.value) }}
                            />

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                fullWidth
                                id="prev"
                                label="Previsión"
                                autoComplete="prev"
                                value={prevision} onChange={(e) => { setPrevision(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="filled-multiline-static"
                                label="Motivo de Consulta"
                                fullWidth
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="filled"
                                value={motivo_consulta} onChange={(e) => { setMotivo_consulta(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <form className={classes.container} noValidate>
                                <TextField
                                    id="fechIngreso"
                                    label="Fecha de Ingreso"
                                    type="date"
                                    defaultValue="2017-05-24T10:30"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={fecha_ingreso} onChange={(e) => { setFecha_ingreso(e.target.value) }}
                                />
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6} alignContent="flex-end" className={classes.root}>
                            <Button variant="outlined" color="primary" startIcon={<CheckIcon />} onClick={e => { goLogIn(); Listeilor()}}
                                className={classes.submit}
                            >
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
                </form >
            </React.Fragment>
        </div>
    );
}
