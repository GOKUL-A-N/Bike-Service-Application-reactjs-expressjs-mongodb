import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[300px] h-auto block  glassmorphism'>
            <h1 className='text-center p-4 text-[18px]   font-semibold'>Log In</h1>
            <form action="" className='flex p-4 flex-col justify-between items-center'>
                <input type='email' placeholder='Email' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <input type='text' placeholder='Mobile' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <input type='password' placeholder='Password' className='bg-transparent outline-0 border-b-2 border-[#2ef171] ' /><br />
                <button type='submit' className='pl-4 pr-4 m-3 pt-1 pb-1 bg-[#2ef171] rounded-md'>Login</button>
                <p className='text-[12px]'>Don{"'"}t have an account?<span className='underline text-[#2ef171]'><a href="">Sign Up</a></span></p>
            </form>
        </div>
    </div>
  )
}

export default Login