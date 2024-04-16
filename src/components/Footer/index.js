import React from "react";

import { footerLink } from "@/app/data/footerdata";
import Button from "../Button";
import Sublink from "./Sublink";
import Link from "next/link";
import Addressdata from "./Addressdata";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black-color">
      <div className="container">
        <div className="block lg:flex justify-between pt-[30px] 2xl:pt-[56px] pb-[25px] 2xl:pb-[48px] items-center">
          <div className="mb-[20px] lg:mb-0">
            <h5 className="text-[28px] lg:text-[35px] 2xl:text-[48px] text-white-color font-medium mb-[5px] 2xl:mb-[17px]">
              {footerLink.title}
            </h5>
            <span className="text-white-color text-sm 2xl:text-base font-inter font-light">
              {footerLink.subcontent}
            </span>
          </div>
          <Button
            variant={"btnprimary"}
            outline={"outline-white"}
            name={footerLink.buttontext}
          />
        </div>
        <div className="flex justify-between flex-col 2xl:flex-row pb-[50px] border-b border-gray-ttl">
          <div>
            <Sublink />

            <div className="flex gap-[24px]">
              {footerLink.terms.term.map((item, index) => (
                <span
                  className="hover:opacity-[0.6] transition-all duration-200 ease-in-out"
                  key={index}
                >
                  <Link
                    className="text-white-color text-sm 2xl:text-base"
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </span>
              ))}
            </div>
          </div>
          {/* address */}
          <div className="py-[25px] 2xl:py-0">
            <Addressdata />
          </div>
          <div>
            <h5 className="text-gray-ttl mb-[20px] font-semibold font-inter">
              {footerLink.partners.title}
            </h5>
            <div className="flex flex-row 2xl:flex-col gap-[16px]">
              {footerLink.partners.data.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.src}
                    alt={item.src}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-[16px] pb-[48px]">
          <p className="text-gray-ttl font-regular text-[14px] font-inter">
            Copyright © Applexus Technologies 2024. All Rights Reserved.
          </p>
          <span className="text-gray-ttl font-regular text-[14px] font-inter">
            Designed by{" "}
            <Link className="text-white-color" href="/">
              wac
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
