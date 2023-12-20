import "../src/styles/App.css";
import "../src/styles/bootstrap.min.css";

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "../src/pages/UtilPages/Loader";
import PageNotFound from "./pages/UtilPages/PageNotFound";

const Settings = lazy(() => import("./pages/Authorized/Settings"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Profile = lazy(() => import("./pages/Public/Profile"));
const Login = lazy(() => import("./pages/Public/Login"));
const Register = lazy(() => import("./pages/Public/Register"));
const Article = lazy(() => import("./pages/Public/Article"));
const Categories = lazy(() => import("./pages/Public/Categories"));
const Home = lazy(() => import("./pages/Public/Home"));

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "article/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <Article />
            </Suspense>
          ),
        },
        {
          path: "categories/:category",
          element: (
            <Suspense fallback={<Loader />}>
              <Categories />
            </Suspense>
          ),
        },
        {
          path: "user/:userId",
          element: (
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "settings",
          element: (
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<Loader />}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
