import React, {useState} from 'react';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import CheckIcon from '@material-ui/icons/Check';
// import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
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
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}));

const dataPaises = [
    { id: 1, nombre: "Filipinas", minutos: 241 },
    { id: 2, nombre: "Brasil", minutos: 225 },
    { id: 3, nombre: "Colombia", minutos: 216 },
    { id: 4, nombre: "Nigeria", minutos: 216 },
    { id: 5, nombre: "Argentina", minutos: 207 },
    { id: 6, nombre: "Indonesia", minutos: 195 },
    { id: 7, nombre: "Emiratos Árabes Unidos", minutos: 191 },
    { id: 8, nombre: "México", minutos: 190 },
    { id: 9, nombre: "Sudáfrica", minutos: 190 },
    { id: 10, nombre: "Egipto", minutos: 186 },
];

export default function Vistapaciente() {

const [data, setData] = React.useState();

const classes = useStyles();

 const state ={
   data:[{ rut: 1, domicilio: "Filipinas", telefono: 241 }]
}

  const peticionGet=()=>{
    axios.get(`http://localhost:8080/fichaPaciente/`).then(response=>{
      setData({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
    }
    

    return (
        
    
        <div style={{
            marginLeft:30, marginRight:30, marginBottom:30, marginTop:30
        }}>
        <React.Fragment>
            <Grid item xs={12}>

            <Button variant="outlined" color="primary"  onClick={e => { peticionGet()}}
                            >
                                Finalizar
                </Button>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> ID </TableCell>
                            <TableCell> Nombre </TableCell>
                            <TableCell> Minutos (Por dia) </TableCell>
                            <TableCell> Acciones </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.data.map(elemento=>{
                        return(
                            <TableRow>
                                <TableCell>{elemento.rut}</TableCell>
                                <TableCell>{elemento.domicilio}</TableCell>
                                <TableCell>{elemento.telefono}</TableCell>
                                <TableCell>
                                        <Button variant="contained" color="primary">Ver</Button>
                                        <Button variant="contained"color="secondary" className={classes.button} startIcon={<DeleteIcon />}>Eliminar</Button>
                                </TableCell>
                            </TableRow>
                        )
                        
                    })}
                    </TableBody>
                </Table>
            </Grid>
        </React.Fragment>
        </div>
    );
}