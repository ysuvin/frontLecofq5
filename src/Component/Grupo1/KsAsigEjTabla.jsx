import React from 'react';

import Ejercicios from '../../Model/Grupo1/Ejercicios';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { TextField } from '@material-ui/core';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const ejercicios = Ejercicios.data;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
}));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function KsAsigEjTabla() {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [repeticiones, setRepeticiones] = React.useState('');
  const handleChange = (event) => {
    setRepeticiones(event.target.value);
  };
  
  // const [state, setState] = React.useState(Ejercicios);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState("nombre");
  const [desc, setDesc] = React.useState("desc");
  const [vidlink, setVidlink] = React.useState("vidlink");

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEditOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  return (
    <div className={classes.root}>
    <List component="nav" aria-label="main mailbox folders">
    {ejercicios.map((i) => {return [<ListItem button onClick={()=>{ handleClickOpen(); setNombre(i.nombre); setDesc(i.desc);setVidlink(i.Vidlink) }}><ListItemText primary={i.nombre} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={handleClickEditOpen}>
                  <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>]})
    }
      
    </List>
    <Button variant="contained" onClick={handleClickEditOpen}>Añadir</Button>

    
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Ficha del paciente"}</DialogTitle>
        <DialogContent>
        <DialogContentText>
          <p>Nombre {nombre}</p>
          <p>desc: {desc}</p>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
                Disagree
              </Button> */}
        <Button onClick={handleClose} color="primary" autoFocus>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>

    <Dialog
        fullScreen={fullScreen}
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Añadir ejercicio"}</DialogTitle>
        <DialogContent>
        <FormControl className={classes.formControl}>
         
          <TextField 
            id="outlined-full-width"
            label="Nombre ejercicio" 
            
            variant="outlined"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.root} id="demo-simple-select-label">Repeticiones</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={repeticiones}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEditClose} color="secondary">
            Descartar
          </Button>
          <Button onClick={handleEditClose} color="primary" autoFocus>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
  </div>
  );
}