import React, {useState, useEffect} from 'react';
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

export default function Vistapaciente() {

const [data, setData] = useState([]);
const classes = useStyles();



useEffect(() => {

    peticionGet()
    // eslint-disable-next-line
  }, []); 



  const peticionGet=()=>{
    axios.get(`http://localhost:8080/fichaPaciente/`).then(response=>{
        setData(response.data.data);

    }).catch(error=>{
      console.log(error.message);
    })
    }

    const borrarElemento = (id) => {
        //axios.delete()
        console.log(id)
    }
    

    return (
        
    
        <div style={{
            marginLeft:30, marginRight:30, marginBottom:30, marginTop:30
        }}>
        <React.Fragment>
            <Grid item xs={12}>

                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{textAlign: "center", fontWeight: "bold"}}> ID </TableCell>
                            <TableCell style={{textAlign: "center", fontWeight: "bold"}}> Nombre </TableCell>
                            <TableCell style={{textAlign: "center", fontWeight: "bold"}}> Minutos (Por dia) </TableCell>
                            <TableCell style={{textAlign: "center", fontWeight: "bold"}}> Acciones </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map( (elemento, index ) => {
                        return(
                            <TableRow key={index}>
                                <TableCell >{elemento.rut}</TableCell>
                                <TableCell>{elemento.domicilio}</TableCell>
                                <TableCell>{elemento.telefono}</TableCell>
                                <TableCell style={{textAlign: "center"}}> 
                                        <Button variant="contained" color="primary">Ver </Button>
                                        <Button variant="contained"color="secondary" onClick={e => borrarElemento(elemento._id)} className={classes.button} startIcon={<DeleteIcon />}>Eliminar</Button>
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