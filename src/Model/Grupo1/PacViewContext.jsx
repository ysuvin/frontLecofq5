import React, { useState } from 'react';

const PacViewContext = React.createContext([{}, () => {}]);

const PacViewProvider = (props) => {
  const [pacViewC, setPacViewC] = useState(0);
  return (
    <PacViewContext.Provider value={[pacViewC, setPacViewC]}>
      {props.children}
    </PacViewContext.Provider>
  );
}

export { PacViewContext, PacViewProvider };