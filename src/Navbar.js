import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#logo">
      <img src='https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg' alt='brand'/>
    </a>
    <button style={{backgroundColor: 'black'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#feature">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#exchange">Exchanges</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#guide">How it Works?</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link" href="#blog">Blog</a>
        </li>   
        <li className="nav-item">
          <a className="nav-link" href="#about">About Us</a>
        </li> 
        <li className='nav-item'>
            <a className='nav-link button' href='#signin'>Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar