import { createContext, useState,useEffect } from "react";
import axios from "axios";


export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState ([]);
    useEffect(() =>{
        axios("dataProducts.js").then((res) => setData(res.data));
    }, []);

    return(
        <DataContext.Provider value={{data}}> {children} </DataContext.Provider>
    );
};
