'use client'
import React, { useEffect } from 'react'
import Button from '../Button'
import LaserBg from './LaserBg'
import ImageRevealAnimation from './ImageRevealAnimation';
import useDeviceType from '../../utilities/DeviceChecker'
const Hero = () => {

    const deviceType = useDeviceType();
    console.log(deviceType);


    return (
        <section className='md:h-[100vmin] h-[70vh] relative'>
            <ImageRevealAnimation>
                <div className='flex flex-col gap-small items-center z-10'>
                    <h1 className='big-header text-center'>Craft Your<br /><span className='big-header-italic'>Digital Presence</span></h1>
                    <p className='para lg:w-[40%] md:w-[80%] w-full text-center'>You're one meeting away from putting your firm on the digital map. Let’s build something remarkable.</p>
                </div>

                <div className='flex justify-center gap-small z-10'>
                    <Button text={'Book a call'} />
                    <Button text={'Learn more'} type='secondary' />
                </div>

                {/* parameter same as video content */}
                {/* bg- 420px */}
                {/* <div className='lg:h-[420px] md:h-[520px] h-[200px] w-full bg-red-50'>
                </div> */}



            </ImageRevealAnimation>
            <LaserBg />

        </section>
    )
}

export default Hero