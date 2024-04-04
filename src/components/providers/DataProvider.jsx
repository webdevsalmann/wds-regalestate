import React, { createContext, useState, useContext, useEffect } from 'react';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {

    }, [])

    const contextValues = { 
        data,
    }
    return (
        <DataContext.Provider value={contextValues}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to consume the context
export const useData = () => useContext(DataContext);
