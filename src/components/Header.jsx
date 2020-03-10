import React from 'react';
import logo from '../images/dbfzlogo.png'

function Header() {
  return (
    <div className='header'>
    <img src={logo}/>
    <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
        }
          `}</style>

  </div>
  );
}

export default Header;
