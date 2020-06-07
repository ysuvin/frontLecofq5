import React from 'react';
import logo from '../logo.svg';
import '../css/Pag2.css';
import Button from '@material-ui/core/Button';
import history from '../history';

function Pag2() {

  const redirectHome = () => 
  {
    history.push('/Home');
  }

  return (
    <div className="App">
      <header className="Pag2-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página 2
        </p>
        <Button onClick={redirectHome} variant="contained" color="primary">
        Home
        </Button>
      </header>
    </div>
  );
}

export default Pag2;
