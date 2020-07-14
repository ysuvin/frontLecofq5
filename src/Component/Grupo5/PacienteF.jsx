import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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



export default function PacienteF() {
    const classes = useStyles();
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
    const [value, setValue] = React.useState('Controlled');



    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Ficha Paciente
      </Typography>
      
      <Grid container
  direction="column"
 
  alignItems="center">

            <form className={classes.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Fecha de Ingreso"
                        type="datetime-local"
                        defaultValue="2020-06-15T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </form>
        </Grid>
            <Grid  container
                    direction="column"
                    justify="space-between"
                    alignItems="center">
                <Grid item xs={15} md={6}>
                    <TextField required id="cardName"
                     label="Nombre"  
                     autoComplete="cc-name" />
                </Grid>
                <Grid item xs={15} md={6}>
                    <TextField
                        required
                        id="Edad"
                        label="Rut (Ej: 12345678-9)"
                        
                        autoComplete="cc-number"
                    />
                </Grid>
                <Grid item xs={15} md={6}>
                <form className={classes.container} noValidate>
                    <TextField
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
                <Grid item xs={15} md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Sexo      </InputLabel>
                        <Select
                        labelId="demo-controlled-opn-select-label"
                        id="demo-controlled-open-seect"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={values}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>(Vacio)</em>
                        </MenuItem>
                        <MenuItem value={10}>Masculino</MenuItem>
                        <MenuItem value={20}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={15} md={6}>
                    <TextField required id="expDate" 
                        label="Domicilio"  
                        autoComplete="cc-exp" />
                </Grid>
                
                <Grid item xs={15} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="Comuna"
                        
                        autoComplete="cc-csc"
                    />
                </Grid>
                <Grid item xs={15} md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Estado Civil    </InputLabel>
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
                        <MenuItem value={10}>Soltero(a)</MenuItem>
                        <MenuItem value={20}>Casado(a)</MenuItem>
                        <MenuItem value={20}>Viudo(a)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={15} md={6}>
                    <TextField required id="expDate" 
                        label="Telefono(+56912345678)"  
                        autoComplete="cc-exp" />
                </Grid>
                <Grid item xs={15} md={6}>
                    <TextField required id="expDate" 
                        label="Previsión"  
                        autoComplete="cc-exp" />
                </Grid>
                <Grid item xs={15} md={6}>
                    <TextField
                        id="filled-multiline-static"
                        label="Motivo de Consulta"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}