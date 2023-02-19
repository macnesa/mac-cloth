import { createBrowserRouter } from "react-router-dom"

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
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <LoginPage/>,
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
  ]
)

export default router