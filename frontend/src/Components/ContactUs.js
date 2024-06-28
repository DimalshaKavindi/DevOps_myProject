import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function ContactUs(){
    
      const headerStyle = {
          background: `url('./Images/back4.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '600px', 
        };
    
      const overlayStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
      };
    
      const navContainerStyle = {
        position: 'absolute',
        top: '30px', 
        right: '20px', 
        zIndex: '1', 
        display: 'flex',
        alignItems: 'center',
        
      };
    
      
      const contentStyle = {
        backgroundColor: "#A38469", 
        padding: '20px', 
      };
      
      const putterStyle = {
        backgroundColor: "#5E503F", 
        height :'150px',
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center" ,
        padding:"80px"
      };
     
      
    return(
        <div>
       
       <header style={headerStyle}>
                <div style={overlayStyle}></div>
                <Header/>
            </header>
        <div style={contentStyle} >
        <div style={{ marginBottom:"60px"}}>
          <p></p>
          <p class="font-weight-bold" style={{fontFamily: 'Khand, sans-serif',color: '#DEB887',fontSize: "25px",justifyContent: 'center',alignItems: 'center',position: 'absolute',left:'40%',marginBottom :'250px',}}>
           TO REACH US
          </p>
          </div>
          <div >
            <form style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop:"75px"}}>
            <div style={{color:"white",fontSize:"18px", marginLeft:"18%", marginRight:"12%"}}>
          <h5>EMAIL</h5>
          <p style={{ textDecoration: "underline", color: "black" , marginBottom:'40px' }}>evoramoments@gmail.com</p>
          <h5>HOT LINE</h5>
          <p style={{ textDecoration: "underline", color: "black" , marginBottom:'40px'}}>+94768009711</p>
          <h5>LOCATION</h5>
          <p style={{ color: "black" }}>EVORA MOMENTS PHOTOGRAPHY</p>
          <p style={{  color: "black" }}>GALLE ROAD</p>
          <p style={{ color: "black" , marginBottom:'40px' }}>RATHMALANA</p>
          <h5>FOLLOW US</h5>
          <p style={{ textDecoration: "underline", color: "black"}}>www.facebook.com/evoramoments</p>
          <p style={{ textDecoration: "underline", color: "black", marginBottom:'40px' }}>www.instagram.com/evoramoments</p>
        </div>
        <p style={{ color: "white" ,fontSize:"18px"}}>You have to login to find out more about our services! Please call us with any questions, or send us a message.</p>
            </form>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
        

export default ContactUs;
