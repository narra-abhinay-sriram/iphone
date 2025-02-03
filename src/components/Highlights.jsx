import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from "gsap";
import { rightImg, watchImg } from '../utils';
import VideoCourosel from './VideoCourosel';

const Highlights = () => {
  useGSAP(()=>{
gsap.to('#text',{y:0,duration:1,opacity:1})
gsap.to('.link',{
  y:0,
  opacity:1,
  duration:1,
  stagger:1.5
})
  },[])

  return (
    <section id='highlights' className='w-full h-full overflow-hidden relative sm:py-32 p-20 sm:px-10 px-5 bg-zinc-900'>
      <div className='screen-max-width overflow-hidden'>
        <div className='w-full mb-12 md:flex justify-between items-end'>
          <h1 id='text' className='text-[#86868b] text-3xl md:text-5xl lg:text-6xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'>Get the highlights.</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link text-[#2997ff] hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20' >
              watch the film
              <img alt='watch' src={watchImg} className='ml-2'/>
            </p>

            <p className='link text-[#2997ff] hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20' >
              watch the event
              <img alt='watch' src={rightImg} className='ml-2'/>
            </p>
          </div>

        </div>
        <VideoCourosel/>

      </div>
      
    </section>
  )
}

export default Highlights
