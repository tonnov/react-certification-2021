import React, { useContext, useReducer } from 'react';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY, QUERY_DATA, THEME_STATUS, SESSION_STORAGE_DATA } from '../../utils/constants';

const GlobalContext = React.createContext(null);

export const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Global provider not available');
  }

  return context;
};

const getSessionData = () => {
  const lastAuthState = storage.get(AUTH_STORAGE_KEY);
  const userData = lastAuthState ? storage.get(SESSION_STORAGE_DATA) : {};
  return userData;
}

const getUserId = () => {
  const id = storage.get(SESSION_STORAGE_DATA)?.id;
  return id;
}

const USER_FAVS = `favs_user_${getUserId()}`;

const getUserFavorites = () => {
  const lastAuthState = storage.get(AUTH_STORAGE_KEY);
  if (Boolean(lastAuthState)) {
    return storage.get(USER_FAVS) || [];
  }
  return [];
}

const addUserFavorites = (favorites, video) => {
  const newFavorites = [...favorites, video]
  storage.set(USER_FAVS, newFavorites);
  return newFavorites;
}

const remUserFavorites = (favorites, videoId) => {
  const newFavorites = favorites.filter((fav) => fav.id !== videoId)
  storage.set(USER_FAVS, newFavorites);
  return newFavorites;
}

const initialState = {
  query:  storage.get(QUERY_DATA)?.storedQuery || 'wizeline',
  darkTheme: storage.get(THEME_STATUS) || false,
  sessionData: getSessionData(),
  userFavorites: getUserFavorites()
};

const ACTIONS = {
  UPDATE_SEARCH_QUERY: 'update_search_query',
  TOGGLE_THEME: 'toggle_theme',
  UPDATE_SESSION_DATA: 'update_session_data',
  FAVS_ADD: 'add_to_favorites',
  FAVS_REMOVE: 'remove_from_favorites',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case ACTIONS.TOGGLE_THEME:
      storage.set(THEME_STATUS, !state.darkTheme);
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    case ACTIONS.UPDATE_SESSION_DATA:
      return {
        ...state,
        sessionData: action.payload,
      };
    case ACTIONS.FAVS_ADD:
      return {
        ...state,
        userFavorites: addUserFavorites(state.userFavorites, action.payload)
      }
    case ACTIONS.FAVS_REMOVE:
      return {
        ...state,
        userFavorites: remUserFavorites(state.userFavorites, action.payload)
      }
    default:
      return state;
  }
};

export const GlobalProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
