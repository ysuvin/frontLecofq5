import React, {Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import TemporaryDrawer from './Navbar/Navbar';
import Box from '@material-ui/core/Box';
import Grid from '../../Model/Grupo4/InscripcionHoras/Grids'
import Container from '@material-ui/core/Container';

const ContainerHoras = () => {


    return(
        <Fragment>

            <div className="navbar">
                <TemporaryDrawer />
            </div>
            <Grid />

        </Fragment>
        
    )
}

export default ContainerHoras;