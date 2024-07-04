import React from 'react'

const ServiceCard = (props) => {
  return (
    <table>
            {props.history.map((prop) => {
                return (
                    <tr key={prop.id} className=' rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold tabledata'>
                    <td className='p-3 pr-28 '>{prop.serviceName}</td>
                    <td className='p-3 '>{prop.date}</td>
                    <td className='p-3' style={{ color: prop.status === "completed" ? "green" : prop.status === "ready for delievery" ? "orange" : "red" }}>{prop.status}</td>
                </tr>
                )
            } )}
    </table>
  )
}

export default ServiceCard