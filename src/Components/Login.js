import React from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { setUserSession } from "../Common/Utils";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://oliomart.herokuapp.com/newbuyer/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        props.history.push('/dashboard');
        let user=response.data.user;
        let token=response.data.token;
        setUserSession(token,user);
      })
      .catch((error) => {
        if(error.status === 400 ){
          setError(error.data.msg);
          // console.log("error>>>>>" + error.data.msg);
        }
        //else{
        //   setError("Something went wrong");
        // }
        
        
      });
  };

  return (
    <>
      <div className="Login">
        Login Pgae
        <br />
        <br />
        <div>
          Email id &nbsp;
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          Password &nbsp;
          <input
            type="password"
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <input
          type="button"
          className="btn"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
          onClick={handleLogin}
        />
        <br />
        <br />
        
         <p className="error">{error} </p>
      </div>
    </>
  );
};

export default Login;
