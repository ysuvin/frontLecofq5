import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


export default function PacienteF() {
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

                </Grid>
            </Grid>
        </React.Fragment>
    );
}