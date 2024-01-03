import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Lazy Loading
//Dynamic Bundling
//on demand loading

const Grocery = lazy(() => {
  return import("./components/Grocery.js");
});

const About = lazy(() => {
  return import("./components/About.js");
});

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  // authentication code

  useEffect(() => {
    // API Call
    const data = {
      name: "Zaid",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className='app'>
        <Header />
        {/*if path is / -> <Body/>*/
        /*if path is /about -> <About/>*/}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Fallback Suspense</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//initially <Grocery /> not loaded
//React not getting Grocery to load
