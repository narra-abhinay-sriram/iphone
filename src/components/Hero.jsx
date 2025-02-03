import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import React, { useEffect, useState } from 'react'
import { heroImg, heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videosrc,setvideosrc] =useState(window.innerWidth<760 ?smallHeroVideo : heroVideo)
    useGSAP(()=>{
        gsap.to('#text',{
            opacity:1,
            delay:2,
        })
        gsap.to('#cta',{
            y:-40,
            opacity:1,
            delay:2,
        })
    },[])
    const handlevideosrc= ()=>{
        if(window.innerWidth<760)
        {
            setvideosrc(smallHeroVideo)
        }else setvideosrc(heroVideo)
    }
    useEffect(()=>{
        window.addEventListener('resize',handlevideosrc)
        return ()=>{
            window.removeEventListener('resize',handlevideosrc)
        }
    },[])
  return (
    <section className='w-full nav-height bg-black relative'>
     <div className='h-5/6 w-full flex justify-center items-center flex-col mt-5'>
        <p id='text' className='text-center font-semibold text-3xl text-[#94928d] opacity-0 max-md:mb-10'>iPhone 15 Pro</p>
        <div className='md:10/12 w-9/12'>
        <video autoPlay muted  playsInline={true} className='pointer-events-none' key={videosrc} >
            <source src={videosrc} type='video/mp4'></source>
        </video> 
        </div>
    </div>
    <div id='cta' className='flex flex-col justify-center items-center opacity-0 translate-y-20'>
        <a href='#highlights' className='bg-blue-400 text-white p-1 px-4 rounded-full mt-16 mb-6'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>

    </div>
      
    </section>
  )
}

export default Hero
