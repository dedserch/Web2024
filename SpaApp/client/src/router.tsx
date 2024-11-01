import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Users } from "./pages/Users"
import { User } from "./pages/User"

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
      },
      {
        path: "/users/:id/albums",
        element: <User />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
