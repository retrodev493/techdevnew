
import { Aidata } from '@/app/data/Aidata'
import AiSwiperCards from '@/components/AiSwiperCards'
import React from 'react'

const AiPowered = () => {


  return (
    <section className='pb-[50px] lg:pb-[70px] 2xl:pb-[89px] overflow-x-hidden'>
        <div className='container'>
            <div className='mb-[48px]'>
                <h3 className='font-roboserif text-[28px] lg:text-[35px] 2xl:text-[48px] font-medium max-w-[625px] leading-tight'>{Aidata.title}</h3>
            </div>
            <AiSwiperCards/>
        </div>
    </section>
  )
}

export default AiPowered