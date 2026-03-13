import React, { useRef } from 'react'
import ScrollRevealText from '../ScrollRevealText'

const Contact = () => {
    const containerRef = useRef(null)
    const textRef = useRef(null)

    
    return (
        <section className='w-full h-fit flex flex-col items-center'>
            <div className='layout h-full'>
                <ScrollRevealText containerRef={containerRef} textRef={textRef}>
                    <div className='flex w-full justify-center text-center'
                        ref={containerRef}
                    >
                        <h3 className='big-header'
                            ref={textRef}>How we <span className='big-header-italic text-primary'><br className='hidden' />do it ?</span></h3>
                    </div>
                </ScrollRevealText>
            </div>
        </section>
    )
}

export default Contact