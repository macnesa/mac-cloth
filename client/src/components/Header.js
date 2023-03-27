import { useState, Fragment, useEffect } from "react"
import { Link, useLocation, useRouteMatch } from "react-router-dom"
import A from "./typography/Anchor"

import "../style/custom.css"

export default function Header(props) {

  const location = useLocation()

  const [headerStyle, useheaderStyle] = useState({})

  const [black, setblack] = useState(
    {
      backgroundColor: "black",
      border: "1px solid black"
    }
  )

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     window.addEventListener('scroll', () => {
  //       if (window.pageYOffset > 300) {
  //         setblack({
  //           backgroundColor: "black"
  //         })
  //       } else if (window.pageYOffset == 0) {
  //         setblack({})
  //       }
  //     }); 
  //     console.log("KONTOLL");

  //   }
  // }, [])



  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (location.pathname == "/") {
  //       console.log(location);
  //       console.log(location.pathname === "/");
  //       // if (window.pageYOffset > 300) {
  //       //   setblack({
  //       //     backgroundColor: "black"
  //       //   })
  //       // } else if (window.pageYOffset == 0) {
  //       //   setblack({})
  //       // }
  //     }
  //     // console.log("User is scrolling", scrollPosition); 
  //   });
  // }, [location.pathname])




  return (
    //  border border-black transition duration-100 ease-out
    <div style={black}
      class=" text-white h-[5.5rem] 
      fixed w-full hover:bg-black | grid z-10 grid-rows-[1fr_0.4fr] ">
      {/* <Link to="/" > <a href="#">Home</a> </Link> */}

      {/* border border-red-200 */}
      <div className=" | grid px-10 grid-flow-col justify-between items-center ">
        <Link to="/">
          <p className="text-[2em] font-bold cursor-pointer tracking-widest " >MACLO</p>
        </Link>

        <div className="child:cursor-pointer child:hover:font-bold flex gap-10">
          <Link to="/men">
            <p className="bottomline relative " >MEN</p>
          </Link>
          <Link to="/kid">
            <p className="bottomline relative " >KIDS</p>
          </Link>
        </div>

        <div className=" child:cursor-pointer flex gap-5">
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="location-outline"></ion-icon>
          <ion-icon name="bookmarks-outline"></ion-icon>
        </div>

      </div>

      {/* border border-red-800 */}
      <div className="flex child:text-[0.8rem] gap-10 justify-center mb-1 ">
        <a className="bottomline relative " >NEW IN</a>
        <a className="bottomline relative " >CLOTHING</a>
        <a className="bottomline relative " >SHOES</a>
        <a className="bottomline relative " >ACCESSORIES</a>
        <a className="bottomline relative " >THE SUIT</a>
        <a className="bottomline relative " >OUR BRANDS</a>
      </div>
    </div>
  )
}
