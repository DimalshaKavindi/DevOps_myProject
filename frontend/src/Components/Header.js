import React from "react";

function Header() {
  const navLinkStyle = {
    color: 'white',
    marginLeft: '25px',
    marginRight: '20px',
    textDecoration: 'none',
    fontWeight:'bold',
  };

  const navContainerStyle = {
    position: 'absolute',
    top: '30px',
    right: '20px',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '120px',
    marginLeft: '40px',
    marginTop: '15px'
  };

  const handleHover = (e) => {
    e.target.style.textDecoration = 'none';
    e.target.style.color = "#A38469";

    if (e.target.classList.contains('login-box')) {
      e.target.style.backgroundColor = "#FFFFFF"; 
    }
  };

  const handleHoverExit = (e) => {
    e.target.style.textDecoration = 'none';
    e.target.style.color = "white";

    if (e.target.classList.contains('login-box')) {
      e.target.style.backgroundColor = "#A38469"; 
    }
  };

  return (
    <div>
      <div className="left" >
        <img
          src="./Images/logo1.png"
          style={logoStyle}
          className="nav-image"
          alt="Logo"
        />

        <nav style={navContainerStyle}>
          <a href="/" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            Home
          </a>
          <a href="/about" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            About Us
          </a>
          <a href="/gallery" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            Galleries
          </a>

          <a href="/contact" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            Contact Us
          </a>

          <a href="/connect" style={navLinkStyle} onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            <div className="login-box" style={{marginRight:"5px", height: "30px", width: "95px", color: "white", backgroundColor: "#A38469", justifyContent: "center", borderRadius: "15px", paddingLeft: "14px", paddingTop: '2px', fontWeight:"revert-layer" }}>
              Connect
            </div>
          </a>
          <a href="/signup" style={navLinkStyle}></a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
