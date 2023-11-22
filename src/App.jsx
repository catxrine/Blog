import "./styles/App.css";
import "./styles/bootstrap.min.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./components/PageNotFound";
import AdminControl from "./pages/AdminControl";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserPost from "./components/UserPost";
import HomePage from "./components/HomePage/HomePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "",
          element: (
            <UserPost
              author="catxrin"
              likes="0"
              title="Lorem Ipsum"
              description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
          dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
          nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
          consectetur quis. Etiam faucibus est risus, ac condimentum mauris
          consequat nec. Curabitur eget feugiat massa"
            />
          ),
        },

        {
          path: "admin-panel",
          element: <AdminControl />,
        },

        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
