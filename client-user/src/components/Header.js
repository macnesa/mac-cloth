import { useState, Fragment } from "react"
import { Link } from "react-router-dom"


export default function Header(props) {

  const [headerStyle, useheaderStyle] = useState({})

  return (
    <div
      class=" text-white h-[15vh] fixed w-full border border-black  shadow-lg | grid z-10 grid-rows-[1fr_0.4fr] ">
      {/* <Link to="/" > <a href="#">Home</a> </Link> */}

      <div className="border border-red-200 | grid  grid-flow-col justify-around items-center ">
        <p className="text-[2em] font-bold" >MACLO</p>

        <div className="flex gap-10">
          <p>MEN</p>
          <p>KIDS</p>
        </div>

        <div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>

      </div>
    
      <div className="border border-red-800 flex gap-10 justify-center ">
        <p>NEW IN</p>
        <p>CLOTHING</p>
        <p>SHOES</p>
        <p>ACCESSORIES</p>
        <p>THE SUIT</p>
        <p>OUR BRANDS</p>
      </div>
    </div>
  )
}
