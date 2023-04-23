import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header/Header";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Statistics from "./Statistics/Statistics";
import Applied from "./Applied Jobs/Applied";
import Blog from "./Blog/Blog";
import Featured from "./Featured/Featured";
import Error from "./Error Page/Error";
import Software from "./Job Details/Software/Software";
import Product from "./Job Details/Productmanager/Product";
import Data from "./Job Details/Data Scientist/Data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('jobcatagory.json'),
        // loader: ()=> fetch('featuredjob.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjobs",
        element: <Applied></Applied>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path:"/error",
        element:<Error></Error>,
      },
      {
        path: "/abc1",
        element: <Software></Software>,
      },
      {
        path: "abc2",
        element:<Product></Product>,
      },
      {
        path: "abc3",
        element:<Data></Data>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
