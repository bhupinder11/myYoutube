import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import {toggleMode, isDarkMode} from "../utils/modeSlice";
// import { isDarkMode } from "../utils/modeSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery)
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false)

  const getSearchSuggestion = async () => {
    try{
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      // console.log(json[1]);
  setSuggestions(json[1]);
    }
    catch{
      
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  }

return (
    <div className={`${isDarkMode && "dark"}`}>
    <div className="grid grid-flow-col p-2 shadow-lg relative dark:bg-black dark:shadow-slate-900">
    
           <div className="flex col-span-1">
           <img
             onClick={() => toggleMenuHandler()}
             className="w-12 hover:bg-gray-100 border border-white rounded-full cursor-pointer dark:hidden"
             src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
             alt="menu"
           />
           <img
             onClick={() => toggleMenuHandler()}
             className="w-12 hover:bg-gray-100 border border-white rounded-full cursor-pointer hidden dark:block dark:border-black"
             src="https://cdn2.vectorstock.com/i/1000x1000/33/01/hamburger-like-menu-dark-mode-glyph-ui-icon-vector-43353301.jpg"
             alt="menu"
           />
           <img
             className="w-24 mx-2 dark:hidden"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEX0BUn-ArzPU6j74gY_BmCUTZijPnMwy9w&s"
             alt="logo"
           />
           <img
             className="w-24 mx-2 hidden dark:block"
             src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg"
             alt="logo"
           />
         </div>

          <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-300 py-2 px-4 rounded-l-full dark:border-gray-800 dark:bg-black dark:text-white"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-300 py-2 px-4 rounded-r-full bg-gray-100 hover:bg-gray-200 dark:bg-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-800">
          Search
        </button>
        <div className=" absolute bg-white border ml-2 border-gray-100 shadow-lg rounded-lg dark:bg-black dark:text-white dark:border-black">
          <ul>
            {showsuggestions && suggestions.map((s)=> <li key={s} className="w-[430px] ml-2 p-1 hover:bg-gray-100 border border-white dark:border-gray-800 dark:border-l-black dark:hover:bg-gray-800">{s}</li>)}
          </ul>
        </div>
      </div>

      <button  onClick={() => toggleModeHandler()} className="bg-black mr-10 border rounded-full w-12 h-12 text-white dark:text-black dark:bg-white">{isDarkMode ? "LHT" : "DRK"}</button>
 
      <div className="col-span-1">
        <img
          className="w-10 dark:hidden"
          src="https://cdn-icons-png.freepik.com/256/64/64572.png?semt=ais_hybrid"
          alt="user"
        />
         <img
          className="w-10 hidden dark:block"
          src="https://png.pngtree.com/png-vector/20220726/ourlarge/pngtree-dark-mode-glyph-ui-icon-for-choosing-a-contact-photo-vector-png-image_47716494.jpg"
          alt="user"
        />
      </div>
    </div>
    </div>
  );
};

export default Head;
