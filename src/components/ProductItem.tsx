"use client";

import { ShppingIcon, StarIcon } from '../app/images/icon';
import { Product } from '@/app/page';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductItem:React.FC<{product:Product}> = ({product}) => {
  const router = useRouter();

    return (
        <li onClick={() => router.push(`${product.id}`)} className="w-[350px] hover:scale-105 p-2 bg-[#F3F5F7] cursor-pointer duration-300 rounded-lg relative  shadow-xl" key={product.id}>
            <Image className="w-full object-contain bg-white h-[230px] rounded-lg" width={350} height={230} src={product.image} alt={product.title} />
            <div className="p-4 mb-4">
                <h3 className="text-[18px] mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-[16px]">Price: <strong className="text-[#FFC831]">${product.price}</strong></p>
                <p className="text-[16px] flex items-center space-x-2"><StarIcon /> {product.rating.rate}</p>
            </div>
            <button className="absolute bottom-1 right-1 w-[40px] h-[40px] rounded-full bg-white hover:opacity-70 duration-300 flex items-center justify-center"><ShppingIcon /> </button>
        </li>
    )
}

export default ProductItem
