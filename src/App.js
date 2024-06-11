import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { isDarkMode } from "../src/utils/modeSlice";
// import { useSelector } from 'react-redux'

const appRouter =createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    },
  ],
},
]); 

function App() {

  // const isDarkMode = useSelector(store => store.mode.isDarkMode)
  

  return (

    <Provider store={store}>
    
      <div className="">
      <Head />
      <RouterProvider router={appRouter}/>
      </div>
      
    </Provider>
  );
}

export default App;
 