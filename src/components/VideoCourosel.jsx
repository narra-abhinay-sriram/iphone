import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import {gsap} from 'gsap'
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gasp from 'gasp';

const VideoCourosel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const [video,setvideo] = useState({
        isEnd:false,
        startPlay:false,
        videoId:0,
        isplaying:false,
        islastVideo:false,

    })
    const [loaded,setloaded] = useState([])
    const {isEnd,startPlay,videoId,isplaying,islastVideo} = video

    useGSAP(()=>{
        gsap.to('#slider',{
            transform:`translateX(${-100*videoId}%)`,
            duration:2,
            ease:'power2.inOut'
        })
        gsap.to('#video',{
            scrollTrigger:{
                trigger:'#video',
                toggleActions:'restart none none none'
            },
            onComplete:()=>{
                setvideo((prev)=>({
                    ...prev,startPlay:true,isplaying:true
                }))
            }
        })
    },[isEnd,videoId])


    useEffect(()=>{
       if(loaded.length>3)
       {
        if(!isplaying)
        {
            videoRef.current[videoId].pause();
        }else{
            startPlay && videoRef.current[videoId].play();
        }
       }
    },[loaded,startPlay,isplaying,videoId])
    const handleloadedmetadata=(e,i)=>{
        setloaded(prev=>[...prev,e])
    }

    useEffect(()=>{
        let currentProgress =0;
        let span=videoSpanRef.current
        if(span[videoId])
        {
            let anim = gsap.to(span[videoId],{
                onUpdate:()=>{
                    let progress = Math.ceil(anim.progress()*100)
                    if(progress!=currentProgress)
                    {
                        currentProgress=progress;
                        gsap.to(videoDivRef.current[videoId],{
                            width:window.innerWidth<760 ? '10vw' : window.innerWidth<1200 ? '10vw' : '4vw'
                        })
                        gsap.to(span[videoId],{
                            width:`${currentProgress}%`,
                            backgroundColor:'white'
                        })
                    }

                },
                onComplete:()=>{
                    gsap.to(videoDivRef.current[videoId],{
                        width:'12px'
                    })

                    gsap.to(span[videoId],{
                        backgroundColor:'#afafaf'
                    })

                },
            })

            if(videoId==0)
            {
                anim.restart();
            }
            const animUpdate = ()=>{
                anim.progress(videoRef.current[videoId].currentTime/hightlightsSlides[videoId].videoDuration)
            }
            if(isplaying)
            {
                gsap.ticker.add(animUpdate)
            } else{
                gsap.ticker.remove(animUpdate)
            }
        }

    },[videoId,startPlay])

    const handleprocess =(type,i)=>{
        switch(type)
        {
            case 'video-last':
                setvideo((prev)=>({...prev,islastVideo:true}));
                break;
            case 'video-reset':
                setvideo((prev)=>({...prev,videoId:0,islastVideo:false}));
                break;
            case 'play':
                setvideo((prev)=>({...prev,isplaying:!prev.isplaying}))
                break;
            case 'video-end':
                setvideo((prev)=>({...prev,isEnd:true,videoId:i+1}));
                break;
            
            default:
                return video;
        }
    }

  return (
    <>
    <div className='flex items-center'>
        {
            hightlightsSlides.map((list,i)=>(
                <div key={list.id} id='slider' className='md:pr-20 pr-10'>
                   <div className='relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]'>
                    <div className='w-full h-full flex justify-center items-center rounded-3xl overflow-hidden bg-black'>
                        <video
                        id='video'
                        className={`${list.id==2 && 'translate-x-44'} pointer-events-none`}
                        playsInline={true}
                        muted
                        preload='auto'
                        ref={(el)=>{videoRef.current[i]=el}}
                        onEnded={()=>
                            i!==3 ? handleprocess('video-end',i) : handleprocess('video-last')
                        }
                        onPlay={()=>{setvideo((prev)=>({...prev,isplaying:true}))}}
                        onLoadedMetadata={(e)=>handleloadedmetadata(e)}
                        >
                          <source src={list.video} type='video/mp4' />
                        </video>

                    </div>
                    <div className='top-12 absolute left-[5%] z-10'>
                     {
                        list.textLists.map((text,i)=>(
                            <p id={i} className='md:text-2xl text-xl font-medium' >
                                {text}
                            </p>
                        ))
                     }
                    </div>
              
                   </div>
                </div>
            ))
        }

    </div>

     <div className='relative flex justify-center items-center mt-10'>

        <div className='flex justify-center items-center px-7 py-5 bg-[#42424570] rounded-full backdrop-blur '>
            {
                videoRef.current.map((_,i)=>(
                    <span ref={(el)=>{videoDivRef.current[i]=el}}
                     key={i} className='mx-2 w-3 h-3 bg-[#afafaf] rounded-full relative cursor-pointer'>
                       <span className='absolute h-full w-full rounded-full' ref={(el)=>{videoSpanRef.current[i]=el}} />
                    </span>
                ))
            }

        </div>
        <button className='ml-4 p-4 rounded-full bg-[#42424570] backdrop-blur flex justify-center items-center'>
            
            <img
             src={islastVideo ? replayImg : !isplaying ? playImg : pauseImg} 
             className='cursor-pointer'
             onClick={()=>{
                islastVideo ?  handleprocess('video-reset')
                : !isplaying ?  handleprocess('play')
                :  handleprocess('play')
             }}
             />

         </button>
     </div>

    </>
  )
}

export default VideoCourosel
