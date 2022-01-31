import React, { createContext, useState } from 'react';

export const AccordionContext = createContext({
  expanded: false,
  setExpanded: () => {},
});

const AccordionWrapper = (props) => {
  const [expanded, setExpanded] = useState('panel_1');

  return (
    <AccordionContext.Provider
      value={{
        expanded,
        setExpanded,
      }}
    >
      <div className='accordion-wrapper'>{props.children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionWrapper;
