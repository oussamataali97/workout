import React from 'react'
import girl from '../assets/assets/images/banner.png'

function HeroBanner() {
  return (
    <div className='flex justify-between items-center  h-screen'>
        <div className="text justify-self-start ml-24 space-y-8">
            <p className='font-[600] text-2xl text-red-500'>Fitness Club</p>
            <p className='font-[700] text-4xl'>Sweat,Smile <br/> and Repeat</p>
            <p className='font-[400] text-gray-700 text-xl'>Check-out the most effective exercices personalized for you</p>
            <button className='bg-red-600 text-white px-5 py-3'>Explore Exercices</button>
            <p className='font-[700] text-9xl opacity-10 text-red-500'>EXERCICES</p>
        </div>
        <div className="imga">
        <img src={girl} alt="girl" className=' h-[630px] absolute top-0 right-32' />

        </div>
    </div>
  )
}

export default HeroBanner