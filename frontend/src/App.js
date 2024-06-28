import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admindash from './Admindash';
import './App.css';
import About from './Components/AboutUs';
import AlbumPhotos from './Components/AlbumPhotos';
import ContactUs from './Components/ContactUs';
import AllContacts from './Components/Customer_messages';
import AllCustomers from './Components/Customers_details';
import EditAlbum from './Components/EditAlbum';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Cusdash from './Cusdash';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/connect' element={<LogIn />} />
          <Route path='/Admindash' element={<Admindash />} />
          <Route path='/Cusdash' element={<Cusdash />} />
          <Route path='/allcus' element={<AllCustomers />} />
          <Route path='/allcontact' element={<AllContacts />} />
          <Route path='/editalbum' element={<EditAlbum />} />
          <Route path="/album/:albumId" element={<AlbumPhotos/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
