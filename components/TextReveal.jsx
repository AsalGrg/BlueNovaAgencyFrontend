'use client'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, SplitText) // ✅ 2. Register both

const TextReveal = () => {

    const textRef = useRef(null)

    useGSAP(() => {

        let textSplit = SplitText.create('h3', {
            type: ['chars', 'lines', 'words']
        })

        console.log(textSplit);

        gsap.fromTo('.reveal-text',{
            rotate:10,
            y:500

        },{
            scrollTrigger: {
                trigger: textRef.current,
                scrub: true,           // ✅ smooth scrub
                start: "top 100%",   // ✅ starts when element enters viewport
                end: 'bottom 100%',
            },
            rotate:0,
            y:0
        }

            )

        gsap.fromTo(textSplit.words,{
            filter:'blur(16px)'
        },{
            filter:'blur(0px)',
            stagger:0.05,
            scrollTrigger:{
                trigger:textRef.current,
                start:"top 80%",
                end:"bottom bottom",
                scrub:true,
            }
        })

        gsap.to(textSplit.chars,{
            color:'#ffffff',
            stagger:1,
            scrollTrigger:{
                trigger:textRef.current,
                start:"top 80%",
                scrub: true,
                end:'bottom bottom'
            }
        })

    }, { scope: textRef })
    return (
        <section ref={textRef} className='bg-red w-full text-center h-[100vh] overflow-hidden py-[2%] flex justify-center items-center lg:items-start'>
            <h3 className='big-header text-center reveal-text'>We build powerful digital identities through strategic media management and stunning websites that grow brands.</h3>
        </section>
    )
}

export default TextReveal