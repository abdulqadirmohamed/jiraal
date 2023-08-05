import Link from 'next/link'
import React from 'react'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BsBehance} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="w-[70%] mx-auto py-4">
        <div className="grid grid-cols-6 text-light items-center">
          <div>
            <img className='w-[150px]' src="https://tradebrains.in/wp-content/uploads/2022/01/Binance-logo.png" alt="" />
          </div>
          <div className='col-span-4 flex justify-center gap-4 text-center'>
            <Link href="#" className='hover:text-[#FCD535]'>Home</Link>
            <Link href="#" className='hover:text-[#FCD535]'>About</Link>
            <Link href="#" className='hover:text-[#FCD535]'>Services</Link>
            <Link href="#" className='hover:text-[#FCD535]'>Project</Link>
          </div>
          <div className='flex gap-3'>
            <Link className='hover:text-[#FCD535]' href="https://www.facebook.com/jiraal.services"><BiLogoFacebookCircle/></Link>
            <Link className='hover:text-[#FCD535]' href="https://www.facebook.com/jiraal.services"><AiFillInstagram/></Link>
            <Link className='hover:text-[#FCD535]' href="https://www.facebook.com/jiraal.services"><BsBehance/></Link>
          </div>
        </div>
      </div>
      <hr className='text-light/20' />
      <h5 className='text-center text-light/40 text-sm py-3'>© 2023 Binance</h5>
    </div>
  )
}

export default Footer