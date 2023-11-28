import "../src/styles/App.css";
import "../src/styles/bootstrap.min.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./components/PageNotFound";
// import AdminControl from "./pages/Admin/AdminControl";
// import Home from "./pages/Admin/Home";
// import Profile from "./pages/Admin/Profile";
// import Settings from "./pages/Admin/Settings";
// import UserPost from "./components/UserPost";

import PublicHome from "./pages/Public/PublicHome";
import Article from "./components/Article/Article";
import BlogList from "./components/BlogList/BlogList";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./components/PublicLayout/PublicLayout";
import Profile from "./pages/Profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <PublicHome />,
        },
        {
          path: "article/:id",
          element: <Article />,
        },
        {
          path: "categories/:category",
          element: <BlogList />,
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
    //       path: "admin-panel",
    //       element: <AdminControl />,
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

export default App;
