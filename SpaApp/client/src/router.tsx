import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
