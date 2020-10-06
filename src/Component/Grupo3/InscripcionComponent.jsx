import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Stepper from './Stepper';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { green, lightBlue} from "@material-ui/core/colors";
import Validation from "./Validation";

{/* Styles para el boton de progreso */}
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "8%",
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [name, setName] = React.useState('Composed TextField');
  const labelRef = React.useRef(null);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  {/*Para dar un progreso al boton d enviado*/}
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000,)
    }
  };

  function handleChange(event) {
    setName(event.target.value);
  }


  {/* Funcion de validacion */}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}style={{backgroundColor: "#f99f31"}} >
        <text style={{ color: '#FFF' }}> ¡Inscribete!</text>
       
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Inscripción</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para poder llevar a cabo tu solicitud debes llenar los siguientes datos.
          </DialogContentText>
          <Validation></Validation>
        </DialogContent>
        <DialogActions>
        {/*<Stepper></Stepper>*/}
        {/*<Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" disable={loading} className={buttonClassname}>
            Enviar
        </Button>*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}