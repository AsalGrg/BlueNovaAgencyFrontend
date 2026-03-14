'use client'

import React, { useRef } from 'react'

const ImageRevealAnimation = ({ children }) => {
    const revealImgRef = useRef(null);

    return (
        <div
            className='h-full overflow-hidden
            flex flex-col gap-big relative bg-transparent w-full
            items-center
            justify-center
            z-10
            '
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', `${x}px`);
                    el.style.setProperty('--my', `${y + rect.height * 0.6}px`);
                }
            }}
            onMouseLeave={() => {
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', '-9999px');
                    el.style.setProperty('--my', '-9999px');
                }
            }}
        >

            {children}

            {/* revealed image */}
            <img
                ref={revealImgRef}
                src="/bg-image.svg"
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '-60%',
                    zIndex: 5,
                    mixBlendMode: 'lighten',
                    opacity: 0.6,
                    pointerEvents: 'none',
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
            />
        </div>
    )
}

export default ImageRevealAnimation