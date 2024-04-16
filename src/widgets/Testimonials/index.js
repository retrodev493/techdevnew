import { testimonials } from '@/app/data/TestimonialData'
import CardTest from '@/components/CardTest'
import React from 'react'

const Testimonials = () => {
  return (
<section className='pb-[50px] lg:pb-[60px] 2xl:pb-[96px] bg-white-color'>
    <div className='bg-light-bg overflow-hidden'>
        <div className='max-w-[1389px] m-auto px-[12px]'>
            <div className='flex flex-col 2xl:flex-row py-[50px] md:py-[120px] 2xl:py-[138px] gap-[50px]'>
                <div className='w-full 2xl:w-6/12'>
                   <div>
                    <h4 className='font-roboserif font-medium tracking-2  text-[28px] lg:text-[35px] 2xl:text-[50px] text-center 2xl:text-start leading-tight mb-[10px] xl:mb-[20px] 2xl:mb-[35px]'>{testimonials.title}</h4>
                    <p className='font-inter font-regular text-sm lg:text-base 2xl:text-[20px] leading-tight text-center 2xl:text-start'>{testimonials.description}</p>
                   </div>
                </div>
                <div className='w-full 2xl:w-6/12 flex justify-center 2xl:block   xl:pb-[50px] 2xl:pb-[0]'>
                  <CardTest/>
                </div>
            </div>
        </div>
    </div>
    </section>  
  )
}

export default Testimonials 