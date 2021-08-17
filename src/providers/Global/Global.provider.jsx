import React, { useState, useContext } from 'react';

export const GlobalContext = React.createContext(null);

export const useGlobal = () => {
    const context = useContext(GlobalContext);

    if(!context) {
        throw new Error('Global provider not available')
    }

    return context;
}


export const GlobalProvider = (props) => { 

    const [ darkTheme, setDarkTheme] = useState(false);
    const [query, setQuery] = useState('wizeline');
    
    return (
        <GlobalContext.Provider value={{query, darkTheme, setQuery, setDarkTheme}}>
            {props.children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;