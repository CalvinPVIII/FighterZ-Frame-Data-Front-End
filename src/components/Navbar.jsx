import React from 'react';


function Navbar() {
  return (
    <div className="headerWrap">
      <div className="topLeftRectangle">
        <div className="innerTopLeft">
          <div className="rightSideBorder">
          <div className="topLeftBlackRectangle">
          </div>
        </div>
        </div>
      </div>
      <div className="outerHeader">
        <div className="innerHeader">
          <p>Tier List</p>
          <p>Characters</p>
          <p>Info</p>
        </div>
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
            width: 120px;
            height: 15px;
            transform: skew(-20deg);
            background-color: #FF6F17;
            margin-bottom: -2vh;
            border-bottom: 2px solid black;
            border-right: 2px solid black;
            margin-left: -1vw;
          }
          .rightSideBorder{
            width: 125px;
            height: 4px;
            background-color: #FF6F17;
            margin-bottom: 6vh;

          }
          .topLeftBlackRectangle{
            width: 115px;
            height: 12px;
            background-color: black;
            transform: skew(-20deg);
          }
          .innerTopLeft{
            border-bottom: 1px solid black;
            // border-right: 1px solid black;
            width: 115px;
            height: 13px;
            margin-bottom: -100px;
            // background-color: black;

          }
          .outerHeader{

            border-top: 5px solid #FF6F17;
            border-bottom: 5px solid #FF6F17;
          }
          .innerHeader{
            display:flex;
            flex-flow: row-wrap;
            justify-content: space-between;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
          }

          `}</style>
      </div>
    );
  }

  export default Navbar;
