import React from 'react';
import Button from '@material-ui/core/Button';
import history from '../../history';


export default function InicioG5(){

    
const redirectGrupo5 = () => {
    { history.push('/Grupo5/Plantillapaciente') }
}
return(
<Button onClick={redirectGrupo5} variant="contained" color = "primary">Atras</Button>
);
}