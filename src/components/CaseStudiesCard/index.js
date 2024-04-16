import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import gsap from 'gsap';


const StudiesCard = ({ data }) => {

  useEffect(()=>{
    const casestudyImage = document.querySelectorAll(".case-studies-image");
    gsap.set(casestudyImage,{
      scale:0
  
    })
    gsap.to(casestudyImage,{
      scale:1,
      duration:1,
      ease: "power2.inOut",
      scrollTrigger:{
        trigger:'.casestudy',
        start:"top bottom",
        end:"top center",
      }
    })
  },[])

  return (
    <div className='h-full flex'>
      {data.type === 'large' ? 
      <div className='casestudy bg-black-color p-[48px] rounded-2xl min-h-[300px] xl:min-h-[519px] flex flex-grow flex-col'>
        <div>
        <button className='text-white-color block rounded-full font-inter font-regular mb-[20px] text-sm  border-2 py-[6px] px-[14px] border-white-color'>{data.title_btn}</button>
        </div>
        <div className= 'mb-[50px] xl:mb-[103px]'>
          <p className='text-white-color font-inter font-semibold text-[20px] md:text-[28px] lg:text-[35px] 2xl:text-[48px] leading-tight'>{data.title}</p>
        </div>
        <Link href={data.link} className='text-white-color mt-auto'>{data.link_text}</Link>
      </div> 
      :  
      <div className='casestudy bg-white-color h-full rounded-2xl flex flex-col'>
      <div className='relative' style={{paddingTop: '75%'}}>
        <Image className='case-studies-image' src={data.src} alt={data.alt} fill />
      </div>
      <div className='p-[24px] flex flex-col flex-grow'>
        <div className='mb-[11px]'>
          <button className='font-inter bg-btn-gray-light rounded-full font-regular block text-sm py-[6px] px-[14px]'>{data.title_btn}</button>
        </div>
        <div className='flex-grow mb-[40px]'>
          <p className='font-inter font-medium text-sm xl:text-base 2xl:text-lg'>
            {data.card_des}
          </p>
        </div>
        <div className='mt-auto'>
          <Link className='text-btn-blue text-base font-inter font-semibold relative block know-more-btn w-[max-content]' href={data.link}>{data.link_text}</Link>
        </div>
      </div>
    </div>
  }
    </div>
  );
};

export default StudiesCard; 
