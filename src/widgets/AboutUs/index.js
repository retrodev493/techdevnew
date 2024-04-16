"use client"
import { aboutdata } from '@/app/data/Aboutdata'
import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'

const AboutUs = () => {   
  return (
    <section className='pb-[50px] lg:pb-[100px] 2xl:pb-[238px] bg-white-color about-wrapper'>
        <div className='container'>
            <div className='flex flex-col lg:flex-row bg-btn-title-color rounded-2xl'>
                <div className='w-full 2xl:w-1/2 rounded-e-md'>
                    <div className='w-full'>
                        <figure className='relative pb-[60%] lg:pb-[100%] overflow-hidden rounded-t-2xl lg:rounded-r-none  lg:rounded-t-0 lg:rounded-s-2xl'>
                        <Image className='object-cover scale-[1.1] about-us-image' src={aboutdata.src} alt={aboutdata.alt} fill/>
                        </figure>
                    </div>
                </div>
                <div className='w-full 2xl:w-1/2 flex flex-col justify-center relative'>
                    <Image className='absolute z-0 top-0 right-0' width={740} height={739} alt='image' src='/images/about/Vector.svg'/>
                    <div className='py-[30px] lg:py-[49px] 2xl:py-0 px-[30px] lg:px-[40px] 2xl:px-[72px] relative z-10'>
                        <div>
                            <h5 className='font-roboserif text-[28px] lg:text-[35px] 2xl:text-[48px] font-medium text-white-color mb-[32px]'>
                                {aboutdata.title}
                            </h5>
                        </div>
                        <div className='flex flex-col gap-[16px] pb-[24px] max-w-[480px]'>
                            <span className='font-inter font-regular text-base leading-snug text-white-color'>{aboutdata.desc}</span>
                            <span className='font-inter font-regular text-base leading-snug text-white-color'>{aboutdata.content_2}</span>
                        </div>
                      <div>
                      <Button name={aboutdata.btn_content} outline={'outline-white'}/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs