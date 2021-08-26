import React, { useContext, useReducer } from 'react';
// import { storage } from '../../utils/storage';

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
  sessioData: {}
};

const ACTIONS = {
  UPDATE_SEARCH_QUERY: 'update_search_query',
  TOGGLE_THEME: 'toggle_theme',
  UPDATE_SESSION_DATA: 'update_session_data'
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
    case ACTIONS.UPDATE_SESSION_DATA:
      return {
        ...state,
        sessionData: action.payload
      }
    default:
      return state;
  }
};

export const GlobalProvider = (props) => {
  
  // console.log('GlobalProvider called!')
  
  // useEffect(() => {
  //   const stored = storage.get('storedData');
  //   const { storedQuery } = stored;
  //   console.log(storedQuery.length, initialState.query)
  //   if (storedQuery?.length > 0 ) initialState.query = storedQuery;
  // }, [])

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
