import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import history from "../../history";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const redirectHome = () => {
  history.push("/Home");
};

const redirectCompo1 = () => {
  history.push("/Grupo3/VistaPrincipal");
};
const redirectCompo2 = () => {
  history.push("/Grupo3/Vista2");
};
const redirectCompo3 = () => {
  history.push("/Grupo3/Inscripción");
};
const redirectCompo4 = () => {
  history.push("/Grupo3/Vista4");
};
const redirectCompo5 = () => {
  history.push("/Grupo3/Administración");
};

export default function SSADrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem onClick={redirectHome} button key={"Home"}>
          <ListItemIcon>
            {" "}
            <HomeIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={redirectCompo1} button key="Talleres">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Talleres"} />
        </ListItem>
        {/*<ListItem onClick={redirectCompo2} button key="Componente2">
          <ListItemIcon>
            <AccessibilityNewIcon />
          </ListItemIcon>
          <ListItemText primary={"Componente2"} />
    </ListItem>*/}
        {/*<ListItem onClick={redirectCompo3} button key="Inscripción">
          <ListItemIcon>
            <AccessibilityNewIcon />
          </ListItemIcon>
    <ListItemText primary={"Inscripción"} />
    </ListItem>*/}
        <ListItem onClick={redirectCompo4} button key="Componente4">
          <ListItemIcon>
            <AccessibilityNewIcon />
          </ListItemIcon>
          <ListItemText primary={"Asistencia"} />
        </ListItem>
        <ListItem onClick={redirectCompo5} button key="Administración">
          <ListItemIcon>
            <AccessibilityNewIcon />
          </ListItemIcon>
          <ListItemText primary={"Administración"} />
  </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
