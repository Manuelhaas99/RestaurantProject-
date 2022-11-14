import React from 'react';


export const initalContext = {
  items: [],
  ordenes: [],
  updateItems: () => {},
  updateOrdenes: () => {}
};

export const Context = React.createContext(initalContext);