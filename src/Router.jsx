import "../src/styles/App.css";
import "../src/styles/bootstrap.min.css";

import Home from "./pages/Public/Home";
import Article from "./pages/Public/Article";
import Categories from "./pages/Public/Categories";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Public/Profile";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
import PageNotFound from "./pages/UtilPages/PageNotFound";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "article/:id",
          element: <Article />,
        },
        {
          path: "categories/:category",
          element: <Categories />,
        },
        {
          path: "user/:userId",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
