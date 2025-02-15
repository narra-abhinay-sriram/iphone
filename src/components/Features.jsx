import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animatewithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const videoRef = useRef()
    useGSAP(()=>{
        gsap.to('#exploreVideo',{
            scrollTrigger:{
                trigger:'#exploreVideo',
                toggleActions:'play pause reverse restart'
            },
            onComplete:()=>{
                videoRef.current.play()
            }
        })
        animatewithGsap('#feature_title',{y:0,opacity:1})
        animatewithGsap('.g_grow',{
            scale:5,
            opacity:1,
            ease:'power1'
        },
        {scrub:5.5}
    )
    animatewithGsap('.g_text',{
        y:0,
        opacity:1,
        duration:1,
        ease:'power1'

    })
    },[])
  return (
    <section className='bg-[#101010] h-full sm:py-32 py-20 sm:px-10 px-5 relative overflow-hidden'>
        <div className='screen-max-width'>
            <div className='w-full mb-12'>
                <h1 id='feature_title' className='text-[#86868b] lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>
                    Explore the full story
                </h1>
             </div>
             <div className='flex flex-col items-center justify-center overflow-hidden'>
                <div className='mb-24 mt-32 pl-24'>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
                </div>

                <div className='flex items-center justify-center flex-col sm:px-10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                        <video playsInline id='exploreVideo' muted autoPlay preload='none' className='w-full h-full object-cover object-center' ref={videoRef}>
                            <source src={exploreVideo} />
                        </video>

                    </div>

                    <div className='flex flex-col w-full relative'>
                        <div className='w-full flex flex-col md:flex-row gap-5 items-center'>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore1Img} className=' w-full h-full object-cover object-center scale-150 opacity-0 g_grow' />

                            </div>

                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore2Img} className=' w-full h-full object-cover object-center scale-150 opacity-0 g_grow' />

                            </div>

                        </div>
                        <div className='w-full flex items-center justify-center flex-col md:flex-row mt-10 md:mt-16 gap-5'>
                            <div className='flex-1 flex items-center justify-center'>
                                <p className='g_text max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] text-[#86868b]'>
                                    iPhone 15 pro is {' '}
                                    <span className='text-white'>the first iPhone to feature an aerospace-grade titanium design </span>,
                                    using the same alloy that spacecrafts use for mission to Mars.

                                </p>

                            </div>

                            <div className='flex-1 flex items-center justify-center'>
                                <p className='g_text max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] text-[#86868b]'>
                                    Titanium has one of the best strength-to-weight ratios of any metal,making these our {' '}
                                    <span className='text-white'>lightest pro models ever. </span>,
                                    you'll notice the difference the moment you pick one up.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                 
             </div>
             
        </div>
    </section>
  )
}

export default Features
