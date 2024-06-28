import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Gallery(){

  const [albums, setAlbums] = useState([]);

    useEffect(() => {
    
    axios.get('http://localhost:8070/photographyweb/getdetails')
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
    }, []);

      const headerStyle = {
        background: `url('./Images/back3.jpg')`, 
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
      backgroundColor: "#776551", 
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

  return (
    <div>
      <div>
      <header style={headerStyle}>
                <div style={overlayStyle}></div>
                <Header/>
            </header>
            </div>
            <div style={contentStyle} >
              <div style={{marginBottom:"60px"}}>
                <p></p>
                <p class="font-weight-bold" style={{fontFamily: 'Khand, sans-serif',color: '#DEB887',fontSize: "20px",justifyContent: 'center',alignItems: 'center',position: 'absolute',left: '8%',marginBottom :'100px',}}>
                  PORTFOLIO
                </p>
              </div>
            <div >
          <div style={{color:'white', marginLeft : "45px", marginBottom:"15px"}}>
          <h3>ALBUM GALLERY</h3>
          </div>
          <div className="row">
            {albums.map((album) => (
              <div className="col-md-3" key={album._id} style={{ marginBottom: "20px" }}>
                <div
                  className="card mb-3 shadow-sm"
                  style={{height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white', 
                    boxShadow: 'none',}}>
                  {album.images && album.images.length > 0 && (
                    <img
                      src={`http://localhost:8070/uploads/${album.images[0].filename}`}
                      alt={album.images[0].filename}
                      className="card-img-top"
                      style={{ objectFit: 'cover', height: '75%', width: '100%' }}
                    />
                  )}
                  <div className="card-body" >
                    <h3 className="card-title">{album.Album_Category}</h3>
                    <p className="card-text" > {album.Name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={`/album/${album._id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Gallery;