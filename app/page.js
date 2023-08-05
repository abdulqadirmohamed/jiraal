import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SliderPage from '@/components/SliderPage'
import Slogen from '@/components/Slogen'
import WhyChooseUs from '@/components/WhyChooseUs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray text-[#eaecef] h-full'>
      <div className=''>
        <Hero />
        <Slogen/>
        <SliderPage/>
        <Services/>
        <WhyChooseUs/>
      </div>
    </div>
  )
}
