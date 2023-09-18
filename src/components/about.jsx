import React from 'react'

const About = () => {
    return(
      <div name= "About" className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted all over the World</h2>
                <p className='py-6 text-3xl text-orange-400'>We at aircos are determined to satisfy all your needs 
                and solving the <br />problem of getting good quality and affordable <br /> hair and cosmetics all around
                the world by giving you great <br />products with an outstanding services.</p>
            </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
           <div className=' border py-8 rounded-xl shadow-xl'>
             <p className='text-6xl text-indigo-900'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
            </div>
            <div className=' border py-8 rounded-xl shadow-xl'>
             <p className='text-6xl text-indigo-900 font-semibold'>24/7</p>
            <p className='text-gray-400 mt-2'>Services</p>
            </div>
            <div className=' border py-8 rounded-xl shadow-xl'>
             <p className='text-6xl text-indigo-900 font-semibold'>100%</p>
            <p className='text-gray-400 mt-2'>Quality</p>
            </div>
        </div>
        </div>
      </div>
    )
}

export default About