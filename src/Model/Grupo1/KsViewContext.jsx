import React, { useState } from 'react';

const KsViewContext = React.createContext([{}, () => {}]);

const KsViewProvider = (props) => {
  const [ksViewC, setKsViewC] = useState(0);
  return (
    <KsViewContext.Provider value={[ksViewC, setKsViewC]}>
      {props.children}
    </KsViewContext.Provider>
  );
}

export { KsViewContext, KsViewProvider };