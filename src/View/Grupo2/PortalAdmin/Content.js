import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';




const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  grid:{
    textAlign: 'center',
    padding: '10px'
  }
});


function AddDialog(props) {
  const { onClose, open } = props;
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");



  const handleClose = () => {
    onClose();
  };

  let addFuncionario = async () => {
    let param = {
      email: email,
      password: pass
    }
  
    axios.post(`http://localhost:8080/funcionarios/add/`, param)
      .then(
        (response) => {
          console.log (response)
          handleClose()
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <Dialog fullWidth={true} maxWidth={"sm"} onClose={handleClose} open={open}>
      <Paper> 
        <Table>
          <TableBody>
              <TableRow>
                  <TableCell>Correo</TableCell>
                  <TableCell>
                      <TextField 
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>Contraseña</TableCell>
                  <TableCell>
                      <TextField                 
                      onChange={(e) => setPass(e.target.value)}
                      fullWidth type="password" id="standard-password-input"/>
                  </TableCell>    
              </TableRow>
          </TableBody>
        </Table>

        <Grid container spacing={3} style={{textAlign: 'center', padding: '10px'}}>
          <Grid item xs={12} >
            <Button onClick={addFuncionario} variant="contained" color="primary">Añadir Usuario</Button>                
          </Grid>
        </Grid>

        </Paper>
    </Dialog>
  );
}


function SimpleDialog(props) {
  const { onClose, open , emu, id} = props;
  const [emailNew, setEmailNew] = React.useState(emu);
  const [passNew, setPassNew] = React.useState("");


  const handleClose = () => {
    onClose();
  };

  let deleteFuncionario = async () => {
    let param = {
      _id:id
    }
  
    axios.delete(`http://localhost:8080/funcionarios/delete/`+id, param)
      .then(
        (response) => {
          console.log (response)
          handleClose()
        },
        (error) => {
          console.log(error);
        }
      );
  }

  let editFuncionario = async () => {
    let param = {
      _id: id,
      email: emailNew,
      password: passNew
    }
    if (emailNew == "") {
      param.email=emu;
    }
    
    axios.put(`http://localhost:8080/funcionarios/edit/`+id, param)
      .then(
        (response) => {
          console.log (response)
          handleClose()
        },
        (error) => {
          console.log(error);
        }
      );
    
  }
  return (
    <Dialog fullWidth={true} maxWidth={"sm"} onClose={handleClose} open={open}>
      <Paper> 
        <Table>
          <TableBody>
              <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>{id}</TableCell>
              </TableRow>

              <TableRow>
                  <TableCell>Correo</TableCell>
                  <TableCell>
                      <TextField onChange={(e) => setEmailNew(e.target.value)} fullWidth defaultValue={emu} />
                  </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>Contraseña</TableCell>
                  <TableCell>
                      <TextField onChange={(e) => setPassNew(e.target.value)} fullWidth type="password" id="standard-password-input"/>
                  </TableCell>    
              </TableRow>
          </TableBody>
        </Table>

        <Grid container spacing={3} style={{textAlign: 'center', padding: '10px'}}>
          <Grid item xs={6} >
            <Button onClick={editFuncionario} style={{backgroundColor:"#33FF85"}}>Actualizar</Button>
          </Grid>
          <Grid item xs={6} >
            <Button onClick={deleteFuncionario} style={{backgroundColor:"#EF5151"}}>Borrar Usuario</Button>
          </Grid>
        </Grid>

        </Paper>
    </Dialog>
  );
}


function Content(props) {
  const { classes } = props;
  const funcionarios = props.funcionarios;
  const botonRecargar = props.reCargarTabla;
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [idTemp, setIdTemp] = React.useState("");
  const [emailTemp, setEmailTemp] = React.useState("");

  function handleClickOpenEdit(id, email) {
    setIdTemp(id);
    setEmailTemp(email);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  function handleClickOpenAdd() {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  function handleClickRefresh() {
    botonRecargar();
  };

  return (    
    <div>  
      <Paper className={classes.paper}>
        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Button variant="contained" color="primary" className={classes.addUser} onClick={handleClickOpenAdd}>
                  Añadir Usuario
                </Button>
                <Tooltip onClick={handleClickRefresh} title="Actualizar">
                  <IconButton>
                    <RefreshIcon className={classes.block} color="inherit" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        { funcionarios.length <= 0 ?
            <div className={classes.contentWrapper}>
              <Typography color="textSecondary" align="center">
                No se han encontrado usuarios.
              </Typography>
            </div>
            :
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">Correo</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {funcionarios.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">{row._id}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">
                        <Button style={{backgroundColor:'#EBEBEB'}} onClick={handleClickOpenEdit.bind(this, row._id,row.email)}>Editar</Button>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
        }

      </Paper>
      <SimpleDialog open={openEdit} onClose={handleCloseEdit} emu={emailTemp} id={idTemp}/>
      <AddDialog open={openAdd} onClose={handleCloseAdd}/>

      </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);