import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";
import { useSelector } from 'react-redux'

const WatchPage = () => {
  // const params = useParams();  we cannot use useParams because this can only read values which are after / but here we are not using / and using ?v=
  // console.log(params)

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  //by using searchParams we will get the video id and we can use it to load the video

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  return (
    <div className={`${isDarkMode && "dark"}`}>
    <div className="w-full dark:bg-black">
    <div className="mr-4 flex w-full dark:bg-black">
      <div>
      <iframe
      className="rounded-lg shadow-xl"
        width="800"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="flex flex-col-reverse border h-[450px] border-slate-300 w-full ml-8 p-2 bg-slate-100 rounded-lg overflow-y-scroll dark:bg-black dark:border-gray-800">
        <Livechat/>
      </div>
    </div>
    <CommentsContainer />
    </div>
    </div>
  );
};

export default WatchPage;
