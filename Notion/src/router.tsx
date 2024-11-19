import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { NotFound } from "./pages/NotFound/NotFound"
import { Layout } from "./components/Layout/Layout"

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
