'use client'

import Image from 'next/image';
import LaserFlow from '../LaserFlow';
import { useRef } from 'react';
import useDeviceType from '@/utilities/DeviceChecker';

// NOTE: You can also adjust the variables in the shader for super detailed customization

// // Basic Usage
// <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
//     <LaserFlow />
// </div>

// Image Example Interactive Reveal Effect
export default function LaserBg() {

    const device = useDeviceType();
    console.log(device)
    return (
        <div
            className={`absolute ${device === 'desktop' ? 'h-[200%]' : device === 'tablet' ? 'h-[110%]':'h-[120%]'} w-full top-0`}

        >
            <LaserFlow
                horizontalBeamOffset={0.1}
                verticalBeamOffset={device === "desktop" ? 0.05 : device === "tablet" ? 0.04 : 0.232}
                horizontalSizing={1.2}
                decay={1}
                flowStrength={0}
                fogIntensity={0.7}
                falloffStart={1.2}
                color="#003459"
                dpr={device === "desktop" ? 50 : device === "tablet" ? 50 : 100}
            />

            <div
                //640px bg
                //490px md
                className='lg:h-[640px] md:h-[480px] h-[240px] w-full overflow-hidden'
                style={{
                    position: 'absolute',
                    top: `${device==='mobile'?'64%':device==='tablet'?'72%':'45%'}`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#060010',
                    borderRadius: '20px',
                    border: '4px solid #005998',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    zIndex: 6
                }}>
                <Image className='w-full h-full object-cover saturate-0' alt='video-thumbnail' src={'/video-thumbnail.png'}
                    width={100} height={100}
                >

                </Image>
            </div>

        </div>
    );
}