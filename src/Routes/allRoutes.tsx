import { Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard";

// Auth
import Login from "pages/Authentication/login";
import Logout from "pages/Authentication/Logout";
import UserProfile from "pages/Authentication/user-profile";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import SignUp from "pages/Authentication/Register"
import Stock from "pages/Stock";
import Revenue from "pages/Revenue";
import Register from "pages/Revenue/Register";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/profile", component: <UserProfile /> },
  { path: "/stock", component: <Stock /> },
  { path: "/revenue", component: <Revenue /> },
  { path: "/revenue/register", component: <Register /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgotPassword /> },
  { path: "/register", component: <SignUp /> }
]
export { authProtectedRoutes, publicRoutes };
