'use client'
import React, { useRef, useState } from 'react'
import ScrollRevealText from '../ScrollRevealText'
import LightPillarBg from './LightPillarBg'
import Button from '../Button'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Contact = () => {
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const contentRef= useRef(null);

    const [inView, setinView] = useState(false)
    useGSAP(()=>{
        ScrollTrigger.create({
            trigger:containerRef.current,
            start:'top bottom',
            onEnter:()=>{
                console.log('entered')
                setinView(true)},
            onLeaveBack:()=>{
                console.log('leaved')
                setinView(false)}
        })
    }, {scope:contentRef})
    return (
        <section className='w-full flex flex-col justify-center items-center xl:h-full h-[80vh]
        relative
        py-[8%]
        '
        ref={containerRef}
        >
            <div className='layout h-fit flex flex-col gap-big relative'>
                <ScrollRevealText containerRef={containerRef} textRef={textRef}>
                    <div className='flex w-full 
                    lg:justify-start 
                    lg:text-start 
                    justify-center text-center'
                        ref={containerRef}
                    >
                        <h3 className='big-header'
                            ref={textRef}>Let's Start <br />WoWrking <br /><span className='big-header-italic text-primary'>Together</span></h3>
                    </div>
                </ScrollRevealText>

                <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-big items-center'>
                    <Button type='primary' text={'Start a project'} />
                    <div className='right-0 w-fit flex flex-col gap-1 text-center'>
                        <h4 className='para text-secondary'>Contact Info:</h4>
                        <p className='small-para underline underline-offset-4'>gurung.asal.06@gmail.com</p>
                    </div>
                </div>

            </div>
            {inView?(
                <LightPillarBg />
            ): null}
        </section>
    )
}

export default Contact