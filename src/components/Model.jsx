import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import React from 'react'
import ModelView from './ModelView'

const Model = () => {
    useGSAP(()=>{
        gsap.to('#heading',{
            y:0,
            opacity:1,
            duration:2
        })
    },[])
  return (
    <section className='sm:py-32 py-20 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <h2 id='heading' className='text-[#86868b] lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20' >
                Take a close look.
            </h2>

            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[vh] overflow-hidden relative'>
                      
                      <ModelView/>
                </div>

            </div>

        </div>
      
    </section>
  )
}

export default Model
