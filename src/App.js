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
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/employer-register" component={EmployerRegister} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/register" component={Register} />
        <Route path="/jobs/job-details" component={JobDetails}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/blog/detail" component={BlogDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/userprofile" component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
