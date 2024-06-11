import React from 'react'
import { useSelector } from 'react-redux'

const Button = ({name}) => {

  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  return (
    <div className={`${isDarkMode && "dark"}`}>
        <button className='px-4 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 border dark:bg-gray-700 dark:border-gray-800 dark:text-white dark:hover:bg-gray-900 '>{name}</button>
    </div>
  )
}

export default Button 