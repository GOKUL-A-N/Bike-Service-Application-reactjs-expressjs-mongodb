import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-hot-toast'
import { Link } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate()

  const [inputs , setInputs] = useState({
    email:"",
    mobile:"",
    password:"",
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

      const {data} = await axios.post("http://localhost:3000/user/register",{
        email: inputs.email,
        mobile: inputs.mobile,
        password: inputs.password
      })

      if(data?.success){
        localStorage.setItem("userId",data?.user._Id);
        toast.success("User registration successfully");
        navigate("/home")
      }

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[300px] h-auto block glassmorphism'>
            <h1 className='text-center p-4 text-[18px]   font-semibold'>Sign Up</h1>
            <form action="" onSubmit={handleSubmit} className='flex p-4 flex-col justify-between items-center'>
                <input type='email' placeholder='Email' name='email' value={inputs.email} onChange={handleChange} className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <input type='text' placeholder='Mobile' name='mobile' value={inputs.mpbile} onChange={handleChange} className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <input type='password' placeholder='Password' name='password' value={inputs.password} onChange={handleChange} className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <button type='submit' className='pl-4 pr-4 m-3 pt-1 pb-1 bg-[#2ef171] rounded-md font-semibold'>Sign Up</button>
                <p className='text-[12px]'>Have an account?<span className='underline text-[#2ef171]'><Link to="/">Login</Link></span></p>
            </form>
        </div>
    </div>
  )
}

export default SignUp