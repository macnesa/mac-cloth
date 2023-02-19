import { createBrowserRouter, redirect } from "react-router-dom"

import Container from "../pages/Container"
import Category from "../pages/Category"
import Home from "../pages/Home"
import LoginPage from "../pages/Login"
import AddAdminPage from "../pages/Add-new-admin"
 

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Container />, 
      loader: () => {
        if(!localStorage.getItem('myToken')) {
          return redirect('/login')
        }
        return null
      },
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "category",
          element: <Category />
        },
        {
          path: "new-admin", 
          element: <AddAdminPage />
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage/>,
      loader: () => {
        if(localStorage.getItem('myToken')) {
          return redirect('/')
        }
        return null
      },
    },
  ]
)

export default router