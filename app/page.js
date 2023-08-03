import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Slogen from '@/components/Slogen'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[#0B0E11] text-[#eaecef] h-full'>
      <div className=''>
        <Hero />
        <Slogen/>
        <Services/>
      </div>
    </div>
  )
}
