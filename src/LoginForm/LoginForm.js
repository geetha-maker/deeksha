import React, {useState} from "react";
import './LoginForm.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const db=[
    {"username":"geetha","password":"geetha@cs4"},
    {"username":"manushree","password":"manu@cs4"}
];

const ForgotPassword=(username)=>{
    let temp=0;
    if (username===""){
        window.alert("Enter the username");
        return;
    }
    db.map((item)=>{
        if (item.username==username){
            temp=1;
        }
    })
    if (temp==0){
        window.alert("username doesn't exist");
    }
    else{
        window.alert("A mail to reset the Password is sent to your registered email ID");
    }
}

const handleLogin=(username,password)=>{
    let temp;
    for (var i=0; i<db.length; i++){
        if ((username=="")|(password=="")) {
            window.alert("username and password are required fields");
            return;
        }
        else if ((username==db[i].username) & (password==db[i].password)) {
            window.alert("Successful");
            return;
        }
        else{
            temp=1;
        }
    }
    if (temp==1){
        window.alert("Invalid username or password entered");
    }
}

function LoginForm(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    return(
        <body>
            <div>
                <center>
                    <h1>Welcome to our application</h1>
                    <h2>Get logged in and get benefitted with our services...</h2>
                </center>
                <form className="s1">
                    <div className="s2">
                        <label>Username: </label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div><br/><br/>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div><br/><br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>handleLogin(username,password)}>Login</button><br/><br/>
                    <div className="s4">

                    <a ><u>Sign in now</u></a><br/><br/>
                    <a className="s4" onClick={()=>{ForgotPassword(username)}}><u>Forgot password?</u></a><br/><br/>
                    </div>
        

                </form>
            </div>
        </body>
    );
}

export default LoginForm;