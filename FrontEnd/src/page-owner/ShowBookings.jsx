import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
// import { ownerInfo } from "../constants";

const ShowBookings = () => {

  const [services,setServices] = useState([])

  const navigate = useNavigate()

  const allServices = async () => {
    try{
      const {data} = await axios.get("http://localhost:3000/service/allService")

      if(data?.success){
        setServices(data?.serv)
        id = data?.serv._id
        console.log(services);
      }

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    allServices();
  },[])

  const handleClick = async (id) => {
    await axios.put(`http://localhost:3000/service/editUserStatus/${id}`)
    navigate("/ownerbookings")
  }

  const handleChange = async (id) => {
    await axios.put(`http://localhost:3000/service/editUserReady/${id}`)
    navigate("/ownerbookings")
  }

  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-start mt-10  w-full">
          <h1 className=" text-[28px] md:text-[38px] font-bold">
             Bookings List
          </h1>
          <br />
          <table>
            {services.map((h) => {
              return (
                <tr
                  key={h._id}
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold tabledata"
                >
                  <td className="p-2 text-[8px] md:text-[15px]  md:pr-8 ">{h.bikeName}</td>
                  <td className="p-2 text-[8px] md:text-[15px] md:pr-8 ">{h.email}</td>
                  <td className="p-2 text-[8px] md:text-[15px] md:pr-8 ">{h.service}</td>
                  <td className="p-2 ">{h.expectedDate}</td>
                  <td
                    className="p-3"
                    style={{
                      color:
                        h.status === "completed"
                          ? "#2ef171"
                          : h.status === "ready for delievery"
                          ? "orange"
                          : "red",
                    }}
                  >
                    {h.status}
                  </td>
                  <td>
                    <button className="p-1 md:p-3 hover:animate-pulse bg-[#d2da34] w-fit text-black font-semibold" onClick={() => handleChange(h._id)}>ready</button>
                  </td>
                  <td>
                    <button className="p-1 md:p-3 hover:animate-pulse bg-[#2ef171] w-fit text-black font-semibold rounded-r-md" onClick={() => handleClick(h._id)}>completed</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowBookings;
