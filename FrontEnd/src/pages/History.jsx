import React from 'react'
import { history } from '../constants'

const History = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h1 className=' text-[28px] md:text-[38px] font-bold'>History</h1><br />
        <table>
            {history.map((his , index) => {
                return (
                    <tr key={index} className=' rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold hover:glassmorphism'>
                    <td className='p-3 pr-28'>{his.serviceName}</td>
                    <td className='p-3'>{his.date}</td>
                    <td className={`p-3`} style={{ color: his.status === "completed" ? "green" : his.status === "ready for delievery" ? "orange" : "red" }}>{his.status}</td>
                </tr>
                )
            } )}
        </table>
    </div>
  )
}

export default History