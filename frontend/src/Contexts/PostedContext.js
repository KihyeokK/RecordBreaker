import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const PostProvider = ({ children }) => {
  const [posted, setPosted] = useState('Initial Data');

  return (
    <DataContext.Provider value={{ posted, setPosted }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);