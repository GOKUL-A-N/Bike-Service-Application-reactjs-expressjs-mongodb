import React from 'react'
import Navbar from '../components/Navbar'

const BookService = () => {
  return (
    <div>
        <Navbar />
        <div>
            <h1 className='text-center p-4 text-[18px]   font-semibold'>Book a Service</h1>
        </div>
        <form
      action=""
      class="w-full items-center justify-center flex flex-col p-10 text-white font-semibold text-[20px]"
    >
      <div class="mb-5">
        <label for="email">Email</label><br />
        <input
          type="email"
          placeholder="Email"
          class="border-2 focus:outline-blue-400 w-[300px] mt-3 p-1 focus:border-green-400 border-green-400 bg-black"
          required
        /><br />
      </div>
      
      <div class="mb-5">
        <label for="Expected Date Of Delievery">Expected Date Of Delievery</label><br />
        <input
          type="Date"
          placeholder="12th Mark"
          class="border-2 focus:outline-blue-400 w-[300px] mt-3 p-1 focus:border-green-400 border-green-400 bg-black"
          required
        /><br />
      </div>
      <div class="mb-5">
        <label for="rollno">Service : </label>
        <select name="" id="" class="bg-black text-white Capitalize bprder-2 border-green-400">
            <option value="general service">General Service</option>
            <option value="oil change">Oil Change</option>
            <option value="water wash">Water Wash</option>
        </select>
        <br />
        <div class="mt-4">
            <button class="pl-2 pr-2 pt-1 pb-1 border-2 rounded-md bg-green-400 text-black font-semibold border-green-400 hover:bg-[#111] hover:text-green-400 hover:border-green-400">Book</button>
            <button class="pl-2 pr-2 pt-1 pb-1 rounded-md bg-black border-2 border-green-400 ml-2  text-green-400 hover:bg-green-400 hover:text-[#111]">Cancel</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default BookService