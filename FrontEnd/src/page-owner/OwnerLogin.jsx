import React,{useState , useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {toast} from 'react-hot-toast'

const OwnerLogin = () => {

  const navigate = useNavigate()

  const [ownerLogins  , setOwnerLogins] = useState({
    "email" :"",
    "password" :""
  })

  const handleChange = (e) => {
    setOwnerLogins((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      const {data} = await axios.post('http://localhost:3000/owner/login',{
        email: ownerLogins.email,
        password: ownerLogins.password,
      })

      if(data?.success){
        localStorage.setItem('ownerId',data?.owner._id);
        toast.success("Owner Login successfully ");
        navigate("/ownerbookings");
      }

    }catch(err){
      console.log(err);
    }
  }
    

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[300px] h-auto block  glassmorphism'>
            <h1 className='text-center p-4 text-[18px]   font-semibold'>Log In</h1>
            <form action="" onSubmit={handleSubmit} className='flex p-4 flex-col justify-between items-center'>
                <input type='email' placeholder='Email' name='email' value={ownerLogins.email} onChange={handleChange} className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                {/* <input type='text' placeholder='Mobile' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br /> */}
                <input type='password' placeholder='Password' name='password' value={ownerLogins.password} onChange={handleChange} className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <button type='submit' className='pl-4 pr-4 m-3 pt-1 pb-1 bg-[#2ef171] rounded-md'>Login</button>
                {/* <p className='text-[12px]'>Don{"'"}t have an account?<span className='underline text-[#2ef171]'><a href="">Sign Up</a></span></p> */}
            </form>
        </div>
    </div>
  )
}

export default OwnerLogin