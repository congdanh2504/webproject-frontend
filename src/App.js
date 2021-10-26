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
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/employer-register" component={EmployerRegister} />
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/register" component={Register} />
          <Route path="/jobs/job-details/:id" component={JobDetails} />
          <PrivateRoute path="/jobs/add-job" component={AddJob} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/topcompanies" component={TopCompanies} />
          <Route path="/blog/detail/:id" component={BlogDetail} />
          <PrivateRoute path="/blog/add-blog" component={AddBlog} />
          <Route path="/blog" component={Blog} />

          <Route path='/employerProfile/:id' component ={EmployerProfile} />
          <Route path='/employerprofilesetting' component ={EmployerProfileSetting} />

          <PrivateRoute
            path="/userprofilesetting"
            component={UserProfileSetting}
          />
          <PrivateRoute path="/profile/:id" component={UserProfile} />
          <Route path="/about" component={About} />

          {/* Testing */}
          <Route path="/admin/companies" component={Companies} />
          <Route path="/admin/job-seekers" component={JobSeekers} />
          {/* End Testing */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
