import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const ScrollCardReveal = ({ children, contentRef , scrollHeight, pinSelector}) => {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(max-width: 1050px)", () => {
            gsap.to(pinSelector, {
                x: '-80%',
                ease: 'linear',
                scrollTrigger: {
                    trigger: contentRef.current,
                    scrub: true,
                    start: 'top 24%',
                    end: 'bottom bottom',
                    pin: pinSelector,
                }
            });
        })


    }, { scope: contentRef });

    return (
        <div className='w-[100%] flex
                xl:justify-center xl:h-fit!
                justify-start 
                overflow-hidden
                '
            style={{
                height: `${scrollHeight}vh`
            }}
            ref={contentRef}
        >
            {children}
        </div>
    )
}

export default ScrollCardReveal