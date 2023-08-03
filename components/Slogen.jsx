import React from 'react'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const Slogen = () => {
  const data = [
    { id: 1, title: 'Connect accounts', desc: 'Integrate Facebook & Google Ads accounts easily' },
    { id: 2, title: 'Optimize & Analysis', desc: 'Integrate Facebook & Google Ads accounts easily' },
    { id: 3, title: 'Maximize Your Results', desc: 'Integrate Facebook & Google Ads accounts easily' },
  ]
  return (
    <div className='w-[70%] mx-auto grid grid-cols-3 my-10 gap-6'>
        {data.map((slog) => (
          <div className='bg-[#181A20] text-[#eaecef] flex items-stretch gap-4 py-6 px-10'>
            <div >
              <HiOutlineDesktopComputer size={20} />
            </div>
            <div>
              <h1 className='text-lg'>{slog.title}</h1>
              <p className='text-sm'>{slog.desc}</p>
            </div>
          </div>

        ))}
      </div>
  )
}

export default Slogen