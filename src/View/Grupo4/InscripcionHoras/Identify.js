import React from 'react';
import Grid from '@material-ui/core/Grid';

import Label from '../../../Component/Grupo4/InscripcionHoras/Label';

export default function Indentify(){

    return (
<<<<<<< HEAD
        <Grid container justify='space-evenly'>
            <Grid item>
=======
        <Grid container >
            <Grid item xs={6}>
>>>>>>> e48c91c5797be7aba602f96655985b6bb406600a
                <Label 
                    placeholder={'Nombre del Paciente'}
                    defaultValue={'DEIBY NICOLAS CABRERA ESPARZA'}
                />
            </Grid>

            
<<<<<<< HEAD
            <Grid item>
=======
            <Grid item xs={6}>
>>>>>>> e48c91c5797be7aba602f96655985b6bb406600a
                <Label 
                    placeholder={'Rut'}
                    defaultValue={'19.330.008-1'}
                />
            </Grid>

        </Grid>

    )
}