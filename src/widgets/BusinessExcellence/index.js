import { businessdata } from '@/app/data/Businessdata'
import BusinessCard from '@/components/BusinessCard'
import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'

const BusinessExcellence = () => {
  return (
    <section className='pb-[50px] lg:pb-[70px]  2xl:pb-[104px] relative '>
        <div className='container'>

        <div className='flex flex-col lg:flex-row mb-[30px] lg:mb-[51px]'>

            <div className='w-full lg:w-1/2 mb-[15px] lg:mb-0'>
                <h3 className='font-roboserif font-medium text-[28px] lg:text-[35px] 2xl:text-[48px] text-black-color max-w-[550px] leading-tight'>
                    {businessdata.title}
                </h3>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='mb-[30px] lg:mb-[21px]'>
                    <p className='font-inter font-regular font-sm lg:font-base leading-tight max-w-[585px]'>{businessdata.description}</p>
                </div>
                <div>
                    <Button  outline={'outline-primary-black'} name={businessdata.buttontext}/>
                </div>
            </div>
            
        </div>
        <div className='relative'>
         <BusinessCard/>
        
        </div>
        </div>
        <div className='absolute bottom-[-80px] right-0 z-[9] min-h-[776px]'>
         <Image alt='bg' width="774" height="776"  src='/images/bussiness.svg'/>
         </div>
    </section>
  )
}

export default BusinessExcellence
