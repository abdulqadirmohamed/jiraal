import React from 'react'
import Link from 'next/link'
import {BiSun} from 'react-icons/bi'
import {MdOutlineLanguage} from 'react-icons/md'

const Header = () => {
  return (
    <nav className='bg-[#181A20] p-2'>
        <div className='w-[70%] mx-auto flex justify-between items-center'>
            <img className='w-[150px]' src="https://tradebrains.in/wp-content/uploads/2022/01/Binance-logo.png" alt="" />
            <div className='text-light font-light flex gap-4'>
                <Link href="#" className='hover:text-[#FCD535]'>Home</Link>
                <Link href="#" className='hover:text-[#FCD535]'>About</Link>
                <Link href="#" className='hover:text-[#FCD535]'>Services</Link>
                <Link href="#" className='hover:text-[#FCD535]'>Project</Link>
            </div>
            <div className='text-light flex gap-3 items-center'>
              <BiSun size={20} className='cursor-pointer hover:text-orange'/>
              <MdOutlineLanguage size={20} className='cursor-pointer hover:text-orange'/>
            </div>
        </div>
    </nav>
  )
}

export default Header