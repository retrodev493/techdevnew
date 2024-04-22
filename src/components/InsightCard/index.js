import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const InsightCard = ({ data }) => {

  return (
    <div className='h-full insight-card'> 
      <div className='h-full flex flex-col'> 
        <div className=' w-full'>
          <figure className='relative pb-[44.885%]'>
            <Image className='insight-image' src={data.card_img} alt={data.alt} fill />
          </figure>
        </div>

        <div className='p-[15px] lg:p-[20px] 2xl:p-[32px] flex h-full'>
          <div className='flex flex-col flex-grow'>
            <div className='mb-[18px]'><span className='text-gray font-regular font-inter text-sm '>{data.date}</span></div>
            <div className='mb-[30px] 2xl:mb-[89px]'>
              <p className='font-inter font-medium text-base lg:text-[20px] 2xl:text-[24px] leading-tight'>{data.card_title}</p>
              <p className='font-inter font-medium text-base lg:text-[20px] 2xl:text-[24px] leading-tight'>{data.card_data}</p>
            </div>
            <div className='mt-auto'>
              <Link className='text-btn-blue font-inter font-semibold text-base relative block know-more-btn w-[max-content]' href={data.link}>{data.link_title}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightCard
