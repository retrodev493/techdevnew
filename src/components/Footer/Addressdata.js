import { footerLink } from '@/app/data/footerdata'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Addressdata = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
    <div>
     <div className='mb-[48px]'>
        <h5 className='text-gray-ttl mb-[20px] font-semibold font-inter'>{footerLink.address.title}</h5>
        <ul>
            {footerLink.address.data.map((item , index)=>(
                <li key={index}>
                     <p className='text-white-color font-inter font-regular text-sm 2xl:text-base'>{item.address_line}</p>   
                </li>
            ))}
        </ul>
     </div>

    <div className='contact'>
           <div>
           <h5 className='text-gray-ttl font-inter font-semibold text-base mb-[20px]'>{footerLink.contacts.title}</h5>
           </div>
            <div >
              <Link className='text-white-color font-inter font-medium text-sm 2xl:text-base block mb-[14px]' href={footerLink.contacts.contacts.Ph_num.link}>{footerLink.contacts.contacts.Ph_num.text}</Link>
              <Link className='text-white-color font-inter font-medium text-sm 2xl:text-base block  mb-[14px]' href={footerLink.contacts.contacts.email.link}>{footerLink.contacts.contacts.email.text}</Link> 
            </div>
    </div> 

    </div>

    <div>
      <h5 className='text-gray-ttl mb-[20px] font-semibold font-inter'>{footerLink.follow.title}</h5>
      <div>
        <ul className='flex gap-[25px]'>
            {footerLink.follow.data.map((item , index)=>(
                <li key={index}>
                    <Link href={item.link}><Image alt={item.alt} width={item.width} height={item.height} src={item.src}/></Link>
                </li>
            ))}
        </ul>
       </div>
      </div>
    </div>
  )
}


export default Addressdata