import React, { Suspense, useRef, useState } from 'react'
import ProjectsSlider from './ProjectsSlider'
import { projects } from '@/constants/ProjectsList'
import ScrollRevealText from '../ScrollRevealText'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Projects = () => {

    const containerRef = useRef(null)
    const textRef = useRef(null)
    const mainContainerRefProjects = useRef(null)

    return (
        <section className='w-full h-fit flex justify-center my-[8%]'
            ref={mainContainerRefProjects}
        >
            <div className='layout h-full flex justify-center flex-col gap-big'>

                <ScrollRevealText containerRef={containerRef} textRef={textRef}>
                    <div className='flex w-full justify-center text-center'
                        ref={containerRef}
                    >
                        <h3 className='big-header'
                            ref={textRef}>Our <span className='big-header-italic text-primary'><br className='hidden' />Works</span></h3>
                    </div>
                </ScrollRevealText>

                <div className='
                h-full gap-big w-full
                grid grid-cols-1
                lg:grid-cols-2
                gap-big
                '>
                    <Suspense fallback={null}>
                        {projects.map((each, key) => (
                            <ProjectsSlider key={key} project={each} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Projects