import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      backgroundColor: "#303440",
    },
  }));
  
  function Copyright() {
    return (
      <Typography variant="body2" color="#aaaaaa" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://orange-heist.netlify.app">
          Orange Hesit
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default function Album() {
    const classes = useStyles();
return(
    <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom color="aaaaaa" >
          Links Rapidos!
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          <Link color="textSecondary" href="https://www.uv.cl">
            Universidad de Valparaiso
          </Link>
        </Typography>{" "}
        <Typography variant="subtitle1" align="center" component="p">
          <Link color="textSecondary" href="../../Home">
            Home
          </Link>
        </Typography>{" "}
        <Typography variant="subtitle1" align="center" component="p">
          <Link color="textSecondary" href="./Login">
            Profesores
          </Link>
          <Copyright></Copyright>
        </Typography>
      </footer>
)};