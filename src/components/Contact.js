import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    }
  }

  render() {
    return (
      <figure className="Contact">

        <img className="avatar"
          src={this.props.avatar}
          alt={this.props.name}/>

        <div>

          <h2 className="name">{this.props.name}</h2>

          <div className="status">

            <p className=
            {this.state.online ? 'status-online' : 'status-offline'}
            
              onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}
            
            />

            <p className='status-text'>
            {this.state.online ? 'online' : 'offline'}
            </p>

          </div>
        </div>
      </figure>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default Contact;
