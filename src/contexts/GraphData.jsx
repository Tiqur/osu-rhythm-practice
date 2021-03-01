import { useContext, createContext, useState } from 'react';

export const GraphDataContext = createContext();

export const useGraphData = () => {
    return useContext(GraphDataContext);
}

export const GraphContextProvider = ({children}) => {
    const [graphData, setGraphData] = useState({});
    return <GraphDataContext.Provider value={{graphData, setGraphData}}>{children}</GraphDataContext.Provider>;
}