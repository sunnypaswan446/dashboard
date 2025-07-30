import "./assets/scss/style.scss";
import Homepage from "./pages/Homepage";
import Server from "./pages/Server";
import Domain from "./pages/Domain";
import Billing from "./pages/Billing";
import Support from "./pages/Support";
import Referrals from "./pages/Referrals";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import UserParams from "./pages/UserParams";
import SSL from "./pages/SSL";
import Error from "./pages/Error";
import Layout from "./Components/Layout";
// import { formData } from "./mock-data/data";

// import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "dashboard",
          element: <Homepage />,
        },
        {
          path: "overview",
          element: <Homepage />,
        },
        {
          path: "analytics",
          element: <Homepage />,
        },
        {
          path: "server",
          element: <Server />,
          children: [
            {
              path: "list",
              element: <Server />,
            },
            {
              path: "create",
              element: <Server />,
            },
            {
              path: "manage",
              element: <Server />,
            },
            {
              path: "monitoring",
              element: <Server />,
            },
            {
              path: "backups",
              element: <Server />,
            },
            {
              path: "settings",
              element: <Server />,
            },
          ],
        },
        {
          path: "domain",
          element: <Domain />,
          children: [
            {
              path: "list",
              element: <Domain />,
            },
            {
              path: "register",
              element: <Domain />,
            },
            {
              path: "transfer",
              element: <Domain />,
            },
            {
              path: "dns",
              element: <Domain />,
            },
            {
              path: "nameservers",
              element: <Domain />,
            },
            {
              path: "settings",
              element: <Domain />,
            },
          ],
        },
        {
          path: "ssl",
          element: <SSL />,
          children: [
            {
              path: "certificates",
              element: <SSL />,
            },
            {
              path: "install",
              element: <SSL />,
            },
            {
              path: "renew",
              element: <SSL />,
            },
            {
              path: "wildcard",
              element: <SSL />,
            },
            {
              path: "settings",
              element: <SSL />,
            },
          ],
        },
        {
          path: "billing",
          element: <Billing />,
          children: [
            {
              path: "invoices",
              element: <Billing />,
            },
            {
              path: "payment-methods",
              element: <Billing />,
            },
            {
              path: "subscriptions",
              element: <Billing />,
            },
            {
              path: "usage",
              element: <Billing />,
            },
            {
              path: "history",
              element: <Billing />,
            },
            {
              path: "settings",
              element: <Billing />,
            },
          ],
        },
        {
          path: "support",
          element: <Support />,
          children: [
            {
              path: "tickets",
              element: <Support />,
            },
            {
              path: "tickets",
              element: <Support />,
            },
            {
              path: "announcements",
              element: <Support />,
            },
            {
              path: "knowledgebase",
              element: <Support />,
            },
            {
              path: "network-status",
              element: <Support />,
            },
            {
              path: "open-ticket",
              element: <Support />,
            },
          ],
        },
        {
          path: "referrals",
          element: <Referrals />,
          children: [
            {
              path: "program",
              element: <Referrals />,
            },
            {
              path: "program-terms",
              element: <Referrals />,
            },
          ],
        },
        {
          path: "server/:id",
          element: <UserParams />,
          children: [
            {
              path: "details",
              element: <UserParams />,
            },
            {
              path: "performance",
              element: <UserParams />,
            },
            {
              path: "logs",
              element: <UserParams />,
            },
            {
              path: "security",
              element: <UserParams />,
            },
            {
              path: "backups",
              element: <UserParams />,
            },
            {
              path: "settings",
              element: <UserParams />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      children: [
        {
          path: "forgot-password",
          element: <Login />,
        },
        {
          path: "reset-password",
          element: <Login />,
        },
        {
          path: "two-factor",
          element: <Login />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
      children: [
        {
          path: "verify-email",
          element: <Signup />,
        },
        {
          path: "complete-profile",
          element: <Signup />,
        },
        {
          path: "welcome",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/*",
      element: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
