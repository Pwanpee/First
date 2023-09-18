import React from 'react'
import{
    UserAddIcon,
    ChatIcon,
    ShoppingCartIcon,
} from '@heroicons/react/solid'

import bgImg from '../assests/aircos1.jpeg'

const Hero = () =>{
    return(
        <div name='Home' className='w-full h-screen flex flex-col justify-between bg-slate-400'>
            <div className='grid md:grid-cols-2 max-width-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Products</p>
                <h1 className='font-bold text-5xl py-3 md:text-7xl'>Hair & Cosmetics</h1>
                <p className='text-2xl'>Were quality lies</p>
                <button className='py-3 px-6 mt-6  sm:w-[60%]' >Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="a" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px]
            bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
            bg-slate-400  border-slate-300 rounded-xl text-center shadow-xl'>
                <p>What would you like to do?</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2'><UserAddIcon className='h-6 text-indigo-900'  />User </p>
                    <p className='flex px-4 py-2'><ChatIcon className='h-6  text-indigo-900'/>Chat with an agent</p>
                    <p className='flex px-4 py-2'><ShoppingCartIcon className='h-6  text-indigo-900'/>Add to Cart</p>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Hero