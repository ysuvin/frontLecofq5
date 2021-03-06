import React, { useState } from 'react';

const PacienteContext = React.createContext([{}, () => {}]);

const PacienteProvider = (props) => {
  const [pacienteC, setPacienteC] = useState({
    rut: '',
  });
  return (
    <PacienteContext.Provider value={[pacienteC, setPacienteC]}>
      {props.children}
    </PacienteContext.Provider>
  );
}

export { PacienteContext, PacienteProvider };