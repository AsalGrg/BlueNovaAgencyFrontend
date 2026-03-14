'use client'
import React, { useEffect, useRef } from 'react'
import ServiceCard from "./ServiceCard"
import ScrollReveal from '../ScrollRevealText'
import gsap from 'gsap'
import { services } from '@/constants/ServicesList';
import { useGSAP } from '@gsap/react'
import ScrollCardReveal from '../ScrollCardReveal'
const Services = () => {

    const glowRef = useRef(null)
    const mainContainerRef = useRef(null)
    const containerRef = useRef(null)
    const contentRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {

        let mm = gsap.matchMedia();

        mm.add("(max-width: 1050px)", () => {
            gsap.to('.content', {
                x: '-70%',
                ease: 'linear',
                scrollTrigger: {
                    trigger: contentRef.current,
                    scrub: true,
                    start: 'top 28%',
                    end: 'bottom 80%',
                    pin: '.content',
                }
            });
        })


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
                opacity: 0,
                filter: 'blur(16px)'
            }, {
                y: 0,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.8,
                ease: 'power1.out',
                stagger: 0.15,
                scrollTrigger: row.classList.contains('row1') ? row1ScrollTrigger : row.classList.contains('row2') ? row2ScrollTrigger : null
            }, "-=0.7")
        })
    }, { scope: mainContainerRef })

    return (
        <section className='w-full h-fit flex justify-center pb-[8%]'
            ref={mainContainerRef}
        >

            <div className='layout h-fit flex flex-col gap-big items-center '>

                {/* heading content */}
                <ScrollReveal containerRef={containerRef} textRef={textRef} >
                    <div className='w-full text-center'
                        ref={containerRef}
                    >
                        <h1 className='big-header'
                            ref={textRef}
                        >What We <span className='big-header-italic text-primary'>Offer <span className='not-italic!'>?</span></span></h1>
                    </div>
                </ScrollReveal>

                {/* services list */}
                <div className='w-[100%] flex
                xl:justify-center xl:h-fit!
                justify-start
                overflow-hidden
                h-[200vh]
                '
                    ref={contentRef}
                >
                    <div className='xl:w-[56%] w-fit flex gap-6
                        xl:grid xl:grid-cols-2 xl:gap-6
                        bg-none
                        relative
                        content-scroll-services
                        h-fit
                        content
                        py-3
                        '
                    >
                        {
                            services.map((each) => (
                                <ServiceCard service={each} />
                            ))
                        }

                        {/* mouse moving gradient */}
                        <div
                            className={`hidden xl:block absolute
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

            </div >
        </section >
    )
}

export default Services