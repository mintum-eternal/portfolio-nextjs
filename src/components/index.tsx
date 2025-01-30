'use client'
import React, { createContext } from "react";

const ComponentContext = createContext({});
function ComponentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ComponentContext.Provider value={{}}>
      {children}
    </ComponentContext.Provider>
  );
}

export default ComponentProvider;
