"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";
import { Context } from "./context/CustomContex";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  }
}
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { searchValue, isLoading} = useContext(Context)
  const searchedProducts = searchValue ? products.filter((p: Product) => p.title.toLowerCase().includes(searchValue)) : products


  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setProducts(response.data);
      }
      catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="px-4 w-[1280px] mx-auto">
      <ul className="flex flex-wrap items-center justify-between gap-6">
        {isLoading ? <li><span className="loader absolute inset-0 m-auto scale-150"></span></li> : searchedProducts.length ? searchedProducts.map((product: Product) => <ProductItem key={product.id} product={product}/>) : <li className="text-center mx-auto text-[25px] font-semibold">No Products</li>}
      </ul>
    </div>
  );
}
