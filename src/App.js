// import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import EmployerRegister from "./components/Employer-Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/employer-register" component={EmployerRegister} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
