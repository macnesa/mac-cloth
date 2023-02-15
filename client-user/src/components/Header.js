import { useState, Fragment } from "react"


export default function Header(props) {

  const [headerStyle, useheaderStyle] = useState(
    {
      background: "white",
      color: "red",
      cursor: "pointer"
    }
  )

  return (
    <div
      class=" text-white h-[45px] px-6 gap-6 fixed w-full bg-[#1f2124] shadow-lg | flex justify-end items-center  z-10 ">

      <a href="#">Home</a>

      <a href="#">Bookmarks</a>

      <a href="#">Logout</a>

      <a href="#">Log In</a>
    </div>
  )
}
