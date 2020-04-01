import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';


function Contact(props) {
  return (
    <figure className="Contact">

    <img className="avatar"
      src={props.avatar}
      alt={props.name}/>

    <div>

      <h2 className="name">{props.name}</h2>

      <div className="status">

        <p className=
        {props.online ? 'status-online' : 'status-offline'}
        />

        <p className='status-text'>
        {props.online ? 'online' : 'offline'}
        </p>

      </div>
    </div>
  </figure>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;