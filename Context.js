import React from 'react';


export const initalContext = {
  items: [],
  updateItems: () => {}
};

export const Context = React.createContext(initalContext);