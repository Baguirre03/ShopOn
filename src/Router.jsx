import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./components/SignIn";
import WelcomeDriver from "./components/DriverSignup";

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
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
