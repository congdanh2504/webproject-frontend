import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import EmployerRegister from './components/Employer-Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <div className="header">
          <Nav/>
        </div>
        <div className="content">
          <Route exact path='/'/>
          <Route exact path='/employer-register'component={EmployerRegister}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
