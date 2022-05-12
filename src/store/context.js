import React, { useState, useContext, useReducer } from 'react';

import { foods, notificacoes } from '../data/data';
import reducer from './reducers';

const initialState = {
  foods: foods,
  notifications: notificacoes,
  cart: []
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dados, dispatch] = useReducer(reducer, initialState);
  const [category, setCategory] = useState('todos');
  const [termo, setTermo] = useState('');

  const { foods, notifications, cart } = dados;

  return (
    <AppContext.Provider
      value={{ foods, notifications, cart, category, setCategory, dispatch, termo, setTermo }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
