"use client";

import { addProduct } from '@/store/ShoppingSlice';
import ShppingIcon from '../app/images/shopping.svg';
import StarIcon from '../app/images/star.png';
import { Product } from '@/app/page';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();

    return (
        <li className="w-[350px] hover:scale-105 p-2 bg-[#F3F5F7] dark:bg-[#1F1E24] dark:text-[#F3F5F7] cursor-pointer duration-300 rounded-lg relative  shadow-xl" key={product.id}>
            <img className="w-full object-contain bg-white h-[230px] rounded-lg" width={350} height={230} src={product.image} alt={product.title} />
            <div className="px-4">
                <h3 className="text-[18px] mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-[16px]">Price: <strong className="text-[#FFC831]">${product.price}</strong></p>
                <p className="text-[16px] flex items-center space-x-2"><Image src={StarIcon} alt='star icon' width={18} height={18} />  {product.rating.rate}</p>
            </div>
            <div className='flex items-center justify-end space-x-4'>
                <button onClick={() => router.push(`/${product.id}`)} className='px-4 py-2 bg-white  dark:bg-[#00000033] rounded-lg hover:opacity-70 duration-300'>More</button>
                <button onClick={() => dispatch(addProduct(product))} className="w-[40px] h-[40px] rounded-full dark:bg-[#00000033] bg-white hover:opacity-70 duration-300 flex items-center justify-center"><Image src={ShppingIcon} alt='shopping icon' width={20} height={20} /></button>
            </div>
        </li>
    )
}

export default ProductItem
