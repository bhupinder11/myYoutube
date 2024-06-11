import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const Livechat = () => {

  const [liveMessage, setLiveMessage] = useState("")

  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      // console.log("api calling")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(15),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const isDarkMode = useSelector(store => store.mode.isDarkMode)

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="dark:bg-black">
        {chatMessage.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="mt-4 shadow-sm w-[450px] rounded-lg h-11 py-2 dark:bg-black" onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Bhupinder",
            message: liveMessage,
          })
        )
        // console.log("submit " + liveMessage)
        setLiveMessage("")
      }}>
        <input className="hover:bg-gray-100 border rounded-lg border-gray-300 mx-2 items-center pl-2 w-80 dark:bg-black dark:text-white dark:border-gray-800" type="text" value={liveMessage} onChange={(e)=>{
          setLiveMessage(e.target.value)
        }}/>
        <button className="border border-green-300 bg-green-200 ml-2 mx-2 px-2 text-slate-700 rounded-lg hover:bg-green-300">Send</button>
      </form>
    </div>
  );
};

export default Livechat;
