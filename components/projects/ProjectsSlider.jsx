
"use client"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ProjectsSlider = ({ project }) => {

    console.log();
    return (
        <div className='h-full
        relative
        col-span-1
        '        >
            <div className='w-full h-full
            flex flex-col gap-small
            '>
                <div className='h-fit w-full bg-red-50 relative'>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={1}
                        loop={true}
                        speed={1200}
                        autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={{
                            prevEl: '.prev-btn' + project.id,
                            nextEl: '.next-btn' + project.id
                        }}

                        observer={true}
                        observeParents={true}

                        className='w-full'
                    >

                        {project.project_photos.map((each, index) => (
                            <SwiperSlide>
                                <EachSliderPhoto photo_url={each} alt={project.name + '-photo-' + index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* custom nav buttons */}
                    <div className='absolute w-fit h-fit bottom-[4%] z-20 flex gap-big left-[50%] -translate-x-[50%]'>
                        <button className={`z-20 ${'prev-btn' + project.id} cursor-pointer p-4 w-12 h-12 rounded-full bg-slate-400/10 backdrop-blur-md flex items-center`}
                        >
                            <i className="fa-solid fa-arrow-left text-2xl z-10"
                            ></i>
                        </button>
                        <button className={`z-20 cursor-pointer p-4 w-12 h-12 rounded-full bg-slate-400/10 backdrop-blur-md flex items-center
                    ${'next-btn' + project.id}
                    `}>
                            <i className="fa-solid fa-arrow-right text-2xl z-1"
                            ></i>
                        </button>
                    </div>

                </div>

                <div className='space-y-1'>
                    <h3 className='card-header'>{project.name}</h3>
                    <p className='para'>View Website</p>
                </div>
            </div>
        </div>
    )
}


function EachSliderPhoto({ photo_url, alt }) {
    return (
        <SwiperSlide>
            <div className="h-[60vmin] 2xl:h-[60vmin]  xl:h-screen relative">
                <Image
                    src={photo_url}
                    alt={alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
        </SwiperSlide>
    )
}
export default ProjectsSlider