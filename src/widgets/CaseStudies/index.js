
"use client"
import React, { useState } from 'react';
import { cardData, casestudiesData } from '@/app/data/CaseStudiesData';
import Button from '@/components/Button';
import StudiesCard from '@/components/CaseStudiesCard';
import './style.css'
import gsap from 'gsap';


const CaseStudies = () => {
    const [activeTab, setActiveTab] = useState("#tab1");

    const handleTabClick = (targetId) => {
        setActiveTab(targetId);
    };

    return (
        <section className='pb-[50px] xl:pb-[70px] 2xl:pb-[105px]'>
            <div className='container'>
                <div className='mb-[24px]'>
                    <h3 className='text-[28px] lg:text-[35px] 2xl:text-[48px] font-medium font-roboserif'>
                        {casestudiesData?.title}
                    </h3>
                </div>
                
                <div>   
                    <div className="mb-4 block xl:flex justify-between">
                        <ul className=" flex flex-nowrap -mb-px text-sm font-medium text-center gap-10  items-center max-w-[1048px] overflow-x-auto casestudy-links"  role="tablist">
                            {casestudiesData.tabs.map(tab => (
                                <li className="me-2 case" role="presentation" key={tab.id}>
                                    <button 
                                        className={`inline-block pb-3 font-inter text-base 2xl:text-lg whitespace-nowrap rounded-t-lg ${activeTab === tab.id ? 'border-black-color text-black-color font-bold border-b-2' : 'font-medium hover:text-gray-600 hover:border-gray-300'}`} 
                                        id={`${tab.id}-tab`} 
                                        onClick={() => handleTabClick(tab.id)} 
                                        type="button" 
                                        role="tab">
                                        {tab.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className='mt-[20px] xl:mt-0'>
                        <Button outline={'outline-primary-black'} name={casestudiesData.btn_content}/>
                        </div>
                    </div>

                   <div className='flex w-full flex-wrap xl:flex-nowrap mt-[40px] gap-[18px] h-100 '>          
                  {cardData.card.map((item , index)=>(
                  <div key={index} className={item.type === "large" ? 'md:w-full xl:w-6/12' : 'w-full md:w-2/6 xl:w-3/12'}>
                    <StudiesCard data={item}/>
                  </div>
                  ))}
                  </div>   

                </div>
            </div>
        </section>
    );
}

export default CaseStudies;