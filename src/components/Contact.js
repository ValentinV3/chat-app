import React from 'react';
import './Contact.css';

const online = true;

function Contact() {
  return (
    <figure className="Contact">
    <img className="avatar"
      src="https://randomuser.me/api/portraits/women/25.jpg"
      alt="Jackie Harris"/>
    <div>
      <h2 className="name">
      Jackie Harris
      </h2>
      <div className="status">
      {online ? <p className="status-online"/> : 
      <p className="status-offline"/>}
      <p className="status-text">
          {online ? 'online' : 'offline'}</p>
      </div>
    </div>
  </figure>
  );
}

export default Contact;