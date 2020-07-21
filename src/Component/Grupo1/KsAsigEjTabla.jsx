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
import ReactPlayer from 'react-player/youtube'
import { TextField } from '@material-ui/core';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';

const ejercicios = Ejercicios.data;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems:'center',
    justifyContent: 'center',
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
    minWidth: 200,
    
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
    {ejercicios.map((i) => {return [<ListItem button onClick={()=>{ handleClickOpen(); setNombre(i.nombre); setDesc(i.desc);setVidlink(i.vidlink) }}><ListItemText primary={i.nombre} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={()=>{ handleClickEditOpen(); setNombre(i.nombre); setDesc(i.desc);setVidlink(i.vidlink) }}>
                  <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>]})
    }
      
    </List>
    <Button variant="contained" onClick={()=>{ handleClickEditOpen(); setNombre(""); setDesc("");setVidlink("") }}>Añadir</Button>

    
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Detalles del ejercicio"}</DialogTitle>
        <DialogContent>
        <DialogContentText>
          <p>Nombre: {nombre}</p>
          <p>Descripción: {desc}</p>
          <p>Video del Ejercicio: {vidlink}</p>
          <div className='player-wrapper'>
                <ReactPlayer 
                    className="g1-react-player" 
                    url= {vidlink} 
                    key={vidlink }
                    width='100%'
                    height='100%'
                    />
            </div>
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
          <p></p>
          <TextField 
            id="outlined-full-width"
            label="Nombre ejercicio" 
            defaultValue={nombre}
            variant="outlined"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
        <p></p>
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
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <p></p>
        <TextField
          id="outlined-textarea"
          label="Descripción"
          defaultValue={desc}
          multiline
          variant="outlined"
        />
        </FormControl>
        <FormControl className={classes.formControl}>
        <p></p>
        <TextField
          id="outlined-textarea"
          label="Enlace del video"
          defaultValue={vidlink}
          multiline
          variant="outlined"
        />
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