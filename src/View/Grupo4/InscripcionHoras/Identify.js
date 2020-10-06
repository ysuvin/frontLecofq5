import React from 'react';
import Grid from '@material-ui/core/Grid';

import Label from '../../../Component/Grupo4/InscripcionHoras/Label';

export default function Indentify(){

    return (
        <Grid container justify='space-evenly'>
            <Grid item>
                <Label 
                    placeholder={'Nombre del Paciente'}
                    defaultValue={'DEIBY NICOLAS CABRERA ESPARZA'}
                />
            </Grid>

            
            <Grid item>
                <Label 
                    placeholder={'Rut'}
                    defaultValue={'19.330.008-1'}
                />
            </Grid>

        </Grid>

    )
}