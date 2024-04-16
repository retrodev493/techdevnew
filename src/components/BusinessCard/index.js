"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { businessdata } from "@/app/data/Businessdata";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const BusinessCard = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".bussiness-card");
    gsap.set(elements, {
      y: -50,
      opacity: 0,
    });
    gsap.to(elements, {
     y: 0,
     opacity: 1,
     stagger: 0.5,
     duration: 1,
     scrollTrigger: {
       trigger: elements,
       start: "top bottom",
       end: "top top",
       scrub: 2,
     },
    });
  }, []);

  return (
    <div className="flex gap-[14px] flex-wrap relative z-[99] ">
      {businessdata.carddata.map((item, index) => (
        <div
          className="bussiness-card bg-white-color p-[20px] lg:p-[40px] rounded-md"
          key={index} 
        >
          
          <div className="flex flex-col h-full">
            <div className="mb-[20px] lg:mb-[35px] 2xl:mb-[56px] min-h-[50px]">
              <Image
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={item.image.alt}
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="mb-[10px] md:mb-0">
                <h4 className="font-inter font-medium text-[22px] lg:text-[28px] 2xl:text-[32px] leading-tight md:min-h-[80px] mb-[10px]">
                {item.card_title}
                </h4>
              </div>
              <div className="mb-[30px] md:mb-[70px]">
                <p className="font-regular font-inter text-base">
                {item.card_description}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                href={item.data_link}
                className="font-inter font-semibold text-base text-btn-blue relative block know-more-btn w-[max-content]">
                {item.data_text}
                </Link>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default BusinessCard;
