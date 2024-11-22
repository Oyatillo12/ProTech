"use client";

import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../page'
import ProductItem from '@/components/ProductItem'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const products = useSelector((state: RootState) => state.products)
    return (
        <div className='px-4 w-[1280px] mx-auto'>
            <button onClick={() => router.push('/')} className='px-6 dark:text-[#F3F5F7] dark:bg-[#1F1E24] py-2 block mb-6 rounded-lg text-[18px] bg-[#E7F0F2]'>Go Back</button>
            <ul className="flex flex-wrap items-center justify-between gap-6">
                {products.length ? products.map((product: Product) => <ProductItem key={product.id} product={product} />) : <li className='text-center text-[30px] mx-auto font-bold'>No Products yet</li>}
            </ul>
        </div>
    )
}

export default page
