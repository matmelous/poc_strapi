import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout";
import Customers from "./pages/customers";
import Home from "./pages/home";
import StaticPages from "./pages/staticpages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/customers",
    element: (
      <Layout>
        <Customers />
      </Layout>
    ),
  },
  {
    path: "/staticpages",
    element: (
      <Layout>
        <StaticPages />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
