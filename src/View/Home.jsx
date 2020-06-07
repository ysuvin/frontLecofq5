import React from 'react';
import logo from '../logo.svg';
import '../css/Home.css';
import Button from '@material-ui/core/Button';
import history from '../history';

function Home() {

  const redirectPag2 = () => 
  {
    history.push('/Pag2');
  }

  return (
    <div className="App">
      <header className="Home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        <Button onClick={redirectPag2} variant="contained" color="secondary">
        Página 2
        </Button>
      </header>
    </div>
  );
}

export default Home;
