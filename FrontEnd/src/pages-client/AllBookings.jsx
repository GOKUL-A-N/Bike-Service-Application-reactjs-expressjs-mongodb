import React from 'react'
import { history } from '../constants'
import ServiceCard from '../components/ServiceCard'
import Navbar from '../components/Navbar'

const AllBookings = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex flex-col items-center justify-start mt-10  w-full'>
            <h1 className=' text-[28px] md:text-[38px] font-bold'>All Bookkings</h1><br />
            <ServiceCard history={history} />
        </div>
        </div>
      )
}

export default AllBookings