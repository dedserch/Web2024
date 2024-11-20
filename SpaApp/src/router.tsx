import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Users } from "./pages/Users/Users"
import { User } from "./pages/Users/User"
import { Albums } from "./pages/Albums/Albums"
import { Album } from "./pages/Albums/Album"

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
        element: <Users />,
      },
      {
        path: "/users/:id/albums",
        element: <User />,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
      {
        path: "/albums/:albumId",
        element: <Album />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
