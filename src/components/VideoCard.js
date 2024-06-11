import React from 'react'
import { useSelector } from 'react-redux'

const VideoCard = ({info}) => {
    // console.log(info)
    // const {snippet , statistics} = info;
    // const {thumbnails, channelTitle, title} = snippet;
    const isDarkMode = useSelector(store => store.mode.isDarkMode)

    return  (
        <div className={`${isDarkMode && "dark"}`}>
        <div className='w-80 h-80 border-white m-2 p-3 hover:bg-gray-100 border shadow-lg cursor-pointer dark:border-gray-800 dark:hover:bg-gray-950'>
           <img className='border rounded-lg dark:border-gray-800' src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
           <h3 className='font-bold dark:text-white'>{info?.snippet?.title}</h3>
           <h3 className='text-slate-600 dark:text-slate-500 '>{info?.snippet?.channelTitle}</h3>
           <h3 className='text-slate-600 dark:text-slate-500'>{info?.statistics?.viewCount} views</h3>
        </div>
        </div>
    )
}

export default VideoCard;