/* eslint-disable react/prop-types */
import { useState, useContext, useEffect, createContext } from "react";
import fetchSalahTimes from "../data/api.js";
// Create Context
const SalahContext = createContext();

// Custom Hook
export const useSalahContext = () => useContext(SalahContext);

// Create Provider Component

const SalahProvider = ({ children }) => {
  const [salahTimes, setSalahTimes] = useState([]);
  const [city, setCity] = useState(["Cairo"]);

  useEffect(() => {
    fetchSalahTimes(city)
      .then((data) => {
        setSalahTimes(data.data.timings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <SalahContext.Provider value={{ city, setCity, salahTimes, setSalahTimes }}>
      {children}
    </SalahContext.Provider>
  );
};

export default SalahProvider;
