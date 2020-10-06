import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGab from "../../Model/Grupo3/Assets/FotosDeportes/Gabriel.png"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles1 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function SimpleCard() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          18/07/2020
        </Typography>
        <div className={classes1.root}>
        <Avatar alt="Gabriel" src= {AvatarGab} />
        </div>
        <Typography variant="h5" component="h2">
          Gabriel Astudillo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Esgrima
        </Typography>
        <Typography variant="body2" component="p">
          Recordar mañana practicas para el próximo campeonato.
        </Typography>
      </CardContent>
    </Card>
  );
}
