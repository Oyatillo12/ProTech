"use client";
import { Context } from '@/app/context/CustomContex'
import CartIcon from '@/app/images/cart.svg'
import DarkIcon from '@/app/images/moon.png'
import SearchIcon from '@/app/images/search.svg'
import { Product } from '@/app/page';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

const Header: React.FC = () => {
  const { products} = useContext(Context);
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredProducts =  products.filter((p: Product) => p.title.toLowerCase().includes(searchValue));
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setIsLoading(true)
    setTimeout(() => {
      setSearchValue(e.target.value.toLowerCase());
      setIsLoading(false)
    }, 500)
  };
  function handleClickToSingle(id:number):void {
    router.push(`/${id}`)
    setSearchValue('');
  }

  return (
    <header className='flex items-center p-4 w-[1280px] mx-auto mb-10 justify-between'>
      <div className={`flex items-center gap-x-3 w-[400px] ${searchValue || isLoading ? "rounded-t-[30px]" : "rounded-[30px]"} duration-300 bg-[#F3F5F7] p-3 relative`}>
        <Image src={SearchIcon} alt='star icon' width={20} height={20} />
        <input onChange={handleSearch} className='outline-none bg-transparent w-[85%]' type="text" placeholder='Search'/>
        {searchValue.trim() || isLoading  ?
          <ul className={`p-2 bg-[#F3F5F7] w-full absolute  ${searchValue || isLoading ? "rounded-b-[30px]" : "rounded-[30px]"} top-10 duration-300 left-0 z-50 h-[200px] overflow-y-auto `}>
            {isLoading ? <li className=' mx-auto mt-10 text-center'><span className="loader"></span></li> : filteredProducts.length ? filteredProducts.map((item:Product) => (
              <li key={item.id} onClick={() => handleClickToSingle(item.id)} className='text-[18px] cursor-pointer hover:bg-[#00000030] rounded-lg duration-300 px-4 py-4 border-b-[1px] border-gray-200'>{item.title}</li>
            )) : <li className='text-center mx-auto text-[18px] font-bold mt-4'>No products</li>}
          </ul>
          : null}
      </div>
      <div className='flex items-center space-x-6'>
        <button className='w-[40px] h-[40px] rounded-full bg-[#F3F5F7] flex items-center hover:bg-[#00000020] duration-300 justify-center'><Image src={DarkIcon} alt='Moon icon' width={24} height={24} /></button>
        <button className='w-[40px] h-[40px] relative rounded-full bg-[#F3F5F7] flex items-center hover:bg-[#00000020] duration-300 justify-center'><Image src={CartIcon} alt='Cart icon' width={24} height={24} /><span className='w-[25px] h-[25px] rounded-full bg-red-500 absolute top-[-15px] text-white right-[-10px]'>0</span></button>
      </div>
    </header>
  )
}

export default Header
