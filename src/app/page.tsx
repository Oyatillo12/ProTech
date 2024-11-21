"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShppingIcon, StarIcon } from "./images/icon";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
        {products.length ? products.map((product: Product) => (
          <li onClick={() => router.push(`${product.id}`)} className="w-[350px] hover:scale-105 p-2 bg-[#F3F5F7] cursor-pointer duration-300 rounded-lg relative  shadow-xl" key={product.id}>
            <Image className="w-full object-contain bg-white h-[230px] rounded-lg" width={350} height={230} src={product.image} alt={product.title} />
            <div className="p-4 mb-4">
              <h3 className="text-[18px] mb-1 line-clamp-1">{product.title}</h3>
              <p className="text-[16px]">Price: <strong className="text-[#FFC831]">${product.price}</strong></p>
              <p className="text-[16px] flex items-center space-x-2"><StarIcon/> {product.rating.rate}</p>
            </div>
            <button className="absolute bottom-1 right-1 w-[40px] h-[40px] rounded-full bg-white hover:opacity-70 duration-300 flex items-center justify-center"><ShppingIcon/> </button>
          </li>
        )) : <li><span className="loader absolute inset-0 m-auto scale-150"></span></li>}
      </ul>
    </div>
  );
}
