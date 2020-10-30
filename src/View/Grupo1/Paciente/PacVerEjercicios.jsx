import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {GetEjercicios} from '../../../Model/Grupo1/EjerciciosController';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player/youtube'
import '../../../css/Grupo1/G1Landing.css';
import history from '../../../history';


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



export default function HorizontalLabelPositionBelowStepper() {

  //Query que recupera las fechas
  const [ejercicios, setEjercicios] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [steps, setSteps] = useState(null);

  const fetchData = async () => {
    const query = await GetEjercicios();
    return query;
    
  }

  const getSteps = (query) => {
      var texto = [];
      var i = 0;
      for (i = 0; i < query.length; i++) {
          texto[i] = query[i].nombre ;
      }  
      return texto;
}

  useEffect(() => {
    fetchData().then((query) => {
      setEjercicios(query);
      console.log(query);
      setSteps(getSteps(query));
      setIsLoading(false); 
    });
  }, []);

  ////

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  

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
    <div className="g1_wrapper">
      {isLoading ? 
      (
        <div>Loading ...</div>
      ) : 
      ( 
      <div className="g1_body_alt">
        
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
              <h4>Descripción:</h4>
              {ejercicios[activeStep].desc}

            <h4>Video del ejercicio:</h4>
            <div className='player-wrapper'>
                <ReactPlayer 
                    className="g1-react-player" 
                    url= {ejercicios[activeStep].vidLink} 
                    key={ejercicios[activeStep].vidLink }
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
    )}
  </div>
  );
}