"use client";
import { Context } from '@/app/context/CustomContex'
import CartIcon from '@/app/images/cart.svg'
import DarkIcon from '@/app/images/moon.png'
import SearchIcon from '@/app/images/search.svg'
import Image from 'next/image'
import React, { useContext } from 'react'

const Header: React.FC = () => {
  const { searchValue, setSearchValue,setIsLoading} = useContext(Context)

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setIsLoading(true)
    setTimeout(() => {
      setSearchValue(e.target.value.toLowerCase());
      setIsLoading(false)
    }, 500)
    console.log(e.target.value);
    
  }
  return (
    <header className='flex items-center p-4 w-[1280px] mx-auto mb-10 justify-between'>
      <div className='flex items-center gap-x-3 w-[300px] rounded-[30px] bg-[#F3F5F7] p-3'>
        <Image src={SearchIcon} alt='star icon' width={20} height={20} />
        <input onChange={handleSearch} className='outline-none bg-transparent w-[85%]' type="text" placeholder='Search' />
      </div>
      <div className='flex items-center space-x-6'>
        <button className='w-[40px] h-[40px] rounded-full bg-[#F3F5F7] flex items-center hover:bg-[#00000020] duration-300 justify-center'><Image src={DarkIcon} alt='Moon icon' width={24} height={24} /></button>
        <button className='w-[40px] h-[40px] relative rounded-full bg-[#F3F5F7] flex items-center hover:bg-[#00000020] duration-300 justify-center'><Image src={CartIcon} alt='Cart icon' width={24} height={24} /><span className='w-[25px] h-[25px] rounded-full bg-red-500 absolute top-[-15px] text-white right-[-10px]'>0</span></button>
      </div>
    </header>
  )
}

export default Header
