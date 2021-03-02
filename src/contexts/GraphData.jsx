import { useContext, createContext, useState } from 'react';

export const GraphDataContext = createContext();

export const useGraphData = () => {
    return useContext(GraphDataContext);
}

export const GraphContextProvider = ({children}) => {

    const data = {
        startTime: Date.now(),
        clicks: [],
        avg_accuracy: [],
        avg_unstable_rate: [],
        avg_bpm: []
    };

    const [graphData, setGraphData] = useState(data);

    return <GraphDataContext.Provider value={{graphData, setGraphData}}>{children}</GraphDataContext.Provider>;
}