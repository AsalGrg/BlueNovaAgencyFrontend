import Image from 'next/image'
import React from 'react'

const ServiceCard = ({classN}) => {
    return (
        <div className={`service-card h-88 md:h-112 md:col-span-1 col-span-2 rounded-3xl border-1 border-primary p-[24px] md:p-[32px] flex flex-col justify-center gap-big
        md:bg-none
        bg-linear-to-b from-background to-100% to-accent
        backdrop-saturate-150
        ${classN}
        `}>

            <Image src={'/website-icon.svg'} width={80} height={80} alt='website-icon' />
            <div className='flex flex-col items-start'>
                <h3 className='text-[clamp(2rem,1.5455rem+2.2727vw,3rem)] font-roboto'>
                    Websites
                </h3>
                <p className='para text-secondary'>We create tailored website on whatever stack you need that just fits right for you</p>
            </div>
        </div>
    )
}

export default ServiceCard