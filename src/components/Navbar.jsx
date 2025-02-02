import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center '>
      <nav className='w-full flex screen-max-width'>
        <img src={appleImg} alt='apple-image '  width={20} height={20} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
            {
                navLists.map((navlist,i)=><div className='text-sm cursor-pointer text-[#86868b] hover:text-white px-5 transition-all' key={i}>{navlist}</div>)
            }
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt='search-img' width={20} height={20} />
            <img src={bagImg} alt='cart-img' width={20} height={20}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
