import React from 'react';
import NavbarRectangles from './NavbarRectangles'

function Navbar() {
  return (
    <div className="headerWrap">
      <div className="topBar">
      </div>
      <div className="topLeftRectangle">
      <NavbarRectangles/>
    </div>

      <div className="innerHeader">
        <p>Tier List</p>
        <p>Characters</p>
        <p>Info</p>
      </div>
      <div className="bottomBar">
      </div>
      <style jsx>{`
          .headerWrap{
            background-color: #FF9A23;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            width: 101%;
            margin-left: -.5vw;
          }
          .topLeftRectangle{
            margin-top: -0.2vw;
          }
          .topBar{
            width: 100vw;
            height: 5px;
            background-color: #FF6F17;
            margin-right: auto;
            margin-left: auto;
            border-bottom: 2px solid black;
          }
          .bottomBar{
            width: 100vw;
            height: 5px;
            background-color: #FF6F17;
            margin-right: auto;
            margin-left: auto;
            border-top: 2px solid black;
          }

          .innerHeader{
            display:flex;
            flex-flow: row-wrap;
            justify-content: space-around;
          }


          `}</style>
      </div>
    );
  }

  export default Navbar;
