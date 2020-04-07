import React, { useState, useEffect } from "react";
import logo from '../images/dbfzlogo.png'


function Header() {

  return (
    <div id="header"className='header'>
      <img src={logo}/>
      <style jsx>{`
          .header {
            display: flex;
            justify-content: center;
            animation: logoAnimation 0.4s
          }

          @keyframes logoAnimation {
            0% { transform: scale(2,2); }
            70%{filter: brightness(0) invert(1);}
            100% {transform: scale(1,1); filter: brightness(1) invert(0);}
          }
          `}</style>

      </div>
    );
  }

  export default Header;
