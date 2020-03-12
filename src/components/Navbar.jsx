import React from 'react';
import NavbarRectangles from './NavbarRectangles'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="headerWrap">
      <div className="topBar">
      </div>
      <div className="topLeftRectangle">
      <NavbarRectangles/>
    </div>
    <div className="topRightRectangle">
      <NavbarRectangles/>
    </div>

      <div className="innerHeader">
        <Link to="/tierlist"><p className="navbarLink">Tier List</p></Link>
        <Link to="/"><p className="navbarLink">Characters</p></Link>
        <Link to="/info"><p className="navbarLink">Info</p></Link>
      </div>
      <div className="bottomLeftRectangle">
        <NavbarRectangles/>
      </div>
      <div className="bottomRightRectangle">
        <NavbarRectangles/>
      </div>
      <div className="bottomBar">
      </div>
      <style jsx>{`
          .headerWrap{
            background-color: #FF9A23;
            background-image: url("https://www.transparenttextures.com/patterns/lined-paper.png");
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            width: 101%;
            margin-left: -.5vw;
          }
          .bottomLeftRectangle{
            transform: scaleY(-1);
            margin-bottom: -0.5vh;
          }
          .bottomRightRectangle{
            float: right;
            transform: scale(-1,-1);
            margin-top: -1vh;
          }
          .topLeftRectangle{
            margin-top: -0.2vw;
          }
          .topRightRectangle{
            transform: scaleX(-1);
            margin-top: -0.8vw;
            float: right;
            // margin-left: -0.5vw;
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
          .navbarLink{
            font-size: 1.2vw;
            color: white;
            text-shadow: 2px 2px black;
            margin: 0.3vh;
          }
          a, a:visited {
            text-decoration: none
          }


          `}</style>
      </div>
    );
  }

  export default Navbar;
