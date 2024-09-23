// import React from 'react'
import Navbar from "./Navbar"
import Sidebar from './Sidebar'
import CardContainer from './CardContainer'
import SearchBar from './SearchBar'

const DisplayCars = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <div className='flex'>
      <Sidebar/>
      <CardContainer/>
      </div>
    </div>
  )
}

export default DisplayCars
