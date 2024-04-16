"use client"
import { sapdata } from '@/app/data/SapMinibanner'
import Button from '@/components/Button';
import React, { useEffect } from 'react'
import gsap from 'gsap';


const SapMiniBanner = () => {

  // useEffect(()=>{

  // })
  return (
    <section className='pb-[50px] lg:pb-[70px] 2xl:pb-[104px] bg-blue-bg'>
     
       <div className='bg-blue-gradient w-full'>
        <div className='container'>
            <div className='flex flex-col xl:flex-row py-[30px] lg:py-[40px] 2xl:py-[101px]'>
                <div className='w-full xl:w-1/2 mb-[15px] xl:mb-0'>
                    <h6 className='text-white-color leading-tight font-inter text-[24px] md:text-[35px] 2xl:text-[48px] font-light text-center xl:text-start'>{sapdata.title} <span className='font-medium'>{sapdata.strong_ttl}</span></h6>
                </div>
                <div className='w-full xl:w-1/2'>
                   <div className='flex flex-col justify-between h-full'>
                   <p className='text-white-color text-sm xl:text-base font-inter font-regular leading-snug max-w-[541px] mt-3 mb-[25px] 2xl:mb-0 mx-auto xl:mx-0 text-center xl:text-start'>{sapdata.desc}</p>
                    <div className='mx-auto xl:mx-0'>
                    <Button outline={'outline-white'} name={sapdata.btn_content}/>
                    </div>
                   </div>
    
                </div>
            </div>
        </div>  
       </div>
    </section>  
  )
}

export default SapMiniBanner