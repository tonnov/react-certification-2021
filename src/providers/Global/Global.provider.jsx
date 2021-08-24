import React, { useContext, useReducer } from 'react';

export const GlobalContext = React.createContext(null);

export const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Global provider not available');
  }

  return context;
};

const initialState = {
  query: 'wizeline',
  darkTheme: false,
};

const ACTIONS = {
  UPDATE_SEARCH_QUERY: 'update_search_query',
  TOGGLE_THEME: 'toggle_theme',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('GlobalProvider called!')

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
