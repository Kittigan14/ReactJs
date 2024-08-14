import React from 'react';

function Navbar() {
  const navbarStyle = {
    width: '100%',
    height: '70px',
    color: '#1a1a1a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'fixed',
  };

  const navbarContainerStyle = {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navLinkItemStyle = {
    margin: '0 15px',
  };

  const navLinkStyle = {
    fontSize: '14px',
    color: '#1a1a1a',
    textDecoration: 'none',
  };

  const buttonStyle = {
    width: '150px',
    height: '40px',
    border: 'none',
    fontSize: '15px',
    cursor: 'pointer',
    fontWeight: '500',
    borderRadius: '10px',
    background: '#f0f0f0',
    transition: 'all 0.5s ease',
  };

  const buttonHoverStyle = {
    background: '#dddddd',
  };

  return (
    <nav style={navbarStyle}>
      <div style={navbarContainerStyle}>
        <div style={logoStyle}>Project</div> 
        <ul style={navLinksStyle}>
          <li style={navLinkItemStyle}><a href="#" style={navLinkStyle}>Features</a></li>
          <li style={navLinkItemStyle}><a href="#" style={navLinkStyle}>Github</a></li>
          <li style={navLinkItemStyle}><a href="#" style={navLinkStyle}>For Designers</a></li>
          <li style={navLinkItemStyle}>
            <button 
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.background = buttonHoverStyle.background}
              onMouseOut={(e) => e.target.style.background = buttonStyle.background}
            >
              Documentation
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
