import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {toast} from "react-hot-toast"

const Login = () => {

  const navigate = useNavigate();

  const [inputs,setInputs] = useState({
    email:"",
    mobile:"",
    password:"",
  });


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post('http://localhost:3000/user/login',{
        email: inputs.email,
        mobile: inputs.mobile,
        password: inputs.password
      })

      if(data.success){
        localStorage.setItem('userId', data?.user._id);
        toast.success("User Login Success");
        navigate("/home");
      }
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[300px] h-auto block  glassmorphism'>
            <h1 className='text-center p-4 text-[18px]   font-semibold'>Log In</h1>
            <form onSubmit={handleSubmit} action="" className='flex p-4 flex-col justify-between items-center'>
                <input type='email' name='email' onChange={handleChange} value={inputs.email} placeholder='Email' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <input type='text' name='mobile' value={inputs.mobile} onChange={handleChange} placeholder='Mobile' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <input type='password' name='password' value={inputs.password} onChange={handleChange} placeholder='Password' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <button type='submit' className='pl-4 pr-4 m-3 pt-1 pb-1 bg-[#2ef171] rounded-md'>Login</button>
                <p className='text-[12px]'>Don{"'"}t have an account?<span className='underline text-[#2ef171]'><a href="">Sign Up</a></span></p>
            </form>
        </div>
    </div>
  )
}

export default Login