import React, { useEffect, useState } from 'react';
import axios from 'axios';


function EditAlbum() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [formData, setFormData] = useState({
    Album_Category: '',
    Name: '',
    Description: '',
    images: [],
  });

  
  useEffect(() => {
    axios.get('http://localhost:8070/photographyweb/getdetails')
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const images = event.target.files;
    const newImages = Array.from(images);
    setFormData({
      ...formData,
      images: [...formData.images, ...newImages],
    });
  };
  

  const handleAddOrUpdateClick = () => {
    
    if (selectedAlbum) {
      axios.put(`http://localhost:8070/photographyweb/update/${selectedAlbum._id}`, formData)
        .then((response) => {
          if (response.status === 200) {
            console.log('Album updated successfully');
            setSelectedAlbum(null);
            setFormData({
              Album_Category: '',
              Name: '',
              Description: '',
              images: [],
            });
            
            axios.get('http://localhost:8070/photographyweb/getdetails')
              .then((response) => {
                setAlbums(response.data);
              })
              .catch((error) => {
                console.error('Error fetching albums:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error updating album:', error);
        });
    }
    
    else {
      const albumData = new FormData();
      albumData.append('Album_Category', formData.Album_Category);
      albumData.append('Name', formData.Name);
      albumData.append('Description', formData.Description);

      for (let i = 0; i < formData.images.length; i++) {
        albumData.append('images', formData.images[i]);
      }

      axios
        .post('http://localhost:8070/photographyweb/add', albumData)
        .then((_res) => {
          console.log('Album added successfully');
          alert('Album added successfully');
          axios.get('http://localhost:8070/photographyweb/getdetails')
            .then((response) => {
              setAlbums(response.data);
            })
            .catch((error) => {
              console.error('Error fetching albums:', error);
            });
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  };

  const handleDeleteClick = (album) => {
    axios.delete(`http://localhost:8070/photographyweb/delete/${album._id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log('Album deleted successfully');
          alert('Album deleted successfully');
          axios.get('http://localhost:8070/photographyweb/getdetails')
            .then((response) => {
              setAlbums(response.data);
            })
            .catch((error) => {
              console.error('Error fetching albums:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error deleting album:', error);
      });
  };

  const handleEditClick = (album) => {
    setSelectedAlbum(album);
    setFormData({
      Album_Category: album.Album_Category,
      Name: album.Name,
      Description: album.Description,
      images: album.images, 
    });
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <div style={{backgroundColor:'#776551'}}>
      <h1 style={{marginBottom:'30px', color:"#DEB887", display: "flex", flexDirection: "column", alignItems: "center" , paddingTop:'25px'}}>
        EDIT ALBUMS</h1>
        <div className="form-container" style={{backgroundColor:'#776551'}}>
        <nav style={{ position: "absolute", top: "30px", right: "20px", zIndex: "1", display: "flex", alignItems: "center" }}>
              <a href="/Admindash" style={{ color: "white", marginLeft: "25px", marginRight: "20px", textDecoration: "none" }}>Back</a>
        </nav>
      <form >

      <div className="form-group">
        <label htmlFor="Album_Category">Album Category</label>
        <input
          type="text"
          id="Album_Category"
          name="Album_Category"
          value={formData.Album_Category}
          onChange={handleChange}
          placeholder="Enter Album Category"
          className="form-control"
        />
      </div>

  <div className="form-group">
    <label htmlFor="Name">Album Name</label>
    <input
      type="text"
      id="Name"
      name="Name"
      value={formData.Name}
      onChange={handleChange}
      placeholder="Enter Album Name"
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label htmlFor="Description">Description</label>
    <input
      type="text"
      id="Description"
      name="Description"
      value={formData.Description}
      onChange={handleChange}
      placeholder="Enter Album Description"
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label htmlFor="images">Album Images</label>
    <input
      type="file"
      id="images"
      name="images"
      accept="image/*"
      multiple
      onChange={handleImageChange}
      className="form-control-file"
    />
  </div>

  {formData.images.length > 0 && (
    <div>
      <h6>Selected Images:</h6>
      <ul>
        {formData.images.map((image, index) => (
          <li key={index}>{image.name}</li>
        ))}
      </ul>
    </div>
  )}

  <div className="button-container">
    <button type="button" onClick={handleAddOrUpdateClick} className="btn btn-primary">
      {selectedAlbum ? 'Update Album' : 'Add Album'}
    </button>
    {selectedAlbum && (
      <button onClick={() => handleDeleteClick(selectedAlbum)} className="btn btn-danger">
        Delete
      </button>
    )}
  </div>
</form>

    </div>
      <div className="album-list">
        {albums.map((album) => (
          <div key={album._id} className="album-card">
            <h2>{album.Album_Category}</h2>
            <p>Name: {album.Name}</p>
            <p>Description: {album.Description}</p>
            <div className="image-list" >
              {album.images.map((image, _index) => (
                <img
                  key={image.filename}
                  src={`http://localhost:8070/uploads/${image.filename}`}
                  alt={image.filename}
                />
              ))}
            </div>
            <button onClick={() => handleEditClick(album)}>Update</button>
            <button onClick={() => handleDeleteClick(album)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
);
}

export default EditAlbum;