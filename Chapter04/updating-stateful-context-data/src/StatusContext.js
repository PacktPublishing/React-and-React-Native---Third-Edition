import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export function StatusProvider({ children }) {
  const value = useState("set a status");

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}
