import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Ejercicios from '../../../Model/Grupo1/Ejercicios';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/youtube'
import '../../../css/Grupo1/G1Landing.css';
import history from '../../../history';

const ejercicios = Ejercicios.data;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
    var texto = [];
    var i = 0;
    for (i = 0; i < ejercicios.length; i++) {
        texto[i] = ejercicios[i].nombre ;
      }  
  return texto;
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const redirectFechas = () => 
{
    history.push('/Grupo1/PacVerFechas');
}

  return (
    <div className="wrapper">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Todos los ejercicios completados!
                <p><Button variant="contained" color="primary" onClick={redirectFechas}>
              Regresar</Button></p></Typography>
            <Button onClick={handleReset}>Reiniciar</Button>
          </div>
        ) : (
          <div>
            <div>
            <Grid container spacing={0} 
              direction="column"
              justify="center"
              alignItems="center">
            <Grid item xs={12}>
                {ejercicios[activeStep].desc}
            </Grid>
            </Grid>
            <div className='player-wrapper'>
                <ReactPlayer 
                    className="react-player" 
                    url= {ejercicios[activeStep].vidlink} 
                    key={ejercicios[activeStep].vidlink }
                    width='100%'
                    height='100%'
                    />
            </div>
        </div>

            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Atrás
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}