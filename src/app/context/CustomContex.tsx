"use client";
import { createContext, ReactNode, useState } from "react";
import { Product } from "../page";

interface ContextType {
    searchValue: string;
    setSearchValue:React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const Context = createContext<ContextType>({
    searchValue: '',
    setSearchValue: () => {},
    isLoading: false,
    setIsLoading: () => {},
    products: [],
    setProducts: () => {},
});

const CustomContex:React.FC<{children:ReactNode}> = ({children}) => {
  const [products, setProducts] = useState<Product[]>([]);

    const [searchValue,setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Context.Provider value={{ searchValue ,setSearchValue, isLoading, setIsLoading, products, setProducts}}>
      {children}
    </Context.Provider>
  )
}

export default CustomContex
