import React from 'react'
import { footerLink } from '@/app/data/footerdata'
import Link from 'next/link'

const Sublink = () => {
  return (
    <div className='mb-[40px] 2xl:mb-[111px]'>
      <div className='flex flex-col md:flex-row gap-[40px]'>
      {footerLink.sublink.map((item , index)=>(
        <div key={index} className='flex text-white-color'>
          <div>
          <h5 className='text-gray-ttl mb-[10px] 2xl:mb-[20px] font-semibold font-inter'>{item.title}</h5>
          <ul className='block min-w-[219px]'>
            {item.links.map((el , id)=>(
              <li className='py-[8px]' key={id}>
                  <Link title={el.name} className='font-regular text-sm 2xl:text-base font-inter hover:opacity-[0.6] duration-300 transition-all ' href={el.link}>{el.name}</Link>
              </li>
            ))}
          </ul>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default Sublink