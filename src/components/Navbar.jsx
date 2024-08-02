import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

      <div className="logo">Project</div> 

      <ul className="navLinks">

        <li><a href="#">Features</a></li>
        <li><a href="#">Github</a></li>
        <li><a href="#">For Designers</a></li>
        
        <li>
          <button> Documentation </button>
        </li>

      </ul>

      </div>

    </nav>
  )
}

export default Navbar
