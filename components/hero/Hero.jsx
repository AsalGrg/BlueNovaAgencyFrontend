'use client'
import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import LaserBg from './LaserBg'
import ImageRevealAnimation from './ImageRevealAnimation';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import { useAnimationCompleteContext } from '@/context/animation_complete.context';
const Hero = () => {

    const heroContainerRef = useRef(null)
    const headingRef = useRef(null)

    const changingTextAnimationRef = useRef(null);
    const [currentText, setcurrentText] = useState(0)

    const { setcomplete, complete } = useAnimationCompleteContext();

    const changingTexts = ['websites', 'ads', 'videos', 'graphics']
    useGSAP(() => {

        const timeline = gsap.timeline({
            onComplete: () => { setcomplete(true) }
        });
        const splitText = SplitText.create('.nonChangingText', {
            type: ['words', 'chars'],
            autoSplit: true,
            mask: "words",
            onSplit: (self) => {
                return timeline.
                    fromTo(self.chars,
                        {
                            y: 120,
                            rotate: 1
                        },
                        {
                            y: 0,
                            duration: 0.6,     // how long each word takes
                            ease: 'power2.out',
                            stagger: 0.01,
                            rotate: 0
                        }
                    )
            }
        })
        timeline.fromTo(splitText.chars, {
            filter: "blur(8px)"
        }, {
            filter: "blur(0px)",
            duration: 0.3,
            ease: 'power1.out',
            stagger: 0.008,

        }, "-=0.8")

        // changing text animation logic

        changingTextAnimationRef.current = gsap.timeline({ paused: true });
        SplitText.create('#changingText', {
            type: ['chars', 'words'],
            mask: 'words',
            autoSplit: true,
            onSplit: (self) => {
                changingTextAnimationRef.current
                    .fromTo(self.words, {
                        y: '100%'
                    }, {
                        y: '0%',
                        duration: 0.6,
                        ease: 'back.out',
                    })
            }
        })
    }, { scope: heroContainerRef })



    useEffect(() => {
        if (!complete) return;

        changingTextAnimationRef.current.kill();
        document.getElementById('changingText').innerText = changingTexts[currentText]
        async function changeNext() {
            await changeToNextText();
        }
        changeNext();
    }, [currentText])

    useEffect(() => {
        if (complete) {
            changingTextAnimationRef.current.play();
            console.log('changed');
        }
        async function changeNext() {
            await changeToNextText();
        }
        changeNext();
    }, [complete])

    async function changeToNextText() {
        await new Promise(() => {
            setTimeout(() => {
                if (currentText < changingTexts.length - 1) setcurrentText(currentText + 1)
                else setcurrentText(0)
            }, 3000)
        })
    }

    return (
        //bg-linear-to-b from-accent to-background to-32%
        <section className='lg:h-screen md:h-[104vmin] h-[80vh]
         w-full
         flex justify-center
         mb-[50%] md:mb-[64%] lg:mb-[60%] 
        '
            ref={heroContainerRef}
        >
            {/* layout div as I need gradient for whole width here */}
            <div className='layout
            relative h-full
            '>
                <ImageRevealAnimation>
                    <div className='flex flex-col gap-small z-10 w-full'>
                        <h1
                            ref={headingRef}
                            className='big-header text-center w-full '>

                            <div className='h-fit md:text-start text-center'>
                                <span className='nonChangingText left-0 top-0'>We design and build </span>
                                <span className='big-header-italic xl:inline inline-block min-w-full text-center  !text-primary' id='changingText'>websites</span>
                            </div>
                            <span className='nonChangingText'>that </span>
                            <span className='big-header-italic min-w-full text-center  md:!text-primary text-secondary nonChangingText'>grows</span>
                            <span className='nonChangingText'> companies.</span></h1>
                    </div>
                </ImageRevealAnimation>
                <LaserBg />
            </div>
        </section>
    )
}

export default Hero