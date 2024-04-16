"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const MiniBanner = () => {

 useEffect(()=>{
  const rotateImg = document.querySelector('.rotate-img');
  gsap.set(rotateImg,{
    scale:2,
    rotate:360,
  })
  gsap.to(rotateImg,{
  scale:1,
  rotate:0,
  duration:1,
  scrollTrigger:{
    trigger:rotateImg,
    top:"top bottom",
    end:"top top",
    scrub:2,
  }
})

 },[]);
  
  return (
    <section className='pb-[50px] xl:pb-[98px]'>
      <div className='bg-medium-blue'>
        <div className='container'>
            <div className='relative'>
            <div className='overflow-hidden '>
                <div className='max-w-[820px] w-full z-[-1] m-auto' >
                <figure className='relative pb-[70%] lg:pb-[76%] '>
                <Image className='rotate-img opacity-[0.7]' alt='bg' fill src='/images/Vector.svg'/>
                </figure>
                </div>  
            </div>
            <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center animatesap'>
            <h6 className='font-inter text-dark-blue font-medium text-[18px] 2xl:text-[24px] mb-[24px] '>#techdev</h6>
            <p className='font-inter m-auto font-light text-[20px] md:text-[24px] lg:text-[30px] 2xl:text-[48px] max-w-[1100px] text-white-color'>
            Top SAP consultant,<span className='font-medium font-inter text-dark-blue'>TechDev excels</span> in <span className='font-medium font-inter text-dark-blue'>S/4HANA</span>, providing premier solutions, implementation, add-ons, & <span className='font-medium font-inter text-dark-blue'>SAP Management.</span>
            </p>
            </div>
            </div>
            </div>
        </div>

    </section>
  )
}

export default MiniBanner