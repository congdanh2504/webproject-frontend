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

function App() {

  const [authLoading, setAuthLoading] = useState(true);
  
  useEffect(() => {
    if (!getToken) {
      return
    } else {
      getUser(setAuthLoading)
    }
  }, [])

  if (authLoading && getToken()!= null) {
    return <div>Check Authentication</div>
  }


  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/employer-register" component={EmployerRegister} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/register" component={Register} />
        <Route path="/jobs/job-details" component={JobDetails} />
        <Route path="/add-job" component={AddJob} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/topcompanies" component={TopCompanies} />

        <Route path="/blog/detail" component={BlogDetail} />
        <Route path="/blog/add-blog" component={AddBlog} />
        <Route path="/blog" component={Blog} />

        <Route path="/userprofilesetting" component={UserProfileSetting} />
        <Route path="/about" component={About} />

        {/* For admin */}
        <Route exact="/" path="/admin/companies" component={Companies} />
        <Route path="/admin/job-seekers" component={JobSeekers} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
