import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';


import './Navbar.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          
            <ListItem button key={"Paciente"}>
              <ListItemText primary={"Paciente"} />
            </ListItem>
          
      </List>

    <List>
      
        <Link to="/Grupo4/paciente/horas">
          <ListItem button key={"Agendar Hora"}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={"Agendar Hora"} />
          </ListItem>
        </Link>
        <ListItem button key={"Confirmar Hora"}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={"Confirmar Hora"} />
        </ListItem>
    </List>

      <Divider />
 
      <List>
          <ListItem button key={"Secretario"}>
            <ListItemText primary={"Secretario"} />
          </ListItem>
      </List>
      <List>
        <Link to="/Grupo4/secretario/administrar/horas-medicas">

          <ListItem button key={"Agendar Hora"}>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary={"Agendar Hora"} />
              </ListItem>
        </Link>
      </List>

      <Divider />
      <List>
      <Link to="/">
          <ListItem button key={"Home"}>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
    </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon color="white"/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}