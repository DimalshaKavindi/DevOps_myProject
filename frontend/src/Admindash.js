import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Admindash() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const Logout = () => {
    setUser(null);
    navigate("/");
  };

  const adminnav = (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <Link
            to="/editalbum"
            className="nav-item nav-link custom-link" 
            id="nav-contact-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Albums
          </Link>
          <Link
            to="/allcontact"
            className="nav-item nav-link custom-link" 
            id="nav-contact-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Customer Messages
          </Link>
          <Link
            to="/allcus"
            className="nav-item nav-link custom-link" 
            id="nav-contact-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Customers Details
          </Link>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          ...
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          ...
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          ...
        </div>
      </div>
      <button className="btn nav-link" onClick={Logout} style={{ position: "absolute", top: "25px", right: "15px" }}>
        Logout
      </button>
    </div>
  );


  const backgroundimage = {
    background: `url('./Images/back10.jpg')`,
    backgroundsize: 'cover',
    backgroundposition: 'center',
    backgroundrepeat: 'no-repeat',
    width:' 100%', 
    height: '100vh', 
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark text-center">
      <ul className="navbar-nav mx-auto">
        {user ? (
          <li className="nav-item">
            {user.Email === "Admin@gmail.com" ? (
              <div style={{ position: "left" }}>
                {adminnav}
                <Link className="nav-link" to="/Admindash" style={{ position: "absolute", top: "0", right: "0" }}></Link>
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                <Link className="nav-link" to="/Cusdash" style={{ position: "absolute", top: "0", right: "0" }}></Link>
              </div>
            )}
          </li>
        ) : null}
        <li className="nav-item">
          {user ? (
            <button className="btn nav-link" onClick={Logout} style={{ position: "absolute", top: "25px", right: "15px" }}>
              Logout
            </button>
          ) : (
            <div>
              {adminnav}
              <Link className="nav-link" to="/Admindash"></Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
    <div style={backgroundimage}>
      
    </div>
    </div>
  );
}

export default Admindash;
