import React from 'react';


function Navbar() {
  return (
    <div className="headerWrap">
      <div className="topBar">
      </div>
      <div className="outerRectangleWrap">
      </div>
      <div className="outerRectangle">
      </div>
      <div className="innerRectangleWrap">
      </div>
      <div className="innerRectangle">
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
          .innerRectangle{
            width: 119px;
            height: 15px;
            transform: skew(-30deg);
            margin-top: -2.8vh;
            margin-left: -1vw;
            background-color: black;
            border-top: 1px solid black;
          }
          .innerRectangleWrap{
            width: 96px;
            height: 10px;
            transform: skew(-20deg);
            margin-top: -1.7vh;
            border-bottom: 1px solid black;
          }
          .outerRectangleWrap{
            width: 100px;
            height: 30px;
            transform: skew(-20deg);
            background:#FF6F17;
            margin-top: -.8vh;
          }
          .outerRectangle{
            width: 99px;
            height: 25px;
            transform: skew(-20deg);
            background:#FF6F17;
            margin-top: -2.5vh;
            border-right: 2px solid black;
            border-bottom: 2px solid black;
          }
          .topBar{
            width: 90vw;
            height: 5px;
            background-color: #FF6F17;
            margin-right: auto;
            margin-left: auto;
            border-bottom: 2px solid black;
          }
          .bottomBar{
            width: 90vw;
            height: 5px;
            background-color: #FF6F17;
            margin-right: auto;
            margin-left: auto;
            border-top: 2px solid black;
          }

          .innerHeader{
            display:flex;
            flex-flow: row-wrap;
            justify-content: space-between;
          }


          `}</style>
      </div>
    );
  }

  export default Navbar;
