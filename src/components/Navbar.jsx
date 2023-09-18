import React, {useState} from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'

import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) 
    const handleClose = () => setNav(!nav) 

//(!nav)is the off set of the useState(false). 
//once the event is clicked it gives the opposite of the usestate.
    return(
        <div className='w-screen h-[80px] z-10 bg-slate-200 fixed drop-shadow-lg '>
            <div className='px-2 flex justify-between w-full h-full'>
                <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>aircos*</h1>
                    <ul className='hidden md:flex'>
                    <li><Link to="Home" spy = {true} smooth={true} duration={500}>Home </Link></li>
                    <li><Link to="About" smooth={true} offset={-200} duration={500}>About </Link></li>
                    <li><Link to="Products" smooth={true} offset={-50} duration={500}>Products </Link></li>
                    <li><Link to="Services" smooth={true} offset={-100} duration={500}>Services</Link></li>
                    </ul>
                </div>
<div className='hidden md:flex pr-4'>
    <button className='px-4 py-3 text-black'>Sign In</button>
    <button className='px-4 py-3 text-black' >Sign Up</button>
</div>
<div className='md:hidden mr-4' onClick={handleClick}>
    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />} 

</div>
            </div>
             <ul className={!nav ? 'hidden': 'absolute bg-slate-200 w-full px-8'}>
           
             <li className='border-b-2 border-slate-300 w-full'><Link onClick={handleClose} to="Home" smooth={true} duration={500}>Home </Link></li>
             <li className='border-b-2 border-slate-300 w-full' ><Link onClick={handleClose}  to="About" smooth={true} offset={-200} duration={500}>About </Link></li>
             <li className='border-b-2 border-slate-300 w-full'><Link onClick={handleClose} to="Products" smooth={true} offset={-50} duration={500}>Products </Link></li>
              <li className='border-b-2 border-slate-300 w-full'><Link onClick={handleClose}  to="Services" smooth={true} offset={-100} duration={500}>Services</Link></li>
           <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-400 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
           </div>
             </ul>
            </div>
    )
}
//tailwind works with minimun width i.e sm:4xl means that the text should be 3xl and anything
// above the min-width should be 4xl the minimum width is set to 640px


export default Navbar 