import React, { useState } from 'react';

const RutinaContext = React.createContext([{}, () => {}]);

const RutinaProvider = (props) => {
  const [rutinaC, setRutinaC] = useState({
    _id: '',
  });
  return (
    <RutinaContext.Provider value={[rutinaC, setRutinaC]}>
      {props.children}
    </RutinaContext.Provider>
  );
}

export { RutinaContext, RutinaProvider };