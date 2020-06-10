import React from 'react';
import '../../css/Grupo1/Landing.css';
import Button from '@material-ui/core/Button';
import history from '../../history';

function Landing() {

  const redirectHome = () => 
  {
    history.push('/Home');
  }

  return (
      <div className="Body">
        <p>
          Vistas de Grupo 1
        </p>
        <Button onClick={redirectHome} variant="contained" color="primary">
        Home
        </Button>
      </div>
  );
}

export default Landing;
