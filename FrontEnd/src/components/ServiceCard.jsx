import React from 'react'

const ServiceCard = (props) => {
  return (
    <table>
            {props.history.map((prop) => {
                return (
                    <tr key={prop.id} className=' rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold tabledata'>
                    <td className='p-3 pr-28 '>{prop.service}</td>
                    <td className='p-3 '>{prop.expectedDate}</td>
                    <td className='p-3' style={{ color: prop.status === "completed" ? "#2ef171" : prop.status === "ready for delievery" ? "orange" : "red" }}>{prop.status}</td>
                </tr>
                )
            } )}
    </table>
  )
}

export default ServiceCard