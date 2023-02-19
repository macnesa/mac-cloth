
import { Outlet } from "react-router"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function Container() {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <div class="p-4 sm:pl-64">
        <div class="p-4 ">
      <Outlet /> 
        </div>
      </div>
    </>
  )
}