import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'
const Navbar = () => {


  return (
    <nav class="w-full flex items-center justify-center">
        <ul class="list-none text-[8px] sm:text-[12px] md:text-[16px] flex items-center justify-center gap-5 p-3  bg-[#2ef171] text-black font-semibold w-full">
            <Link to='/home'><li>Home</li></Link>
            <Link to='/allbookings'><li>My Bookings</li></Link>
            <Link to='/history'><li>History</li></Link>
            <Link to='/bookservice'><li>Book Service</li></Link>
            <Link to='/'><li>Logout</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar