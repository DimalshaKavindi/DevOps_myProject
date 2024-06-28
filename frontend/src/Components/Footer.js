import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Components.css";

function Footer() {
  

  const logoStyle = {
    display: "inline-block",
    marginRight: "20px",
  };

  const linkStyle = {
    color:'#DEB887',
    textDecoration: "none",
    marginRight: "15px",
    fontWeight:'bold'
  };

  const mediaStyle = {
    color:'white',
    textDecoration: "none",
    marginRight:"30px",
    fontSize:'22px'
  };

  return (
    
    <footer>
      <div className="footer">
        <div className="footerStyle">
            <div className="row">
              <div>
                <img src="./Images/logo1.png" alt="Company Logo" height="70" style={logoStyle} />
                <div style={{ display: "inline-block", marginTop:'25px'}}>
                  <a href="/" style={linkStyle}>Home</a>
                  <a href="/about" style={linkStyle}>About Us</a>
                  <a href="/contact" style={linkStyle}>Contact Us</a>
                  <a href="/gallery" style={linkStyle}>Gallery</a>
                  <a href="/connect" style={linkStyle}>Connect</a>
                </div>
              </div>
              <div>
                <p>To find out more about our services!</p>
                <p style={{ marginTop: '0px' }}>Please call us with any questions, or send us a message to learn more.</p>
              </div>

            </div>
            <div className="row" style={{marginRight:'75px'}}>
              <div style={{marginTop:'25px'}}>
                <a href="momentslk72@gmail.com" style={{fontSize:'20px', color:'white'}}>evoramoments@gmail.com</a>
                <h5 style={{color:'#DEB887', marginTop:'10px'}}>+94 76 800 9711</h5>
              </div>
              <div style={{ float: "right"}}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={mediaStyle}><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={mediaStyle}><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" style={mediaStyle}><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={mediaStyle}><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
        </div>
        <div style={{color:"white"}}>
          <hr />
          <p style={{ fontSize: '10px',  marginLeft:"95px", color:"ghostwhite", fontWeight:'bolder'}}>COPYRIGHT 2023 © EVORA MOMENTS PHOTOGRAPHY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
