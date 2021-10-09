import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import EmployerRegister from "./components/Employer-Register";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/employer-register" component={EmployerRegister} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jobs" component={Jobs}/>
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={BlogDetail} /> //test trang detail, bấm Link ở BlogCard không chuyển được
        <Route component={NotFound} />
        <Route path="/blog/detail" component={BlogDetail} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
