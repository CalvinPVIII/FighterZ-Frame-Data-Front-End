import React from 'react';


function Navbar() {
  return (
    <div className="headerWrap">
      <div className="topBar">
      </div>
      <div class='topLeftRectangle'>
      <div className="topLeftouterRectangleWrap">
      </div>
      <div className="topLeftouterRectangle">
      </div>
      <div className="topLeftinnerRectangleWrap">
      </div>
      <div className="topLeftinnerRectangle">
      </div>
      </div>
      <div className='topRightRectangle'>
      <div className="topRightouterRectangleWrap">
      </div>
      <div className="topRightouterRectangle">
      </div>
      <div className="topRightinnerRectangleWrap">
      </div>
      <div className="topRightinnerRectangle">
      </div>
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
          .topRightRectangle{
            float: right;
            margin-top: -1.4vh;
            margin-right: -1.3vw;
          }
          .topRightinnerRectangle{
            width: 118px;
            height: 20px;
            transform: skew(30deg);
            margin-top: -2.8vh;

            background-color: black;
            border-top: 1px solid black;
          }
          .topRightinnerRectangleWrap{
            width: 90px;
            height: 10px;
            transform: skew(20deg);
            margin-top: -1.7vh;
            margin-left: .3vw;
            border-bottom: 1px solid black;
          }
          .topRightouterRectangleWrap{
            width: 100px;
            height: 30px;
            transform: skew(20deg);
            background:#FF6F17;
            margin-top: -.8vh;
          }
          .topRightouterRectangle{
            width: 99px;
            height: 25px;
            transform: skew(27deg);
            background:#FF6F17;
            margin-top: -2.5vh;
            border-left: 2px solid black;
            border-bottom: 2px solid black;
          }
          .topLeftinnerRectangle{
            width: 118px;
            height: 20px;
            transform: skew(-30deg);
            margin-top: -2.8vh;
            margin-left: -1vw;
            background-color: black;
            border-top: 1px solid black;
          }
          .topLeftinnerRectangleWrap{
            width: 96px;
            height: 10px;
            transform: skew(-20deg);
            margin-top: -1.7vh;
            border-bottom: 1px solid black;
          }
          .topLeftouterRectangleWrap{
            width: 100px;
            height: 30px;
            transform: skew(-20deg);
            background:#FF6F17;
            margin-top: -.8vh;
          }
          .topLeftouterRectangle{
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
