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


export default function PsicologoF() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Metodo de llenado
      </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField required id="PsiName" label="Nombre del Psicologo" fullWidth autoComplete="psi-name" />
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
            </Grid>
        </React.Fragment>
    );
}