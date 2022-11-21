import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sink, setSink] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faucet, setFaucet] = useState([]);
  const [accessories, setAccessoires] = useState([]);

  const fetchData = () => {
    const SinkApi = "http://localhost:1337/api/Sinks?populate=*";
    const CategoriesApi = "http://localhost:1337/api/categories?populate=*";
    const FaucetApi = "http://localhost:1337/api/faucets?populate=*";
    const AccessoriesApi = "http://localhost:1337/api/accessories?populate=*";

    const getSinkData = axios.get(SinkApi);
    const getCategoriesData = axios.get(CategoriesApi);
    const getFaucetData = axios.get(FaucetApi);
    const getAccessoriesData = axios.get(AccessoriesApi);
   axios.all([getSinkData,getCategoriesData,getFaucetData,getAccessoriesData]).then(
    axios.spread((...allData)=>{
        const allSinkData = allData[0].data.data;
        const allCategoriesData = allData[1].data.data;
        const allFaucetData = allData[2].data.data;
        const allAccessoriesData = allData[3].data.data;
        setSink(allSinkData);
        setCategories(allCategoriesData)
        setFaucet(allFaucetData)
        setAccessoires(allAccessoriesData)
        
    })
   )
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ sink, categories, faucet, accessories }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
