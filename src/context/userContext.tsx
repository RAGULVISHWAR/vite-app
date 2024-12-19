import React, { createContext, ReactNode, useState } from "react"
interface userAuth{
    user:string|null;
    setuser:(user:string|null)=>void;
}

export const userContext =createContext<userAuth|undefined>(undefined);
interface provider{
    children:ReactNode;
}
export const UserProvider:React.FC<provider> = ({children}) => {
    const[user,setuser]=useState<string|null>(null);
    return (
      <userContext.Provider value={{user,setuser}}>
         {children}
      </userContext.Provider>
    );
  }
  export const useUserContext = (): userAuth => {
    const context = React.useContext(userContext);
    if (!context) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  };
  