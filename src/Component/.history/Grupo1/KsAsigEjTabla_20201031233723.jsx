import React, { useEffect } from 'react';

import {GetEjercicios, PostEjercicio, UpdateEjercicio, DeleteEjercicio} from '../../Model/Grupo1/EjerciciosController';

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
import { RutinaContext } from '../../Model/Grupo1/RutinaContext';
import { KsViewContext } from '../../Model/Grupo1/KsViewContext';

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

  const [rutinaC, setRutinaC] = React.useContext(RutinaContext);
  
  //Query que recupera los ejercicios
  const [ejercicios, setEjercicios] = React.useState(null);
  const [isLoading,setIsLoading] = React.useState(true);
  const [ksViewC, setKsViewC] = React.useContext(KsViewContext);

  const fetchData = async () => {
    const query = await GetEjercicios().then((res) =>{
      var response = []
        for(var i = 0; i < res.length; i++)
        {

          if(res[i].idRutina == rutinaC._id)
          {
            response.push(res[i]);
          }
        }
      return response;
    });
    return query;
  }
  const postData = async (ejercicio) => {
    return await PostEjercicio(ejercicio);
  }

  const updateData = async (id,ejercicio) => {
      return await UpdateEjercicio(id,ejercicio);
  }

  const deleteData = async (id) => {
      return await DeleteEjercicio(id);
  }
  
  useEffect(() => {
    fetchData().then((query) =>{
      setEjercicios(query);
      console.log(query);
      setIsLoading(false);
      console.log(rutinaC);
    }
    );
  }, []);

  ////
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [repeticiones, setRepeticiones] = React.useState('1');
  const handleRepeticionesChange = (event) => {
    setRepeticiones(event.target.value);
    console.log(repeticiones);
  };
  
  // const [state, setState] = React.useState(Ejercicios);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState("nombre");
  const [desc, setDesc] = React.useState("desc");
  const [vidLink, setVidlink] = React.useState("vidLink");
  const [_id, setId] = React.useState(null);
  const [idRutina, setIdRutina] = React.useState("");

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

  //Textfield hooks
  const [textNombre,setTextNombre] = React.useState("");
  const [textDesc,setTextDesc] = React.useState("");
  const [textVidLink,setTextVidLink] = React.useState("");

  
  const handleNombreChange = (event) => {
    setTextNombre(event.target.value);
  };
  const handleDescChange = (event) => {
    setTextDesc(event.target.value);
  };
  const handleVidLinkChange = (event) => {
    setTextVidLink(event.target.value);
  };

  return (
    <div className={classes.root}>
     {isLoading ? 
      (
        <div>Cargando...</div>
      ) : 
      ( 
    <List component="nav" aria-label="main mailbox folders">
    {ejercicios.map((i) => {return [<ListItem button onClick={()=>{ handleClickOpen(); setId(i._id);  setNombre(i.nombre);  setDesc(i.desc);  setVidlink(i.vidLink); setRepeticiones(i.repeticiones) }}><ListItemText primary={i.nombre} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={()=>{ handleClickEditOpen(); setIdRutina(i.idRutina); setId(i._id); setTextNombre(i.nombre); setNombre(i.nombre); setTextDesc(i.desc); setDesc(i.desc); setRepeticiones(i.repeticiones); setTextVidLink(i.vidLink); setVidlink(i.vidLink) }}>
                  <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() =>{
                  setEjercicios((prevState) => {
                    const data = [...prevState];
                    data.splice(data.indexOf(i), 1);
                    deleteData(i._id);
                    return data;
                  });
                
                }
              }>
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>]})
    }
      
    </List>
    )}
    <Button variant="contained" color="primary" onClick={()=>{ handleClickEditOpen(); setId(null); setTextNombre(""); setNombre(""); setTextDesc(""); setDesc(""); setTextVidLink(""); setVidlink(""); setRepeticiones("1");}}>Añadir</Button>
    <p></p>
    <Button variant="contained" color="secondary" onClick={() => { setKsViewC(1);}}>Volver</Button>
            
    
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
          <p>Número de repeticiones: {repeticiones}</p>
          <p>Descripción: {desc}</p>
          <p>Video del Ejercicio: {vidLink}</p>
          <div className='player-wrapper'>
                <ReactPlayer 
                    className="g1-react-player" 
                    url= {vidLink} 
                    key={vidLink }
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
            onChange={handleNombreChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
        <p></p>
        <FormControl className={classes.formControl}>
          <p></p>
          <TextField 
            id="outlined-full-width"
            label="Repeticiones" 
            defaultValue={repeticiones}
            variant="outlined"
            onChange={handleRepeticionesChange}
          />
        </FormControl>
        </FormControl>
        <FormControl className={classes.formControl}>
          <p></p>
        <TextField
          id="outlined-textarea"
          label="Descripción"
          defaultValue={desc}
          multiline
          variant="outlined"
          onChange={handleDescChange}
        />
        </FormControl>
        <FormControl className={classes.formControl}>
        <p></p>
        <TextField
          id="outlined-textarea"
          label="Enlace del video"
          defaultValue={vidLink}
          multiline
          variant="outlined"
          onChange={handleVidLinkChange}
        />
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleEditClose} color="secondary">
            Descartar
          </Button>
          <Button onClick={()=> {
            handleEditClose();
            //Si no estoy usando ninguna ID 
            if(_id == null && (textNombre != "" || textDesc != "" || textVidLink != ""))
            {
              postData({idRutina: rutinaC._id, nombre: textNombre, desc: textDesc, vidLink: textVidLink, repeticiones: repeticiones,}).then((response) => {
                const datito = [...ejercicios];
                datito.push(response);
                setEjercicios(datito);
              }) 
            }
            else if(_id != null)
            {
              var nextData = ejercicios;
              updateData(_id,{idRutina: idRutina, nombre: textNombre, desc: textDesc, vidLink: textVidLink, repeticiones: repeticiones,});
              console.log(nextData);
              var index;
              for(var j = 0; j < nextData.length;j++)
              {
                if(nextData[j]._id == _id)
                {
                  index = j;
                }
              }
              nextData[index].nombre = textNombre;
              nextData[index].desc = textDesc;
              nextData[index].vidLink = textVidLink;
              nextData[index].repeticiones = repeticiones;
              setEjercicios(nextData);
            }}
            } color="primary" autoFocus>
            Guardar
          </Button>
        </DialogActions>
    </Dialog>
  </div>
  );
}