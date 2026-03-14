import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ service}) => {
    return (
        <div className={`service-card rounded-3xl border-1 border-primary p-[24px] md:p-[32px] flex flex-col justify-center 
        gap-big
        h-100 w-[70vw]
        md:w-[40vw]  md:h-[48vw]
        xl:w-full xl:h-116 col-span-1
        xl:bg-none 
        bg-linear-to-b from-background from-90% to-accent
        backdrop-saturate-150
        relative
        overflow-hidden
        ${'row'+service.row}
        `}
        key={service.id}
        >


            <Image src={service.icon_image} width={80} height={80} alt='website-icon' />
            <div className='flex flex-col items-start gap-small'>
                <h3 className='card-header'>
                    {service.title}
                </h3>
                <p className='para text-secondary'>{service.description}</p>
            </div>

            <div className="absolute h-[50%] -bottom-[20%] w-full left-0
            bg-radial from-accent to-background
            block
            xl:hidden
            -z-[10]
            ">
            </div>
        </div>
    )
}

export default ServiceCard