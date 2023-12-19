import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import AcademicAchievements from "../components/AcademicAchievements/AcademicAchievements";

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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/achievements",
        element: <AcademicAchievements></AcademicAchievements>,
      },
    ],
  },
]);
