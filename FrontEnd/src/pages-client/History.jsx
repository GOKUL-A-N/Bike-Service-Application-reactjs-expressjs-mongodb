import React,{useState , useEffect} from "react";
// import { history } from "../constants";
import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import axios from "axios";

const History = () => {

  const [services,setServices] = useState([])

  const userServicesHistory = async () => {
    try{
      const id = localStorage.getItem('userId')

      const {data} = await axios.get(`http://localhost:3000/service/history/${id}`);

      if(data?.success){
        setServices(data?.userHistory.service)
      }

    }catch(err){
      console.log(err);
    }
  } 

  useEffect(() => {
    userServicesHistory();
  },[])


  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-start mt-10 w-full">
        <h1 className=" text-[28px] md:text-[38px] font-bold">History</h1>
        <br />
        <ServiceCard history={services} />
      </div>
    </div>
  );
};

export default History;
