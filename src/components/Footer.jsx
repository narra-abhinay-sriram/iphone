import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='sm:py-10 py-5 px-5 '>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-[#86868b] text-xs'>
                 More ways to shop {' '}
                 <span className='underline text-blue-500'>
                    Find an Apple Store {' '}
                 </span>
                 or {' '}
                 <span className='underline text-blue-500'>
                    other reatiler
                 </span>{' '}
                 near you.
                </p>
                <p className='font-semibold text-[#86868b] text-xs'>
                    Or call 0008-090-00098
                 </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px]' />
            <div className='flex md:flex-row flex-col md:items-center justify-between'>
            <p className='font-semibold text-[#86868b] text-xs'>
            Copright @ 2024 Apple Inc. All rights reserved.
                </p>
                <div className='flex'>
                    {footerLinks.map((Link,i)=>
                        (<p key={Link} className='font-semibold text-[#86868b] text-xs'>
                            {Link} {' '}
                            
                            {i!= footerLinks.length-1 && <span className='mx-2'></span>}
                        </p>)
                    )}

                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
