import React from "react";
import { ownerInfo } from "../constants";

const ShowBookings = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-start mt-10  w-full">
          <h1 className=" text-[28px] md:text-[38px] font-bold">
             Bookings List
          </h1>
          <br />
          <table>
            {ownerInfo.map((h, index) => {
              return (
                <tr
                  key={index}
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold tabledata"
                >
                  <td className="p-3 pr-28 ">{h.serviceName}</td>
                  <td className="p-3 ">{h.date}</td>
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
                  <td className="p-3">
                    {h.userEmail}
                  </td>
                  <td>
                    <button className="p-3 hover:animate-pulse bg-[#2ef171] w-fit text-black font-semibold rounded-r-md">Edit Status</button>
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
