import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BookService = () => {

  const navigate = useNavigate();

  const [inputs,setInputs] = useState({
    email:"",
    bikeName:"",
    expectedDate:"",
    service:"",
    id:"",
  })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post("http://localhost:3000/service/addServices",{
        
        bikeName:inputs.bikeName,
        email:inputs.email,
        expectedDate:inputs.expectedDate,
        service:inputs.service,
        id:localStorage.getItem('userId')
      })  
      if(data?.success){
        
        navigate("/allbookings")
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
        <Navbar />
        <div>
            <h1 className='text-center p-4 text-[18px]   font-semibold'>Book a Service</h1>
        </div>
        <form
      action=""
      onSubmit={handleSubmit}
      class="w-full items-center justify-center flex flex-col p-10 text-white font-semibold text-[20px]"
    >
      <div class="mb-5">
        <label for="email">Email</label><br />
        <input
          type="email"
          name='email'
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email"
          class="border-2 focus:outline-blue-400 w-[300px] mt-3 p-1 focus:border-green-400 border-green-400 bg-black"
          required
        /><br />
      </div>
      <div class="mb-5">
        <label for="Expected Date Of Delievery">Bike Name</label><br />
        <input
          type="text"
          name='bikeName'
          value={inputs.bikeName}
          onChange={handleChange}
          placeholder="Bike Name"
          class="border-2 focus:outline-blue-400 w-[300px] mt-3 p-1 focus:border-green-400 border-green-400 bg-black"
          required
        /><br />
      </div>
      <div class="mb-5">
        <label for="Expected Date Of Delievery">Expected Date Of Delievery</label><br />
        <input
          type="Date"
          name='expectedDate'
          value={inputs.expectedDate}
          onChange={handleChange}
          placeholder="12th Mark"
          class="border-2 focus:outline-blue-400 w-[300px] mt-3 p-1 focus:border-green-400 border-green-400 bg-black"
          required
        /><br />
      </div>
      <div class="mb-5">
        <label for="rollno">Service : </label><br />
        <input
          type="text"
          name='service'
          value={inputs.service}
          onChange={handleChange}
          placeholder="Service"
          class="border-2 focus:outline-blue-400 w-[300px] mt-3 p-1 focus:border-green-400 border-green-400 bg-black"
          required
        /><br />
        <br />
        <div class="mt-4">
            <button type='submit' class="pl-2 pr-2 pt-1 pb-1 border-2 rounded-md bg-green-400 text-black font-semibold border-green-400 hover:bg-[#111] hover:text-green-400 hover:border-green-400">Book</button>
            <button type='reset' class="pl-2 pr-2 pt-1 pb-1 rounded-md bg-black border-2 border-green-400 ml-2  text-green-400 hover:bg-green-400 hover:text-[#111]">Cancel</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default BookService