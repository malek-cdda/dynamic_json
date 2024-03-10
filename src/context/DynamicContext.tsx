"use client";
import React, { createContext } from "react";

export const ContextProvider = createContext({});

const DynamicContext = ({ children }: any) => {
  const value = {
    name: "Dynamic Context",
  };
  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default DynamicContext;
