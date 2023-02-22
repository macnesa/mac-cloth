import { useState, Fragment } from "react"
import { Link } from "react-router-dom"

import A from "./typography/Anchor"

export default function Header(props) {

  const [headerStyle, useheaderStyle] = useState({})
  
  const [black, setblack] = useState({})
  
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if(scrollPosition > 300) {
      setblack({ 
        backgroundColor: "black"
      })
    } else if(scrollPosition == 0) {
      setblack({})
    }
    console.log("User is scrolling", scrollPosition);
    // Add your logic here
  });
  
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
