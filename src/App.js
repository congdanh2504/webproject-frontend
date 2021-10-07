import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import EmployerRegister from './components/Employer-Register';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <div className="header">
          <Nav/>
        </div>
        <div className="content">
          <Route exact path='/' component={Home}/>
          <Route path='/employer-register'component={EmployerRegister}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
