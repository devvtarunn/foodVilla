import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Restaurantmenu from "./src/components/Restaurantmenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const Applayout = () => {
    return (
        <div className=" abcd">

            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    )
}


const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        children: [
    {
        path: "/",
        element: <Body />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/restaurant/:resId",
        element: < Restaurantmenu />,
    },
  ],
 },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter}/>);