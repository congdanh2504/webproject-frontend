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
import AdminCompanies from "./pages/AdminCompanies";
import AdminJobSeekers from "./pages/AdminJobSeekers";
import { getToken } from "./api/Common";
import { useEffect, useState } from "react";
import { getUser } from "./api/loginAPI";
import Loading from "./components/Loading";
import UserProfile from "./pages/UserProfile";
import EmployerProfile from "./components/EmployerProfile";
import EmployerProfileSetting from "./pages/EmployerProfileSetting";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlog from "./pages/AdminBlog";
import { RouteWithNav } from "./components/RouteWithNav";
import { EmployerRoute } from "./components/EmployerRoute";
import { EmployeeRoute } from "./components/EmployeeRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminRoute } from "./components/AdminRoute";
import AdminPostItem from "./pages/AdminPostItem";

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
        <EmployerRoute
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
        <PrivateRoute
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
        <EmployerRoute
          type="user"
          exact
          path="/employerprofilesetting"
          component={EmployerProfileSetting}
        />
        <EmployeeRoute
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

        {/* Admin's routes */}
        
        <AdminRoute
          type="admin"
          path="/admin"
          exact
          component={AdminDashboard}
        />
        <AdminRoute
          type="admin"
          path="/admin/companies"
          exact
          component={AdminCompanies}
        />
        <AdminRoute
          type="admin"
          path="/admin/job-seekers"
          exact
          component={AdminJobSeekers}
        />
        <AdminRoute
          type="admin"
          path="/admin/blog"
          exact
          component={AdminBlog}
        />
        <AdminRoute
          type="admin"
          path="/admin/postItem"
          exact
          component={AdminPostItem}
        />
        {/* End admin's routes */}
      </Router>
    </>
  );
}

export default App;
