import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
