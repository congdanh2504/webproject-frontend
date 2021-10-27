import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import EmployerRegister from "./pages/Employer-Register";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";
import Jobs from "./pages/Jobs";
import ForgotPassword from "./pages/ForgotPassword";
import JobDetails from "./pages/JobDetails";
import UserProfileSetting from "./pages/UserProfileSetting";
import TopCompanies from "./pages/TopCompanies";
import About from "./pages/About";
import AddBlog from "./pages/AddBlog";
import AddJob from "./pages/AddJob";
import Companies from "./pages/admin/Companies";
import JobSeekers from "./pages/admin/JobSeekers";
import { getToken } from "./api/Common";
import { useEffect, useState } from "react";
import { getUser } from "./api/loginAPI";
import Loading from "./components/Loading";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./pages/UserProfile";
import EmployerProfile from "./components/EmployerProfile";
import EmployerProfileSetting from "./pages/EmployerProfileSetting";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (!getToken) {
      return;
    } else {
      getUser(setAuthLoading);
    }
  }, []);

  if (authLoading && getToken() != null) return <Loading />;

  const RouteWithNav = ({
    exact,
    path,
    type,
    component: Component,
    ...rest
  }) => {
    return (
      <Route
        exact={exact}
        path={path}
        {...rest}
        render={(routeProps) => {
          return (
            <>
              <Nav type={type === "user" ? "user" : "admin"} {...routeProps} />
              <Component {...routeProps} />{" "}
            </>
          );
        }}
      />
    );
  };
  return (
    <>
      <Router>
        {/* User's routes */}
        <RouteWithNav type="user" exact path="/" component={Home} />
        <RouteWithNav type="user" exact path="/jobs" component={Jobs} />
        <RouteWithNav
          type="user"
          exact
          path="/jobs/job-details/:id"
          component={JobDetails}
        />
        <RouteWithNav
          type="user"
          exact
          path="/jobs/add-job"
          component={AddJob}
        />
        <RouteWithNav
          type="user"
          exact
          path="/topcompanies"
          component={TopCompanies}
        />
        <RouteWithNav type="user" exact path="/blog" component={Blog} />
        <RouteWithNav
          type="user"
          exact
          path="/blog/detail/:id"
          component={BlogDetail}
        />
        <RouteWithNav
          type="user"
          exact
          path="/blog/add-blog"
          component={AddBlog}
        />
        <RouteWithNav type="user" exact path="/about" component={About} />
        <RouteWithNav
          type="user"
          exact
          path="/employer-register"
          component={EmployerRegister}
        />
        <RouteWithNav type="user" exact path="/login" component={Login} />
        <RouteWithNav
          type="user"
          exact
          path="/forgot"
          component={ForgotPassword}
        />
        <RouteWithNav type="user" exact path="/register" component={Register} />
        <RouteWithNav
          type="user"
          exact
          path="/employerProfile/:id"
          component={EmployerProfile}
        />
        <RouteWithNav
          type="user"
          exact
          path="/employerprofilesetting"
          component={EmployerProfileSetting}
        />
        <RouteWithNav
          type="user"
          exact
          path="/userprofilesetting"
          component={UserProfileSetting}
        />
        <RouteWithNav
          type="user"
          exact
          path="/profile/:id"
          component={UserProfile}
        />
        {/* End user's routes */}
        {/* <PrivateRoute
          path={`/employerProfile/:id`}
          component={EmployerProfile}
        />
        <PrivateRoute
          path={`/employerprofilesetting`}
          component={EmployerProfileSetting}
        />
        <PrivateRoute
          path={`/userprofilesetting`}
          component={UserProfileSetting}
        />
        <PrivateRoute path={`/profile/:id`} component={UserProfile} /> */}

        {/* Admin's routes */}
        <RouteWithNav
          type="admin"
          path="/admin/companies"
          exact
          component={Companies}
        />
        <RouteWithNav
          type="admin"
          path="/admin/job-seekers"
          exact
          component={JobSeekers}
        />
        {/* End admin's routes */}
      </Router>
    </>
  );
}

export default App;
