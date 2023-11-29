import "../src/styles/App.css";
import "../src/styles/bootstrap.min.css";

import AdminControl from "./pages/Admin/AdminControl";
// import Profile from "./pages/Admin/Profile";
// import Settings from "./pages/Admin/Settings";
// import UserPost from "./components/UserPost";

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
    // {
    //   path: "admin-panel",
    //   element: <AdminControl />,
    // },
    // {
    //   path: "/article",
    //   element: <Article />,
    // },
    // {
    //   path: "/home",
    //   element: <Home />,
    //   children: [
    //     {
    //       path: "",
    //       element: (
    //         <UserPost
    //           author="catxrin"
    //           likes="0"
    //           title="Lorem Ipsum"
    //           description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
    //       dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
    //       nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
    //       consectetur quis. Etiam faucibus est risus, ac condimentum mauris
    //       consequat nec. Curabitur eget feugiat massa"
    //         />
    //       ),
    //     },

    //     {
    //       path: "profile",
    //       element: <Profile />,
    //     },
    //     {
    //       path: "settings",
    //       element: <Settings />,
    //     },
    //   ],
    // },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
