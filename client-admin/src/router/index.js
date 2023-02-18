import { createBrowserRouter } from "react-router-dom"

import Container from "../pages/Container"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
import LoginPage from "../pages/Login"


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
          path: "detail/:id",
          element: <Detail />
        }
      ]
    },
  ]
)

export default router