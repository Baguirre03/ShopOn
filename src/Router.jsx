import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./components/LoginSignup/SignIn";
import WelcomeDriver from "./components/LoginSignup/DriverSignup";
import Shop from "./components/ShoppingPages/Shop";
import ClothesMain from "./components/ShoppingPages/ClothesMain";
import DriverInfo from "./components/LoginSignup/Driverinfo";

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
      element: <Shop></Shop>,
    },
    {
      path: "category/:name",
      element: <ClothesMain></ClothesMain>,
    },
    {
      path: "driver/info",
      element: <DriverInfo></DriverInfo>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
