import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SSADrawer from "./SSADrawer";
import history from "../../history";

const redirectLogin = () => {
  history.push("/Grupo3/Login");
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#444444' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <SSADrawer />
          </IconButton>
          <Typography align="center" variant="h6" className={classes.title} >
            Sistema de Registro de Talleres
          </Typography>
          <Button onClick={redirectLogin} color="inherit">
            Profesores
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
