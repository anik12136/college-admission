import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import College from "./Pages/College/College";
import Admission from "./Pages/Admission/Admission";
import MyCollage from "./Pages/MyCollage/MyCollage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
    }, 
    {
        path: 'colleges',
        element: <College></College>
    }, 
    {
        path: 'admission',
        element: <Admission></Admission>
    }, 
    {
        path: 'myCollage',
        element: <MyCollage></MyCollage>
    }, 
    {
        path: 'login', 
        element: <Login></Login>
    }, 
    {
        path: 'signup', 
        element: <SignUp></SignUp>
    },
      ] }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);
