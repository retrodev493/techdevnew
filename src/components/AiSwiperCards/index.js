"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Aidata } from '@/app/data/Aidata';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap'

const AiSwiperCards = () => { 
    useEffect(() => {
          gsap.fromTo(
            ".aicards:not(:first-child)",
            {
              x: () => window.innerWidth / 2 + 600,
            },
            {
              x: 0,
              stagger: 0.5, 
              rotate: 0,
              scrollTrigger: {
                trigger: ".myswiper_data",
                scrub: true,
                start: "top bottom",
                end: "+=500",
                invalidateOnRefresh: true
              }
            }
          );
        }
      // }
      , []);


    return (
        <div className='myswiper_data '>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    992:{
                        slidesPerView: 2.5

                    },
                    1200: {
                        slidesPerView: 2
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper !overflow-visible !flex"
                autoHeight={true} // Add autoHeight prop here
>
                {Aidata.data.map((item , index) => (
                    <SwiperSlide key={index} className='flex aicards' >
                        <div className='p-[40px] flex bg-white-color rounded-3xl h-full'>
                            <div className='w-full xl:w-1/2 flex flex-col'> 
                                <div className='max-w-[227px] mb-[40px] flex-grow'> 
                                    <figure className='relative pb-[22.265%]'>
                                        <Image fill alt={item.logo_alt} src={item.logo}/>
                                    </figure>
                                </div>
                                <div className='flex flex-col flex-grow'> 
                                    <div className='mb-[22px]'>
                                        <h4 className='font-inter font-semibold'>{item.card_ttl}</h4>
                                    </div>
                                    <div className='mb-[50px]'>
                                        <p className='font-inter font-regular text-base leading-tight'>{item.card_data}</p>
                                    </div>
                                    <div className='mt-auto'>
                                        <Link className='font-inter font-semibold text-base text-btn-blue relative block know-more-btn w-[max-content]' href={item.card_link}>{item.card_btn}</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='w-0 xl:w-1/2'>
                                <div className='max-w-[268px] w-full' >
                                    <figure className='relative pb-[100%]'>
                                        <Image fill alt={item.card_img_alt} src={item.card_img}/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
    }

export default AiSwiperCards;