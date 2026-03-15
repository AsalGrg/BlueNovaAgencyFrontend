import useDeviceType from '@/utilities/DeviceChecker'
import React from 'react'

const ProcessCard = ({ isEven, cardIcon, title, italicTitle, desc}) => {

    const device = useDeviceType();
    return (
        <div
            className={`processCard rounded-3xl ${isEven && device === 'desktop' ? 'my-[80px]' : ''}
            h-120 w-[70vw]
            md:h-140 md:w-[35vw]
            xl:w-full col-span-1
            rounded-3xl border-2 border-primary 
            px-[24px] md:px-[32px] md:py-[40px] py-[32px] 
            flex flex-col justify-start gap-big
            relative
            overflow-hidden
            `}
        >
            <div className='w-full flex flex-col gap-small'>
                <h1 className='card-header text-center'>
                    {title}<br className='' />
                    <span className='card-header-italic text-primary'> {italicTitle}</span>
                </h1>

                <p className='para text-center !text-secondary'>{desc}</p>

            </div>

            {/* card icon */}
            {cardIcon}

            {/* glow gradient */}
            <div className="absolute h-[50%] -bottom-[20%] w-full left-0
            bg-radial from-accent to-background
            -z-[10]
            ">
            </div>
        </div>
    )
}

export default ProcessCard