'use client'
import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useAnimationCompleteContext } from '@/context/animation_complete.context'
import useDeviceType from '@/utilities/DeviceChecker'

const Navbar = () => {

  const [closed, setclosed] = useState(true)
  const navbarRef = useRef(null)
  const { complete } = useAnimationCompleteContext();
  const animationRef = useRef(null)
  const device= useDeviceType();
  useGSAP(() => {
    animationRef.current = gsap.fromTo(navbarRef.current, {
      y: -10,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.4,
      paused: true
    })

    const arrowAnimatonLoop = gsap.to('#arrow-icon', {
      x: 5,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: 'bounce.inOut'
    })
    arrowAnimatonLoop.play();

  }, { scope: navbarRef })

  useEffect(() => {
    if (complete) {
      animationRef.current.play();
    }
  }, [complete])

  return (
    <nav className='fixed top-0 h-fit flex justify-center xs:py-[8%] md:py-[6%] xl:p-[40px] w-full z-20'
      ref={navbarRef}
    >
      {/* Buttons — isolated, no blend */}
      <div className="layout h-full flex justify-between isolate items-center">
        {/* 
        <p className='
          text-[clamp(1.5rem,1.0455rem+2.2727vw,2.5rem)]
          bg-none
          font-black
          text-white
          z-30
          mix-blend-difference
          pointer-events-none
        '>
          BNova
        </p> */}

        <Image src={'/logo.png'} width={device==='desktop'?200: device==='tablet'?150:100} height={device==='desktop'?200: device==='tablet'?150:100} alt='brand-logo'
        />
        <div className='flex gap-small items-center cursor-pointer z-20'
          onClick={() => {
            setclosed(!closed)
            console.log('clicked')
            console.log(closed)
          }}

          id='start-btn'
        >
          <Button text={"Start a project"} type='sec' />
          <div className='bg-primary backdrop-blur-3xl px-3 py-5 rounded-full'
            id='arrow-icon'
          >
            <Image alt='arrow-right-icon' src={'/arrow-right.svg'} width={32} height={32}
            />
          </div>
        </div>
      </div>

      {/* contact-dropdown */}

      <DropDown setclosed={setclosed} closed={closed} />
    </nav>
  )
}

const DropDown = ({ setclosed, closed }) => {
  const dropdownRef = useRef(null)

  //creating animationref to store the animation so it persists reload from the useState, as GSAP creates new instance everyLoad.
  const animationRef = useRef(null)
  useGSAP(() => {

    animationRef.current = gsap.timeline({ paused: true })
      .to(dropdownRef.current, {
        y: 0,
        duration: 0.4,
        ease: 'power1.out'
      })
      .fromTo('#content', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out'
      })


  }, { scope: dropdownRef })

  useEffect(() => {
    if (!animationRef.current) return

    if (closed) {
      console.log('playeddd')
      animationRef.current.reverse()
    } else {
      console.log('playeddd2')
      animationRef.current.play()
    }
  }, [closed])

  return (
    <div className='h-[450%] md:h-[250%]  bg-radial from-background from-16% to-accent absolute top-[8%] w-[98%] rounded-xl overflow-hidden
    -translate-y-[120%]
    px-2
    '
      ref={dropdownRef}
    >
      <div className='w-full h-full flex flex-col justify-center items-center relative'
        id='content'
      >
        {/* top row */}
        <div className='flex h-[50%] gap-big items-center'>
          <p className='big-header'>Let's Talk</p>
          {/* divider */}
          <div className='h-[50%] w-0.5 bg-accent'></div>
          <div className='flex flex-col justify-center'>
            <p className='para'>Click to copy</p>
            <a href='mailto:asal.gurung.06@gmail.com'>
              <p className='para text-secondary underline underline-offset-2'>gurung.asal.06@gmail.com</p>
            </a>
          </div>
        </div>

        {/* bottom row */}
        <div className='flex gap-small items-center'>
          <p className='para'>Or</p>
          <a href='https://calendly.com/gurung-asal-06/30min' target='_blank'><Button text={'Book a free call'} /></a>
          <p className='para'>to discuss about your project</p>
        </div>


        {/* close btn */}
        <div className='flex gap-2 absolute top-[8%] right-[2%] items-center
        cursor-pointer
        '
          onClick={() => setclosed(true)}
        >
          <p className='para text-secondary'>Close</p>
          <p className='text-secondary'>X</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar