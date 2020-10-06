import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen} style={{backgroundColor: "#f99f31"}}>
          <text style={{ color: '#FFF' }}> 
          Solicitar inscripción
          </text>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Inscripción por sobrecupo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Para solitar el ingreso al taller con cupos llenos, debe ingresar su correo y se le enviará
            el resultado de su solicitud.
            
          </DialogContentText>
          <DialogContentText>
          ¡Revisa tu correo diariamente!
          </DialogContentText>
          <TextField
                    required
                    margin="dense"
                    id="email"
                    label="Correo"
                    type="email"
                    fullWidth
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
