import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  return (
    <div className={`${isDarkMode && "dark"}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer