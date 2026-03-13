'use client'
import React, { useEffect, useRef } from 'react'
import ServiceCard from "./ServiceCard"
import ScrollReveal from '../ScrollRevealText'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Services = () => {

    const glowRef = useRef(null)
    const containerRef = useRef(null)
    const contentRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {

        let cards = gsap.utils.toArray('.service-card');

        let row1ScrollTrigger = {
            trigger: containerRef.current,
            start: "top 40%",
        }

        let row2ScrollTrigger = {
            trigger: containerRef.current,
            start: "top -10%",
        }
        
        cards.forEach((row) => {
            console.log(row)
            gsap.fromTo(row, {
                y: 120,
                opacity:0,
                filter: 'blur(16px)'
            }, {
                y: 0,
                filter: 'blur(0px)',
                opacity:1,
                duration: 0.8,
                ease: 'power1.out',
                stagger: 0.15,
                scrollTrigger: row.classList.contains('row1')? row1ScrollTrigger: row.classList.contains('row2')? row2ScrollTrigger:null
            }, "-=0.7")
        })
    }, { scope: contentRef })

    return (
        <section className='w-full h-fit flex justify-center pb-[8%]'
        >

            <div className='layout h-fit flex flex-col gap-big items-center'>

                {/* heading content */}
                <ScrollReveal containerRef={containerRef} textRef={textRef} >
                    <div className='w-full text-center'
                        ref={containerRef}
                    >
                        <h1 className='big-header'
                            ref={textRef}
                        >What We <span className='big-header-italic text-primary'>Offer ?</span></h1>
                    </div>
                </ScrollReveal>
                {/* services list */}
                <div className='xl:w-[56%] lg:w[72%] md:w-full w-[88%] grid grid-cols-2 gap-6
                bg-none
                relative
                '
                    ref={contentRef}
                >
                    <ServiceCard classN={'row1'} />
                    <ServiceCard classN={'row1'} />
                    <ServiceCard classN={'row2'} />
                    <ServiceCard classN={'row2'} />

                    {/* mouse moving gradient */}
                    <div
                        className={`absolute
                    -z-10
                    top-[50%]
                    -translate-y-[50%]
                    left-[50%]
                    -translate-x-[50%]
                    md:bg-radial from-accent/80 to-background
                    to-100%
                    h-full
                    w-full
                    `}
                    ></div>
                </div>

            </div>
        </section>
    )
}

export default Services