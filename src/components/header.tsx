import { CartIcon, DarkIcon, SearchIcon } from '@/app/images/icon'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='flex items-center p-4 w-[1280px] mx-auto mb-10 justify-between'>
      <div className='flex items-center gap-x-3 w-[300px] rounded-[30px] bg-[#F3F5F7] p-3'>
        <SearchIcon />
        <input className='outline-none bg-transparent w-[85%]' type="text" placeholder='Search' />
      </div>
      <div className='flex items-center space-x-6'>
        <button className='w-[40px] h-[40px] rounded-full bg-[#F3F5F7] flex items-center hover:bg-[#00000020] duration-300 justify-center'><DarkIcon/> </button>
        <button className='w-[40px] h-[40px] relative rounded-full bg-[#F3F5F7] flex items-center hover:bg-[#00000020] duration-300 justify-center'><CartIcon /> <span className='w-[25px] h-[25px] rounded-full bg-red-500 absolute top-[-15px] text-white right-[-10px]'>0</span></button>
      </div>
    </header>
  )
}

export default Header
