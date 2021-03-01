import { useContext, createContext, useState } from 'react';

export const ClicksContext = createContext();

export const useClicks = () => {
    return useContext(ClicksContext);
}

export const ClicksContextProvider = ({children}) => {
    const [clicks, setClicks] = useState([]);
    return <ClicksContext.Provider value={{clicks, setClicks}}>{children}</ClicksContext.Provider>;
}