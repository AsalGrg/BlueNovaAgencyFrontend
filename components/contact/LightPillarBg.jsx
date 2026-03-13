import React from 'react'
import LightPillar from '../LightPillar'
import useDeviceType from '@/utilities/DeviceChecker'

const LightPillarBg = () => {
    const device = useDeviceType();
    console.log('frm',device)
    return (
        <div className='w-full h-[120%] lg:h-[120%] absolute left-0 top-0 -z-10'>

            {device === "desktop" ? (
                <LightPillar
                    topColor="#000000"
                    bottomColor="#003459"
                    intensity={2}
                    rotationSpeed={0.5}
                    glowAmount={0.003}
                    pillarWidth={4}
                    pillarHeight={1}
                    noiseIntensity={0.6}
                    pillarRotation={260}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                    className='w-full h-full overflow-hidden flex justify-start items-start'
                />
            ) : device === "tablet" ? (
                <LightPillar
                    topColor="#000000"
                    bottomColor="#003459"
                    intensity={2}
                    rotationSpeed={0.5}
                    glowAmount={0.003}
                    pillarWidth={4}
                    pillarHeight={1}
                    noiseIntensity={0.6}
                    pillarRotation={240}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                    className='w-full h-full overflow-hidden flex justify-start'
                />
            ) : (
                <LightPillar
                    topColor="#000000"
                    bottomColor="#003459"
                    intensity={6}
                    rotationSpeed={0.5}
                    glowAmount={0.003}
                    pillarWidth={6}
                    pillarHeight={1}
                    noiseIntensity={0.6}
                    pillarRotation={240}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                    className='w-full h-full overflow-hidden flex justify-start'
                />
            )}

        </div>
    )
}

export default LightPillarBg