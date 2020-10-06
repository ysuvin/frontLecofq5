import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarRod from "../../Model/Grupo3/Assets/FotosDeportes/Rodrigo.png"

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
          20/07/2020
        </Typography>
        <div className={classes1.root}>
        <Avatar alt="Rodrigo" src= {AvatarRod} />
        </div>
        <Typography variant="h5" component="h2">
          Rodrigo Oliveros
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Tenis
        </Typography>
        <Typography variant="body2" component="p">
          Mañana no hay tenis, por favor difundan.
        </Typography>
      </CardContent>
    </Card>
  );
}
