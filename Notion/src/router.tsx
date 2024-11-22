import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { NotFound } from "./pages/NotFound/NotFound"
import { Layout } from "./components/Layout/Layout"
import { Auth } from "./pages/Auth/Auth"
import { RequireAuth } from "./components/shared/RequireAuth/RequireAuth"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
