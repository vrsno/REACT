// src/context/DataProvider.js
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { DataContext } from "./DataContext.jsx";

export function DataProvider({ children }) {
  const [query, setQuery] = useState("superman");

  const { isLoading, error, data } = useFetch(`&s=${query}`);

  console.log("Current query:", query);

  return (
    <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
      {children}
    </DataContext.Provider>
  );
}
