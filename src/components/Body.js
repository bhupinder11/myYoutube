import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Breadcrumbs from './Breadcrumbs'


const Body = () => {

  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div>
            <Breadcrumbs/>
      </div>
      
    <div className="grid grid-flow-col p-2 dark:bg-black ">
      
      <Sidebar />
      <Outlet/>
    </div>
    </div>
  )
}

export default Body