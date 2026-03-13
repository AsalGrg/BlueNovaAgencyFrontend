import React, { useRef } from 'react'
import ScrollRevealText from '../ScrollRevealText';
import ProcessCard from './ProcessCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useDeviceType from '@/utilities/DeviceChecker';
import Image from 'next/image';
const Process = () => {

    const containerRef = useRef(null)
    const textRef = useRef(null)
    const contentRef = useRef(null)

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(max-width: 1050px)", () => {
            gsap.to('.content', {
                x: '-80%',
                ease: 'linear',
                scrollTrigger: {
                    trigger: contentRef.current,
                    scrub: true,
                    start: 'top 24%',
                    end: 'bottom top',
                    pin: '.content',
                }
            });
        })


        gsap.fromTo('.processCard', {
            y: 100, opacity: 0
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
                each: 0.2,
                from: 'start'
            },
            ease: 'power1.out',
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
            }
        })
    }, { scope: contentRef });

    return (
        <section className='w-full h-fit flex justify-center my-[50%] md:my-[8%]'>
            <div className='layout h-full flex flex-col gap-big items-center'>

                {/* heading */}
                <ScrollRevealText containerRef={containerRef} textRef={textRef}>
                    <div className='flex w-full justify-center text-center'
                        ref={containerRef}
                    >
                        <h3 className='big-header'
                            ref={textRef}>How we <span className='big-header-italic text-primary'><br className='hidden' />do it ?</span></h3>
                    </div>
                </ScrollRevealText>


                <div className='w-[100%] flex 
                xl:justify-center xl:h-fit 
                h-[300vh] justify-start 
                overflow-hidden
                '
                    ref={contentRef}
                >
                    <div className='
                    w-fit
                    xl:w-[80%]
                    content flex items-start md:gap-10 gap-8
                    xl:grid grid-cols-3
                '
                    >
                        <ProcessCard cardIcon={<CardIcon1 />} title={'We know our'} italicTitle={'clients'}
                            desc={"Our process integrates seamlessly with each client’s workflow, ensuring collaboration and consistency across every project."}
                        />
                        <ProcessCard isEven={true} cardIcon={<CardIcon2 />} title={'We deliver'} italicTitle={'results'}
                            desc={"Every project is measured against real metrics — traffic, leads, conversions. We optimize until the numbers move."}
                        />
                        <ProcessCard cardIcon={<CardIcon3 />} title={"We're always"} italicTitle={'reachable'}
                            desc={"No ticket queues or waiting weeks for replies. Direct communication, real humans, real answers — fast."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}


const CardIcon1 = () => {

    const containerRef = useRef(null)
    useGSAP(() => {

        gsap.timeline({
            repeat: -1,
            repeatDelay: 1
        })
            .fromTo('.face-icon',
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.4,
                    duration: 0.6

                })
            .to('.meh-icon', {
                scale: 1.2,
                duration: 0.4
            })
            .to('.meh-icon', {
                scale: 1,
                duration: 0.4
            })
            .to('.sad-icon', {
                scale: 1.2,
                duration: 0.4
            })
            .to('.sad-icon', {
                scale: 1,
                duration: 0.4
            })
            .to('.smile-icon', {
                scale: 1.2,
                duration: 0.4
            })
            .to('.smile-icon', {
                scale: 1,
                duration: 0.4
            })
            .to('.smile-icon', {
                scale: 1.8,
                duration: 0.6
            })
    })
    return (
        <div className='h-full w-full p-2' ref={containerRef}>
            <div className='h-full w-full flex items-center'>
                <div className='h-[30%] w-full  relative
                '>
                    {/* line */}
                    <div className='h-2 w-full bg-radial from-accent from-25% to-background absolute top-[50%]'></div>
                    <div className='h-full w-full z-20 relative flex justify-between items-center'>
                        <Image width={40} height={40} alt='meh-icon' src={'/meh.svg'} className='bg-accent rounded-full face-icon meh-icon' />
                        <Image width={40} height={40} alt='smile-icon' src={'/smile.svg'} className='bg-primary rounded-full face-icon smile-icon' />
                        <Image width={40} height={40} alt='sad-icon' src={'/sad.svg'} className='bg-accent rounded-full face-icon sad-icon' />
                    </div>

                </div>
            </div>
        </div>
    );
}

const CardIcon3 = () => {
    const containerRef = useRef(null)
    useGSAP(() => {

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1.4
        });

        gsap.utils.toArray('.message').forEach(each => {
            tl.add(
                gsap.fromTo(each, {
                    opacity: 0,
                    scale: 0.8
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: 'linear',
                })
            )
        })
    }, { scope: containerRef })


    return (
        <div className='h-full w-full p-2'
            ref={containerRef}
        >
            <div className=' w-full h-full rounded-3xl p-4 bg-slate-400/20'>
                <div className='icon-content w-full h-full flex flex-col gap-small'>
                    <CardIcon3EachMessage isClient={true} message={'Hey Can You Push the launch to Friday?'} />
                    <CardIcon3EachMessage isClient={false} message={'Absolutely, we are ahead of the schedule 🙌'} />
                    <CardIcon3EachMessage isClient={true} message={'Can you add one more page?'} />
                </div>
            </div>
        </div>
    )
}

const CardIcon3EachMessage = ({ isClient, message }) => {

    return (
        <div className={`message w-full flex ${isClient ? 'justify-start origin-bottom-left left-message' : 'justify-end origin-bottom-right right-message'}`}>
            <div className={`max-w-[80%] w-fit p-2
        rounded-2xl ${isClient ? 'rounded-bl-xs bg-slate-600' : 'rounded-br-xs bg-primary'}
        `}
            >
                <p className='small-para'>{message}</p>
            </div>
        </div>
    )
}

const CardIcon2 = () => {

    const containerRef = useRef(null)
    useGSAP(() => {
        gsap.timeline({
            repeat: -1,
            repeatDelay: 0.8
        })
            .fromTo('.bar', {
                height: '0%'
            }, {
                height: '100%',
                duration: 0.8,
                stagger: 0.3
            })
            .fromTo('.bar-marker', {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.2,
                ease: 'power1.out'
            })

    }, { scope: containerRef })
    return (
        <div className='h-full w-full p-2'
            ref={containerRef}
        >
            <div className=' w-full h-full flex justify-center'>
                <div className='icon-content grid grid-cols-4 w-[80%] h-full gap-small'>
                    <div className='col-span-1 flex flex-col justify-end items-center'>
                        <div className='h-[40%] w-full relative'>
                            <div className='h-full bg-[#005998] w-full bar absolute bottom-0'></div>
                        </div>
                        <p className='small-para'>jan</p>
                    </div>
                    <div className='col-span-1 flex flex-col justify-end items-center'>
                        <div className='h-[56%] w-full relative'>
                            <div className='h-full bg-[#005998] w-full bar absolute bottom-0'></div>
                        </div>
                        <p className='small-para'>feb</p>
                    </div>
                    <div className='col-span-1 flex flex-col justify-end items-center'>
                        <div className='h-[72%] w-full relative'>
                            <div className='h-full bg-[#005998] w-full bar absolute bottom-0'></div>
                        </div>
                        <p className='small-para'>mar</p>
                    </div>
                    <div className='col-span-1 flex flex-col justify-end items-center relative'>
                        <div className='h-full w-full relative'>
                            <div className=' bg-primary h-full w-full bar absolute bottom-0'></div>
                        </div>
                        <p className='small-para'>apr</p>

                        <div className='bar-marker absolute h-fit p-1 top-0 -translate-y-[50%] w-[10vmax] xl:w-[8vmax] bg-linear-to-b from-green-400 to-green-300 left-0 -translate-x-[110%] rounded-4xl text-center'>
                            <p className='small-para'>+143% leads</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Process