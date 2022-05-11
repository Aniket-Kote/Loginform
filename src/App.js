import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Button from "./Components/Button/Button";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Login from "./Components/Login";
import './index.css';

const App = () => {
  return (
    <div>
       <BrowserRouter>
      <div className="header">
        
          <NavLink exact activeClassName="active" to="/" className="links">Home</NavLink>
          <NavLink  activeClassName="active" to="/login" className="links">Login</NavLink>
          <NavLink  activeClassName="active" to="/dashboard" className="links">Dashboard</NavLink>
       
      </div>
      
      <div className="content">
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>  
      </BrowserRouter>

<Button btnname="aniket"/>
<Button btnname="fsdf"/>
<Button btnname="fsd"/>
<Button btnname="fds"/>

    </div>



  );
};

export default App;
