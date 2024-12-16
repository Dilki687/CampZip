import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {
  return (
    <div>
      <nav id="sidebar" className="bg-dark text-white vh-100 p-3 position-fixed top-0 start-0">
        <h4 className="text-white mb-4">Tour Guid Manager</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/guids">
              <i className="fas fa-boxes me-2"></i>
              Tour Guids
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/addru">
              <i className="fas fa-plus-circle me-2"></i>
              Add New Tour Guid
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/logout">
              <i className="fas fa-sign-out-alt me-2"></i>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}