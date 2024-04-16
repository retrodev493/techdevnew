"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { EffectCards, Navigation } from 'swiper/modules';
import { testimonials } from '@/app/data/TestimonialData';
import Image from 'next/image';

const CardTest = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 992);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    if (isSmallScreen) {
        return (
            <div className='testimonial-card'>
                {testimonials.cardData.map((item, index) => (
                    <div key={index} className='bg-white-color rounded-2xl !h-auto'>
                        <div className='pt-[20px] mb-[15px] lg:mb-0 2xl:pt-[40px] pe-[20px]  2xl:pe-[56px] pb-[20px] 2xl:pb-[31px] ps-[20px] 2xl:ps-[40px] flex h-full'>
                            <div className='h-full flex flex-col flex-grow'>
                                <div className='mb-[32px]'>
                                    <Image width={item.card_profile_w} height={item.card_profile_h} alt={item.card_alt} src={item.card_svg} />
                                </div>
                                <div className='mb-[28px]'>
                                    <p className='max-w-[488px] font-inter font-regular text-base lg:text-[20px] 2xl:text-[24px] leading-tight'>
                                        {item.card_desc}
                                    </p>
                                </div>
                                <div className='flex mt-auto gap-2 items-center'>
                                    <div>
                                        <Image src={item.card_dp} width={item.card_profile_w} height={item.card_profile_h} alt={item.card_profile_alt} />
                                    </div>
                                    <div>
                                        <span className='block font-inter font-semibold text-base'>{item.card_profile_name}</span>
                                        <span className='font-inter font-regular text-sm'>{item.card_profile_data}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className='testimonial-card'>
            <Swiper
                effect={'cards'}
                loop={false}
                pagination={{
                    type: 'fraction',
                }}
                thumbs={false}
                allowTouchMove={false}
                navigation={true}
                modules={[Navigation, EffectCards]}
                className='mySwiper max-w-[500px] xl:max-w-[561px] h-full'
            >
                {testimonials.cardData.map((item, index) => (
                    <SwiperSlide key={index} className='bg-white-color rounded-2xl !h-auto'>
                        <div className='pt-[20px] 2xl:pt-[40px] pe-[20px]  2xl:pe-[56px] pb-[20px] 2xl:pb-[31px] ps-[20px] 2xl:ps-[40px] flex h-full'>
                            <div className='h-full flex flex-col flex-grow'>
                                <div className='mb-[32px]'>
                                    <Image width={item.card_profile_w} height={item.card_profile_h} alt={item.card_alt} src={item.card_svg} />
                                </div>
                                <div className='mb-[28px]'>
                                    <p className='max-w-[488px] font-inter font-regular text-base lg:text-[20px] 2xl:text-[24px] leading-tight'>
                                        {item.card_desc}
                                    </p>
                                </div>
                                <div className='flex mt-auto gap-2 items-center'>
                                    <div>
                                        <Image src={item.card_dp} width={item.card_profile_w} height={item.card_profile_h} alt={item.card_profile_alt} />
                                    </div>
                                    <div>
                                        <span className='block font-inter font-semibold text-base'>{item.card_profile_name}</span>
                                        <span className='font-inter font-regular text-sm'>{item.card_profile_data}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardTest;
