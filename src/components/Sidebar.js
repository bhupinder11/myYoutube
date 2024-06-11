import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isDarkMode } from '../utils/modeSlice'

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const isDarkMode = useSelector(store => store.mode.isDarkMode)

    if(!isMenuOpen) return null;
 
  return (
    <div className={`${isDarkMode && "dark"}`}>
    {/* // <div className="dark"> */}
    <div className="w-44 shadow-lg cursor-pointer dark:bg-black ">
        <ul className='border-b pb-3' >
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'><Link to="/">Home</Link></li>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>Shorts</li>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>Subscriptions</li>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>YouTube Music</li>
        </ul>
        <ul className='mt-4'>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>Your Channel</li>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>Shorts</li>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>Subscriptions</li>
            <li className='hover:bg-gray-100 border border-white rounded-lg p-1 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800'>YouTube Music</li>
        </ul>
    </div>
    </div>
  )
} 

export default Sidebar