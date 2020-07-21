import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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


export default function KinesiologoF() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Metodo de llenado
      </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                    <TextField required id="KinName" label="Nombre del Kinesiologo" fullWidth autoComplete="kin-name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="paciName"
                        label="Nombre del Paciente"
                        fullWidth
                        autoComplete="paci-number"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="rutPaci" label="Rut del Paciente" fullWidth autoComplete="rut-paci" />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="recMed"
                        label="Recomendaciones"
                        fullWidth
                        multiline
                        rows={10}
                        defaultValue=""
                    />
                </Grid>


                <Grid item xs={12}>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="Proximo Control"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
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