// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Receipt from "@material-ui/icons/Receipt";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import SigninPage from "views/Signin/SigninPage.jsx";
import VerifyEmailPage from "views/VerifyEmail/VerifyEmailPage.jsx";
import SignupPage from "views/Signup/SignupPage.jsx";
import CreatePollPage from "views/CreatePoll/CreatePollPage";

export const isSignedInUser = true;

const dashboardRoutes = [
  (isSignedInUser && {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/signin",
    sidebarName: "Sign in",
    navbarName: "Sign in",
    icon: Person,
    component: SigninPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/signup",
    sidebarName: "Sign up",
    navbarName: "Sign up",
    icon: Person,
    component: SignupPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/verify-email",
    sidebarName: "Email verification",
    navbarName: "Email verification",
    icon: Person,
    component: VerifyEmailPage
  }) ||
    null,
  (isSignedInUser && {
    path: "/poll",
    sidebarName: "Poll",
    navbarName: "Poll",
    icon: Receipt,
    component: CreatePollPage
  }) ||
    null,
  (isSignedInUser && {
    path: "/create",
    sidebarName: "Create",
    navbarName: "Create",
    icon: Receipt,
    component: CreatePollPage
  }) ||
    null,
  {
    redirect: true,
    path: "/",
    to: isSignedInUser ? "/dashboard" : "/signin",
    navbarName: "Redirect"
  }
].filter((route) => !!route);

export default dashboardRoutes;
