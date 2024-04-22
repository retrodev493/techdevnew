
"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { bannerdata } from '@/app/data/HomebannerData';
import Image from 'next/image';
import Button from '@/components/Button';
import AdPoster from '@/components/AdPoster';
import gsap from 'gsap';

const HomeBanner = () => {
    const bannerRef = useRef(null)
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    useEffect(() => {
      if (bannerRef.current) {
          const swiperInstance = bannerRef.current.swiper;
          swiperInstance.on('slideChange', () => {
              setActiveSlideIndex(swiperInstance.realIndex);
          });
      }
  }, []);
   
    const handleSlideChange = (index) => {
      setActiveSlideIndex(index);
      bannerRef.current.swiper.slideTo(index);
  };

  useEffect(()=>{
    const elements = document.querySelectorAll('.title-content')
    gsap.set(elements,{
      x:-100,
      opacity: 0,
    })

    gsap.to(elements,{
      x: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
    })
  },[])
 
  
  useEffect(()=>{

    gsap.set(".mouse-scroll", {xPercent: -50, yPercent: -50});

    let xTo = gsap.quickTo(".mouse-scroll", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".mouse-scroll", "y", {duration: 0.6, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  },[])


    return (
        <section className='bg-black relative home-banner'>
        <div className='mouse-scroll'></div>
          <Swiper ref={bannerRef}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 8000 }} 
            modules={[Navigation , Autoplay]}
            className="mySwiper">  
            {bannerdata.map((item , index)=>(
                <SwiperSlide key={index}>
               <div className='max-w-[1920px] w-full'>
               <figure className='relative pb-[90%]  sm:pb-[50%] lg:pb-[52.3%]'>
                    <Image className='m-auto ' src={item.src} alt={item.alt} fill/>
                 </figure>
               </div>
                <div className='container'>
                 <div className='title-content absolute z-[99] top-[40%] lg:top-[40%] 2xl:top-[25%] leading-none banner-content'>
                    <h2 className='whitespace-nowrap sm:whitespace-normal text-white-color font-roboserif font-regular leading-snug 2xl:leading-none text-[20px] md:text-[35px] lg:text-[60px] 2xl:text-[122px] mb-[20px] 2xl:mb-[40px] max-w-[722px]'>{item.heading}</h2>
                    <Button outline={'outline-white'} name={item.btn_content}/>
                 </div>
                 </div>
                </SwiperSlide>
            ))}
          
          </Swiper>
          <div className='container relative'>
            <div className='flex gap-[16px] absolute z-[99] bottom-[20px] 2xl:bottom-[100px] banner-btn-wrap'>
                {bannerdata.map((item, index) => (
                    <button
                        className={`text-white-color text-center 2xl:text-start w-[75px] lg:w-[90px] 2xl:w-[116px] font-inter font-semibold text-[14px] 2xl:text-[16px] ${activeSlideIndex === index ? 'active-slider-bg' : ''}`}
                        key={index}
                        onClick={() => handleSlideChange(index)}>
                        {item.tab}
                        <span className='w-[75px] lg:w-[90px] 2xl:w-[116px] h-[2px] md:h-[4px] bg-gray block mt-[16px] rounded-md'></span>
                    </button>
                ))}
            </div>
          </div>
          <AdPoster/>
        </section>
      );}
      
export default HomeBanner