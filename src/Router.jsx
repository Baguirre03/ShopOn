import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn";
import WelcomeDriver from "./components/DriverSignup";
import Shop from "./components/Shop";
import { element } from "prop-types";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "signup-driver",
      element: <WelcomeDriver driver={true}></WelcomeDriver>,
    },
    {
      path: "signup",
      element: <WelcomeDriver></WelcomeDriver>,
    },
    {
      path: "login",
      element: <SignIn></SignIn>,
    },
    {
      path: "shop/:name",
      element: <Shop name={name}></Shop>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
