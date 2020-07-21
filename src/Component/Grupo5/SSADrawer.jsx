import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import history from '../../history';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const redirectHome = () => {
  history.push('/Grupo5/Plantillapaciente');
}
const redirectPlantillapaciente = () => {
  history.push('/Grupo5/Plantillapaciente');
}
// const redirectPlantillaMedico = () => {
//   history.push('/Grupo5/PlantillaMedico');
// }
const redirectPlantillaKinesiologo = () => {
  history.push('/Grupo5/PlantillaKinesiologo');
}
const redirectPlantillaNutricionista = () => {
  history.push('/Grupo5/PlantillaNutricionista');
}
const redirectPlantillaPsicologo = () => {
  history.push('/Grupo5/PlantillaPsicologo');
}

export default function SSADrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
        <ListItem onClick={redirectHome} button key={"Home"}>
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
      </List>
      <Divider />
      <ListItem onClick={redirectPlantillapaciente} button key='Plantilla'>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary={'PlantillaPaciente'} />
      </ListItem>
      {/* <ListItem onClick={redirectPlantillaMedico} button key='Plantilla'>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary={'PlantillaMedico'} />
      </ListItem> */}
      <ListItem onClick={redirectPlantillaKinesiologo} button key='Plantilla'>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary={'PlantillaKinesiologo'} />
      </ListItem>
      <ListItem onClick={redirectPlantillaPsicologo} button key='Plantilla'>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary={'PlantillaPsicologo'} />
      </ListItem>
      <ListItem onClick={redirectPlantillaNutricionista} button key='Plantilla'>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary={'PlantillaNutricionista'} />
      </ListItem>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}