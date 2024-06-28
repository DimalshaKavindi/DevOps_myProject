import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AllContacts() {
    const [customermessages, setcontact] = useState([]);

    useEffect(() => {
        function getcontacts() {
            axios.get("http://localhost:8070/customercontact/getcontactdetails")
                .then((res) => {
                    setcontact(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getcontacts();
    }, []);

    const contentStyle = {
        backgroundColor: "#A38469", 
        padding: '20px', 
      };

    return (
    <div style={contentStyle}>
        <form className='container' style={{width:'700px'}}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{marginBottom:'30px', color:"#DEB887"}}>ALL CONTACT DETAILS</h1>
            <nav style={{ position: "absolute", top: "30px", right: "20px", zIndex: "1", display: "flex", alignItems: "center" }}>
                <a href="/Admindash" style={{ color: "white", marginLeft: "25px", marginRight: "20px", textDecoration: "none" }}>Back</a>
            </nav>
           
            <div style={{ display: "flex", flexDirection: "column" }}>
                {customermessages.map((contacts) => (
                    <div key={contacts._id} style={{fontSize:"18px", marginBottom: "10px", borderBottom: "1px solid #ccc", padding: "10px" }}>
                        <div><strong>Name:</strong> {contacts.Name}</div>
                        <div><strong>Email:</strong> {contacts.Email}</div>
                        <div><strong>Mobile No:</strong> {contacts.Mobile_No}</div>
                        <div><strong>Subject:</strong> {contacts.Subject}</div>
                        <div><strong>Message:</strong> {contacts.Message}</div>
                    </div>
                ))}
            </div>
        </div>
        </form>
    </div>
    );
}
