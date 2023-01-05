import { createContext } from "react";
import { iUserProviderValue, iUserProviderProps } from "./types";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
