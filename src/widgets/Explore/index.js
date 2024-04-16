"use client"

import { exploreCarrer } from '@/app/data/ExploreCarrerData';
import Button from '@/components/Button';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react';

const Explore = () => {

  useEffect(()=>{
  const imagezoom = document.querySelector('.imagezoom');
  gsap.set(imagezoom,{
    scale:1,
    translateX:5
  })

  gsap.to(imagezoom,{
    scale:1.6,
    translateX:100,
    duration:1,
    scrollTrigger:{
      trigger:imagezoom,
      start: "top bottom",
      end:"top top",
      scrub:true,
    }
  })
  },[])

  useEffect(()=>{
    const explorecarrer = document.querySelector('.explorecarrer');
    gsap.set(explorecarrer,{
      opacity:0
    })
    gsap.to(explorecarrer,{
      opacity:1,
      duration:2,
      scrollTrigger:{
        start:"top bottom",
        end:"top top",
        scrub:true
      }
    })
  })

  return (
    <section className='bg-white-color pb-[50px] lg:pb-[70px] 2xl:pb-[109px]'>
      <div className='max-w-[1102px] w-full mx-auto px-[12px]'>
        <div className='pb-[59px] hidden lg:block'>
        <div className='flex justify-between flex-wrap'>
          {/* Image 1 */}
          <div className='max-w-[66px] w-full relative'>
            <figure className='pb-[200%] relative'>
              <Image fill alt='carrer' src='/images/carrer/1.png'/>
            </figure>
          </div>

          {/* Image 2 */}
          <div className='max-w-[132px] w-full relative z-[99]'>
            <figure className='pb-[100%] relative'>
              <Image fill alt='carrer' src='/images/carrer/2.png'/>
            </figure>
            <Image className='absolute top-0 !left-[-45px] w-full h-full z-[-1]' fill alt='carrer' src='/images/carrer/2.svg' />
          </div>

          {/* Image 3 */}
          <div className='max-w-[398.07px] w-full'>
            <figure className='pb-[34.166%] relative mask-image overflow-hidden group'>
              <Image fill alt='carrer' className='imagezoom' src='/images/caseStudies/1.png' />
            </figure>
          </div>

          {/* Image 4 */}
          <div className='max-w-[132px] w-full relative z-[99]'>
            <figure className='pb-[100%] relative'>
              <Image fill alt='carrer' src='/images/carrer/4.png' />
            </figure>
            <Image className='absolute top-0 !left-[-45px] w-full h-full z-[-1]' fill alt='carrer' src='/images/carrer/4.svg' />
          </div>

          {/* Image 5 */}
          <div className='max-w-[66px] w-full'>
            <figure className='pb-[200%] relative'>
              <Image fill alt='carrer' src='/images/carrer/5.png' />
            </figure>
          </div>
        </div>
        </div>
     
        <div className='max-w-[850px] m-auto explorecarrer'>
          <div className='mb-[24px]'>
            <h5 className='font-roboserif text-[30px] lg:text-[40px] 2xl:text-[50px] font-medium text-center leading-tight'>{exploreCarrer.title}</h5>
          </div>
          <span className='block text-center leading-snug font-inter font-regular text-sm 2xl:text-base mb-[25px] 2xl:mb-[40px]'>{exploreCarrer.desc}</span>
          <div className='text-center'>
            <Button outline={'outline-primary-black'} name={exploreCarrer.btn_title} />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Explore;
