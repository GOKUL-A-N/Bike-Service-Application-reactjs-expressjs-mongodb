import React from 'react'
import HeroImg from "../assets/hero-img.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='md:h-screen w-full flex flex-col md:flex-row items-center justify-center bg-[#191919] '>
        <div className='md:w-1/2 flex flex-col bg-transparent p-4'>
            <h1 className='ml-1 md:ml-14 text-[28px] md:text-[58px] font-bold'>Tuned To <span className='text-[#2ef171]'>Throttle</span> </h1>
            <p className='ml-1 md:ml-14 text-[14px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis earum labore molestias, pariatur voluptatem sint qui at eligendi saepe laudantium incidunt blanditiis mollitia tenetur. Accusamus esse qui odit quas! Architecto quaerat a iste labore, voluptatum eligendi doloribus nesciunt et.</p><br />
            <Link to='/bookservice' ><button className='p-3 ml-1 md:ml-14 hover:animate-pulse bg-[#2ef171] w-fit text-black font-semibold rounded-md'>Book now</button></Link>
        </div>
        <div className='md:w-1/2 flex items-center justify-center'>
            <img src={HeroImg} className=' w-[85%] h-[85%] md:w-[50%] md:h-[50%] fluid object-contain' alt="bike image" />
        </div>
    </div>
  )
}

export default Hero