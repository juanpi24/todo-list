import React from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" class="nav-link">Home</Link><span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <Link to="/companies" class="nav-link">Compañias</Link>
          </li>
          <li class="nav-item">
            <Link to="/countries" class="nav-link">Paises</Link>
          </li>
          <li class="nav-item">
            <Link to="/cities" class="nav-link">Ciudades</Link>
          </li>
        </ul>
      </div>
    </nav>

    )    
  }
}


