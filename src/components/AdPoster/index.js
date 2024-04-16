import React from 'react'
import './style.css'
import Image from 'next/image'
import { adData } from '@/app/data/adData'
const AdPoster = () => {
  return (
    <div className='container relative hidden 2xl:block'>
    <div className='absolute bottom-[100px] right-0 z-[99] border border-gray-ttl rounded-md case-study-card'>
        <div className='flex max-h-[116px]'>
            <div>
                <figure>
                    <Image src={adData.src} width={adData.width} height={adData.height} alt={adData.alt}/>
                </figure>
            </div>
            <div>
            <div className=' text-white-color p-[14px] flex'>
                <div>
                <span className='text-slate-500 font-inter font-medium text-sm mb-[10px] block'>{adData.title}</span> 
                <p className='max-w-[216px] font-inter font-medium text-base  text-white-color leading-tight'>{adData.desc}</p>
                </div>
            <button className='bg-white-color h-[32px] w-[32px] rounded-full text-black-color flex items-center justify-center'>
                <Image alt='card-image' src={adData.btn_content} width={adData.btn_w} height={adData.btn_h} />
            </button>
            </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default AdPoster