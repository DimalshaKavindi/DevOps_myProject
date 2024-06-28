import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const navLinkStyle = {
    color: "white",
    marginLeft: "25px", 
    marginRight: "20px", 
    textDecoration: "none",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    background: `url('./Images/back5.jpg')`, 
    backgroundPosition: "left", 
    backgroundSize: "50%", 
    height: "650px", 
  };

  const leftOverlayStyle = {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  };

  const rightOverlayStyle = {
    flex: 1,
    backgroundColor: "#DAC6B3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
  };

  const formContainerStyle = {
    width: "400px", 
    
  };

  const navContainerStyle = {
    position: "absolute",
    top: "30px", 
    right: "20px", 
    zIndex: "1", 
    display: "flex",
    alignItems: "center",
  };

  const signUpTextStyle = {
    fontSize: "24px", 
    fontWeight: "bold", 
  };

  const[Email,setEmail1] = useState("");
  const[UserName,setUsername] = useState("");
  const[Password,setPassword] = useState("");

  function sentSignUpData(e){
    e.preventDefault();

    const userNew={
        Email,
        UserName,
        Password
    }

    axios.post("http://localhost:8070/webuser/register",userNew).then(()=>
    {
        alert("Successfully Registered")
    }).catch((err)=>{
        alert(err)
    })
    
  } 

  return (
    <div>
      <header style={headerStyle}>
        <div style={leftOverlayStyle}></div>
        <div style={rightOverlayStyle}>
          <div style={formContainerStyle}>
            <form>
              <p style={signUpTextStyle}>SIGN UP</p>

                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" onChange={(e)=>{
                    setEmail1(e.target.value);
                }}/>
                </div>

                <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  placeholder="Enter Username" onChange={(e)=>{
                    setUsername(e.target.value);
                }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="At least 6 characters" onChange={(e)=>{setPassword(e.target.value);}}/>
                </div>
        
                <button type="submit" className="btn btn-primary" 
                style={{backgroundColor:"#A38469",width:"400px", alignContent:"center"}} onClick={sentSignUpData}>
                    Sign Up
                </button>

                <div className="form-group">
                    <hr></hr>
                    <small className="form-text text-muted" style={{textAlign:"center"}}>
                    2023 © ALL RIGHTS RESERVED</small>
                </div>

            </form>
            </div>
            </div>
            <nav style={navContainerStyle}>
            <a href="/" style={navLinkStyle}>Back</a>
        </nav>
      </header>
    </div>
  );
}

export default SignUp;
