import { useState, Fragment, useEffect } from "react"
import { Link, useLocation, useRouteMatch } from "react-router-dom"
import A from "./typography/Anchor"

export default function Header(props) {

  const location = useLocation()

  const [headerStyle, useheaderStyle] = useState({})

  const [black, setblack] = useState(
    {
      backgroundColor: "black"
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
      class=" text-white h-[15vh] 
      fixed w-full hover:bg-black | grid z-10 grid-rows-[1fr_0.4fr] ">
      {/* <Link to="/" > <a href="#">Home</a> </Link> */}

      {/* border border-red-200 */}
      <div className=" | grid  grid-flow-col justify-around items-center ">
        <p className="text-[2em] font-bold" >MACLO</p>

        <div className="flex gap-10">
          <p>MEN</p>
          <p>KIDS</p>
        </div>

        <div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>

      </div>

      {/* border border-red-800 */}
      <div className=" flex gap-10 justify-center ">
        <a>NEW IN</a>
        <a>CLOTHING</a>
        <a>SHOES</a>
        <a>ACCESSORIES</a>
        <a>THE SUIT</a>
        <a>OUR BRANDS</a>
      </div>
    </div>
  )
}
