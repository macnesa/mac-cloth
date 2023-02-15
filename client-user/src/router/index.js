import { createBrowserRouter } from "react-router-dom"

import Container from "../pages/Container"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
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
          path: "detail/:id",
          element: <Detail />
        }
      ]
    },
  ]
)

export default router