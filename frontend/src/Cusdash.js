import React, { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";

function Cusdash() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const Logout = () => {
    setUser(null);
    navigate("/home");
  };

  const cusnav = (
    <div>
      <button className="btn nav-link" onClick={Logout} style={{ position: "absolute", top: "12px", right: "12px" }}>
        Logout
      </button>
    </div>
  );

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile_No, setMobile] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  function sendData(event) {
    event.preventDefault();

    const newContact = {
      Name,
      Email,
      Mobile_No,
      Subject,
      Message,
    };

    axios
      .post("http://localhost:8070/customercontact/addDetails", newContact)
      .then(() => {
        alert("Message Sent");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const backgroundStyle = {
    display: "flex",
    justifyContent: "space-between",
    background: `url('./Images/1.jpg')`,  
    backgroundSize: "cover", 
    backgroundrepeat: 'no-repeat',
    height: "auto",
     
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    
  };

  

  return (
    <div >
      <div>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">CUSTOMER DASHBOARD</h4>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {cusnav}
        </nav>
      </div>
      <div style={backgroundStyle}>
      <div className="container mt-5" style={{marginBottom:'110px', width:'600px', backgroundColor:"GrayText"}}>
        <div >
          <form style={formStyle}>
            <h2 style={{color:'#DEB887'}}>CONTACT US</h2>

            <div className="form-group">
              <label htmlFor="nameInput">
                Your Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput" 
                placeholder="Enter Your Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label  htmlFor="emailInput">
                Email :
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="emailInput"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label  htmlFor="mobileInput">
                Mobile No :
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter the Mobile Number"
                id="mobileInput"
                onChange={(event) => {
                  setMobile(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subjectInput">
                Subject :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Subject"
                id="subjectInput"
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label  htmlFor="messageInput">
                Message :
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Message"
                id="messageInput"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary" onClick={sendData}>
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cusdash;