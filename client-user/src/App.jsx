
import {
  createBrowserRouter,
  RouterProvider, 
  useLocation
} from "react-router-dom";

import { useEffect } from "react";

import ScrollToTop from "./components/others/scroll-to-top"; 

import router from "./router"
import { Provider } from "react-redux"
import store from "./store"

// import ScrollToTop from "./components/others/scroll-to-top"




export default function App() {
 
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  
  // const BrowserRouter = createBrowserRouter()

  return (
    <Provider store={store} >
      {/* <BrowserRouter> */}
        {/* <ScrollToTop /> */} 
        <RouterProvider router={router} />
      {/* </BrowserRouter> */}
    </Provider>
  );
}


