import React from 'react'
import { useSelector } from 'react-redux'

const ChatMessage = ({name,  message}) => {

  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  return (
    <div className={`${isDarkMode && "dark"}`}>
    <div className='flex mt-3 shadow-sm dark:text-white'>
        <img
    className="w-6 h-6 dark:hidden"
    src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
    alt="user"
  />
  <img
    className="w-6 h-6 hidden dark:block "
    src="https://us.123rf.com/450wm/tifani1/tifani11801/tifani1180100032/93016694-user-icon-vector-illustration-on-black-background.jpg"
    alt="user"
  />
  <p className='ml-2 font-bold'>{name}</p>
  <p className='ml-3'>{message}</p>
  </div>
  </div>
  )
}

export default ChatMessage;