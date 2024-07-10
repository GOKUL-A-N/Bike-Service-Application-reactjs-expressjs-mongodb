import React,{useState , useEffect} from 'react'
// import { history } from '../constants'
import axios from 'axios'
import ServiceCard from '../components/ServiceCard'
import Navbar from '../components/Navbar'

const AllBookings = () => {

    const [services,setServices] = useState([])


    const userServices = async () => {
        try{

            const id = localStorage.getItem('userId')
            const {data} = await axios.get(`http://localhost:3000/service/userService/${id}`);

            if(data?.success){
                setServices(data?.userServices.service);
            }

        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        userServices()
    },[])

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex flex-col items-center justify-start mt-10  w-full'>
            <h1 className=' text-[28px] md:text-[38px] font-bold'> Bookings</h1><br />
            <ServiceCard history={services} />
        </div>
        </div>
      )
}

export default AllBookings