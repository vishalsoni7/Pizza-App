import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const PizzaContext = createContext();

export const Pizza = ({ children }) => {
  const [data, setData] = useState([]); //fetching
  const [pizzaInCart, setPizzaInCart] = useState([]); // cart
  const [dataAsSearch, setdataAsSearch] = useState([]); // for search

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/menu");
      if (response.status === 200) {
        setData(response.data.menu);
        setdataAsSearch(response.data.menu);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const values = {
    data,
    pizzaInCart,
    setPizzaInCart,
    dataAsSearch,
    setdataAsSearch
  };
  return (
    <div>
      <PizzaContext.Provider value={values}> {children} </PizzaContext.Provider>{" "}
    </div>
  );
};
