import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
