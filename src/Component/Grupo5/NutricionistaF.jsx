import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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
}));


export default function NutricionistaF() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Metodo de llenado
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Nombre de la persona" fullWidth autoComplete="cc-name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="Numero de paciente"
                        label="N°Paciente"
                        fullWidth
                        autoComplete="cc-number"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Hora de consulta" fullWidth autoComplete="cc-exp" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="Nombre del Medico"
                        fullWidth
                        autoComplete="cc-csc"
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
            </Grid>
        </React.Fragment>
    );
}