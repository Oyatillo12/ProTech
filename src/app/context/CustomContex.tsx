"use client";
import { createContext, ReactNode, useState } from "react";

interface ContextType {
    searchValue: string;
    setSearchValue:React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType>({
    searchValue: '',
    setSearchValue: () => {},
    isLoading: false,
    setIsLoading: () => {},
  
});

const CustomContex:React.FC<{children:ReactNode}> = ({children}) => {
    const [searchValue,setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Context.Provider value={{ searchValue ,setSearchValue, isLoading, setIsLoading}}>
      {children}
    </Context.Provider>
  )
}

export default CustomContex
