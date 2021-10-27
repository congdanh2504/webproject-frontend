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

  return (
    <>
      <Router>
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <Nav type="admin" />
              <Route exact path={`${url}/companies`} component={Companies} />
              <Route path={`${url}/job-seekers`} component={JobSeekers} />
            </>
          )}
        />
        <Route
          path="/user"
          render={({ match: { url } }) => (
            <>
              <Nav type="user" />
              <Route exact path={`${url}`} component={Home} />
              <Route
                path={`${url}/employer-register`}
                component={EmployerRegister}
              />
              <Route path={`${url}/login`} component={Login} />
              <Route path={`${url}/forgot`} component={ForgotPassword} />
              <Route path={`${url}/register`} component={Register} />
              <Route
                path={`${url}/jobs/job-details/:id`}
                component={JobDetails}
              />
              <PrivateRoute path={`${url}/jobs/add-job`} component={AddJob} />
              <Route path={`${url}/jobs`} component={Jobs} />
              <Route path={`${url}/topcompanies`} component={TopCompanies} />
              <Route path={`${url}/blog/detail/:id`} component={BlogDetail} />
              <PrivateRoute path={`${url}/blog/add-blog`} component={AddBlog} />
              <Route path={`${url}/blog`} component={Blog} />
              <PrivateRoute path={`${url}/employerProfile/:id`} component={EmployerProfile} />
              <PrivateRoute path={`${url}/employerprofilesetting`} component={EmployerProfileSetting} />
              <PrivateRoute
                path={`${url}/userprofilesetting`}
                component={UserProfileSetting}
              />
              <PrivateRoute
                path={`${url}/profile/:id`}
                component={UserProfile}
              />
              <Route path={`${url}/about`} component={About} />
              <Footer />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
