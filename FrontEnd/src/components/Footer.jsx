import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row h-40  bg-[#2ef171]'>
        <div className='w-1/2 flex items-center bg-[#2ef171]'>
            <h1 className=' p-4 text-[28px]   font-bold text-black'>Connect With Us</h1>
        </div>
        <div className='w-1/2 flex items-center justify-end text-end underline text-black p-4 font-semibold cursor-pointer'>
            <ul>
                <li>youtube</li>
                <li>instagram</li>
                <li>twitter</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer