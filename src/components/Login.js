import React from 'react';
import ReactDom from 'react-dom';

export default function Login(){
	return(
         <>
      
    <body>
    
         <div className="login-box">
            <img src={require("./img/logo.jpeg")} className="logo"/>
         <h1>Login Here</h1>
            <form>
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter Username"></input>
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password"></input>
            <input type="submit" name="submit" value="Login"></input>
            <a href="#">SignUp Here</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Forgot Password</a>    
            </form>
         </div>
    </body>
         </>
		)
}