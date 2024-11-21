"use client";
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { Product } from '../page';
import axios from 'axios';
import Image from 'next/image';
import { StarIcon } from '../images/icon';

const SinglePage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product>();
  const router = useRouter();


  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${slug}`);
        setProduct(response.data);
      }
      catch (error) {
        console.log('Error:', error);
      }
    }
    fetchData();
  }, [slug])

  return (
    <div className='w-[1280px] mx-auto'>
      <button onClick={() => router.push('/')} className='px-6 py-2 block mb-3 rounded-lg text-[18px] bg-[#E7F0F2]'>Go Back</button>
      {product ?
        <div className='flex items-center space-x-10'>
          <Image className='w-[600px] h-[460px] object-contain' src={product.image} alt='product img' width={467} height={314} />
          <div className='w-[500px]'>
            <h2 className='font-bold text-[24px] mb-3'>{product.title}</h2>
            <p className='text-[18px] mb-2'>Category: {product.category}</p>
            <p className='text-[18px]'>{product.description}</p>
            <p className='text-[18px] font-bold mt-3'>the remainder: <strong className="text-[#FFC831]">${product.rating.count}</strong></p>
            <div className='flex items-center space-x-4 mt-2'>
              <p className="text-[18px] font-bold">Price: <strong className="text-[#FFC831]">${product.price}</strong></p>
              <p className="text-[18px] font-bold flex items-center space-x-2"><StarIcon /> {product.rating.rate}</p>
              <button className="bg-[#FFC831] rounded-lg hover:opacity-70 duration-300 text-white text-[18px] px-4 p-2">Buy</button>
            </div>
          </div>
        </div> : <span className="loader absolute inset-0 m-auto scale-150"></span>}
    </div>
  )
}

export default SinglePage
