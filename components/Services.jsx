import React from 'react'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const Services = () => {
    const data = [
        { id: 1, title: 'Connect accounts', desc: 'Integrate Facebook & Google Ads accounts easily' },
        { id: 2, title: 'Optimize & Analysis', desc: 'Integrate Facebook & Google Ads accounts easily' },
        { id: 3, title: 'Maximize Your Results', desc: 'Integrate Facebook & Google Ads accounts easily' },
        { id: 3, title: 'Maximize Your Results', desc: 'Integrate Facebook & Google Ads accounts easily' },
        { id: 3, title: 'Maximize Your Results', desc: 'Integrate Facebook & Google Ads accounts easily' },
        { id: 3, title: 'Maximize Your Results', desc: 'Integrate Facebook & Google Ads accounts easily' },
    ]
    return (
        <div className='my-6 bg-[#181A20] h-full'>
            <div className='w-[70%] mx-auto py-14'>
                <h1 className='text-2xl font-semibold'>Our Services</h1>
                <p>Our platform is trusted by millions worldwide, and features an unmatched portfolio of financial product offerings.</p>
                <div className='grid grid-cols-3 gap-6 mt-10'>
                    {data.map((slog) => (
                        <div className='bg-[#0B0E11] rounded-lgg p-10'>
                            <span className='text-[#FCD535]'>
                                <HiOutlineDesktopComputer size={40} />
                            </span>
                            <div>
                                <h1 className='my-2 text-2xl'>Binance Exchange</h1>
                                <p>Binance Exchange is the largest crypto exchange by trade volume.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Services