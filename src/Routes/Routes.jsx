import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home/Home";
import Projects from "../components/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
    ],
  },
]);
