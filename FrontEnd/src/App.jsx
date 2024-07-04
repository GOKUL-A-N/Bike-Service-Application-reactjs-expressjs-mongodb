import React from 'react'
import Home from "./pages-client/Home"
import History from "./pages-client/History"
import AllBookings from "./pages-client/AllBookings"
import Login from "./pages-client/Login"
import SignUp from "./pages-client/SignUp"
import {Routes , Route} from "react-router-dom"

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/allbookings' element={<AllBookings />} />
      </Routes>
    </div>
  )
}

export default App