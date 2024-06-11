import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { GOOGLE_API_KEY } from "../utils/Constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [count, setCount] = useState(9)

  useEffect(() => {
    getVideos();
  }, [count]);

  const getVideos = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${count}&regionCode=IN&key=`+ GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json)
    // setVideos(json.items);
    setVideos([...json.items])
  console.log(videos)
  };

  const handleScroll = async() => {
    try{
      if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
        setCount((prev) => prev + 9)
      }
    }
    catch{

    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return videos.length === 0 ?(
    <Shimmer/>
  ) : (
    <div className="flex flex-wrap">
      {videos && videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>   
        {/* these are called query params for this we use useSearchParams  */}
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
