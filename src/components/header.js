import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    return (
      <div>
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/home"> Home </Link>
        </li>
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/table"> Data Table </Link>
        </li>
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/analysis"> Analysis </Link>
        </li>
      </div>
    );
  }
}
