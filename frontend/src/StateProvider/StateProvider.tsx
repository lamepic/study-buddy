"use client";

import { createContext, useContext, useState } from "react";

type PropTypes = {
  children: React.ReactNode;
};

const StateProviderContext = createContext<any>(null);

export function StateProvider({ children }: PropTypes) {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  return (
    <StateProviderContext.Provider value={{ selectedTopic, setSelectedTopic }}>
      {children}
    </StateProviderContext.Provider>
  );
}

export const useStateProviderContext = () => useContext(StateProviderContext);
