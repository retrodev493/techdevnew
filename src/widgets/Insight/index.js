"use client";
import { InsightData } from "@/app/data/insightData";
import Button from "@/components/Button";
import InsightCard from "@/components/InsightCard";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Insight = () => {
  const [activeTab, setActiveTab] = useState(InsightData.tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="bg-white-color pb-[70px] xl:pb-[100px] 2xl:pb-[207px] overflow-hidden">
      <div className="container">
        <div> 
          <div className="mb-[20px] 2xl:mb-[24px]">
            <h3 className="font-roboserif font-medium  text-[28px] lg:text-[35px] 2xl:text-[50px] text-black-color">
              {InsightData.title}
            </h3>
          </div>
          <div className="block md:flex items-center mb-[40px]">
          <ul className=" mb-[20px] 2xl:mb-0 flex items-center justify-between md:gap-[40px] ">
            {InsightData.tabs.map((tab) => (
              <li
                key={tab.id}
                className={`mr-4 cursor-pointer whitespace-nowrap py-[5px]  text-base 2xl:text-[18px] font-inter ${
                  tab.id === activeTab ? " border-b-2  border-solid border-black font-bold " : "text-black-color font-medium "
                }`}
              >
                <button className="inline-block pb-1 2xl:pb-3 font-inter text-base 2xl:text-lg whitespace-nowrap rounded-t-lg font-medium hover:text-gray-600 hover:border-gray-300" onClick={() => handleTabClick(tab.id)}>
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
            <div className="ml-auto">
              {InsightData.tabs.map((tab) => (
                <div
                  key={tab.id}
                  style={{ display: tab.id === activeTab ? "block" : "none" }}
                >
                  <Button name={tab.btn} outline={"outline-primary-black"} />
                </div>
              ))}
            </div>
            </div>

          <div className="insight-card-wrapper">
            {InsightData.tabs.map((tab) => (
              <div
                key={tab.id}
                style={{ display: tab.id === activeTab ? "block" : "none" }}
              >
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  slidesPerView={1}
                  spaceBetween={16}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper overflow-visible relative"
                  breakpoints={{
                   
                    768: {
                      slidesPerView: 2.5,
                    },
                  
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {tab.card_data.map((data, index) => (
                    <div key={index}>
                      <SwiperSlide className="rounded-2xl !h-auto bg-light-blue">
                        <InsightCard data={data} />
                      </SwiperSlide>
                    </div>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
