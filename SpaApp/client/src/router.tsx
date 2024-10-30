import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Users } from "./pages/Users"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
