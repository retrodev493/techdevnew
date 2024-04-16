import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './style.css'
const Menu = () => {
  const MenuNav = [
    {
      title: "Services",
      link: "/",
      sublinks:[
        {
          title:'Article',
          link: './'
        },
        {
          title:'Services',
          link: './'
        },
        {
          title:'About Services',
          link: './'
        },
        {
          title:'Contact',
          link: './'
        },
       
      ]
    },
    {
      title: "Solutions",
      link: "/Solutions",
       sublinks:[
        {
          title:'Article',
          link: './'
        },
        {
          title:'Services',
          link: './'
        },
        {
          title:'About Services',
          link: './'
        },
        {
          title:'Contact',
          link: './'
        },
      ]
    },
    {
      title: "Products",
      link: "/Products",
       sublinks:[
        {
          title:'Article',
          link: './'
        },
        {
          title:'Services',
          link: './'
        },
        {
          title:'About Services',
          link: './'
        },
        {
          title:'Contact',
          link: './'
        },
      ]
    },
    {
      title: "Our Industry",
      link: "/OurIndustry",
       sublinks:[
        {
          title:'Article',
          link: './'
        },
        {
          title:'Services',
          link: './'
        },
        {
          title:'About Services',
          link: './'
        },
        {
          title:'Contact',
          link: './'
        },
      ]
    },
    {
      title: "Insights",
      link: "/Insights",
       sublinks:[
        {
          title:'Article',
          link: './'
        },
        {
          title:'Services',
          link: './'
        },
        {
          title:'About Services',
          link: './'
        },
        {
          title:'Contact',
          link: './'
        },
      ]
    },
    {
      title: "Corporates",
      link: "/Corporates",
       sublinks:[
        {
          title:'Article',
          link: './'
        },
        {
          title:'Services',
          link: './'
        },
        {
          title:'About Services',
          link: './'
        },
        {
          title:'Contact',
          link: './'
        },
      ]
    }
    ]


  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <div  className="block lg:hidden max-h-[30px]">
        <button onClick={toggleMenu} className="hamburger font-medium text-sm 2xl:text-base group-hover:opacity-[0.5] transition-all duration-200 ease-in-out">
          <Image
            src="/hamburger.svg"
            alt="hamburger"
            width={30}
            height={20}
            priority 
          />
        </button>
        {isOpen && (
         <ul className="absolute top-full left-0 bg-white shadow-md py-2 lg:rounded w-full h-screen">
           {MenuNav.map((item, index) => (
             <li 
               className='group relative text-black-color py-[15px] px-[15px]' 
               key={index}
               onMouseEnter={() => toggleDropdown(index)}
               onMouseLeave={() => toggleDropdown(null)}>
               <Link href={item.link} className="font-medium text-sm 2xl:text-base group-hover:opacity-[0.5] transition-all duration-200 ease-in-out">
                 {item.title}
               </Link>
               {openIndex === index && (
                 <ul className="absolute z-[99] top-full bg-white shadow-md py-2 rounded w-[94%]">
                   {item.sublinks.map((sublink, subIndex) => (
                     <li className='px-[10px] py-[10px]' key={subIndex}>
                       <Link href={sublink.link} className="block py-1 text-black-color px-4 text-sm hover:opacity-50 transition-all duration-200 ease-in-out">
                         {sublink.title}
                       </Link>
                     </li>
                   ))}
                 </ul>
               )}
             </li>
           ))}
         </ul>
        )}
      </div>

      <ul className="hidden lg:flex w-full gap-[50px]">
        {MenuNav.map((item, index) => (
          <li className="group relative navlinks py-[10px] cursor-pointer" key={index}
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link href={item.link} className="font-medium text-sm 2xl:text-base group-hover:opacity-[0.5] transition-all duration-200 ease-in-out">
              {item.title}
            </Link>
            {openIndex === index && (
              <ul className="absolute top-full z-[99] text-black-color bg-white shadow-md py-2 rounded w-[300px] xl:w-[500px] left-[-50px]">
                {item.sublinks.map((sublink, subIndex) => (
                  <li key={subIndex} className='py-[15px] px-[30px] sublinks'>
                    <Link href={sublink.link} className="block py-1  text-[16px] xl:text-[20px] font-roboserif transition-all duration-200 ease-in-out">
                      {sublink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;