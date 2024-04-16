"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Button from "../Button";
import "./style.css";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  

  const togglePopup = () => {
    const popup = document.querySelector(".popup");
    if (popup) {
      popup.classList.toggle("addPopup");
    }
  };

  const closePopup = () => {
    const popup = document.querySelector(".popup");
    if (popup) {
      popup.classList.remove("addPopup");
    }
  };

  useEffect(() => {
    function closePopup() {
      const close = document.querySelector(".popup");
      close.classList.remove(".addPopup");
    }
    closePopup();
    return () => {};
  }, []);
  return (
    <header
      className={`fixed mainheader top-0 left-0 w-full z-[999] text-white-color ${
        scrolled ? "slide" : ""
      }`}
    >
      <div className="max-w-[1548px] mx-auto px-[14px] py-[15px] lg:py-[22px] relative">
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px] lg:gap-[50px] items-center">
            <div className="logo font-inter">
              <Link
                className="font-medium text-[22px] xl:text-[30px]"
                href={"/"}
              >
                TechDev
              </Link>
            </div>

            <div className="nav-links hidden lg:flex">
              <Menu />
            </div>
          </div>

          <div className="flex gap-[2px] xl:gap-[24px] items-center">
            <div className="nav-links flex lg:hidden">
              <Menu />
            </div>

            <button
              className="p-[10px] hover:scale-[1.3] transition-all duration-200 rounded-full px-4"
              onClick={togglePopup}
              aria-label="Toggle Popup"
            >
              <span role="img" className="search-icon" aria-label="Search Icon">
                <svg
                  width="17px"
                  height="17px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Search_Magnifying_Glass">
                      <path
                        id="Vector"
                        d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                        stroke="#ffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </button>
            <Button variant={"btn-primary"} name="Contact Us" />
          </div>
        </div>
      </div>

      <div className="popup absolute shadow-sm z-[99] h-[287px] !w-screen">
        <div className="max-w-[1500px] mx-auto h-full">
          <div className="flex flex-col justify-end h-full">
            <div className="pb-[20px]">
              <div className="flex justify-between items-center">
                <input
                  className="p-[20px] border-b-[1px] border-b-slate-100 text-black-color text-[18px] lg:text-[30px] 2xl:text-[40px] mb-[30px] mx-[30px] inputsearch"
                  type="text"
                  placeholder="Search Here..."
                />
                <button className="pe-8" onClick={closePopup}>
                  <Image
                    src="./images/search/2.svg"
                    alt="close"
                    height="30"
                    width="30"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
