import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import React from 'react'
import { useRef } from 'react'

const ScrollRevealText = ({ children, containerRef, textRef }) => {

    useGSAP(() => {

        const splitText = SplitText.create(textRef.current, {
            type: ['lines', 'words'],
            mask: 'words'
        })

        gsap.fromTo(splitText.words, {
            y: 160,
            filter: 'blur(16px)'
        }, {
            filter: 'blur(0px)',
            y:0,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            duration: 0.8,
            ease: 'power1.out',
            stagger:0.08
        })
    }, { scope: containerRef })
    return (
        <div>
            {children}
        </div>
    )
}

export default ScrollRevealText