import React from 'react';


function NavbarRectangles() {
  return (
    <div>
      <div className="outerRectangleWrap">
      </div>
      <div className="outerRectangle">
      </div>
      <div className="innerRectangleWrap">
      </div>
      <div className="innerRectangle">
      </div>
    <style jsx>{`
        .outerRectangleWrap{
      width: 6vw;
      height: 2vh;
      transform: skew(-20deg);
      background: #FF6F17;
      border-bottom: 2px solid black;
    }
    .outerRectangle{
  width: 6vw;
  height: .8vh;
  transform: skew(-20deg);
  padding-top: 1vh;
  margin-top: -1.8vh;
  margin-left: -0.1vw;
  border-right: 2px solid black;
}
.innerRectangleWrap{
  width: 6vw;
  height: .8vh;
  transform: skew(-20deg);
  padding-top: 1vh;
  margin-top: -2.3vh;
  margin-left: -0.1vw;
  border-bottom: 2px solid black;
  }
  .innerRectangle{
    width: 6vw;
    height: .4vh;
    transform: skew(-20deg);
    padding-top: 1vh;
    margin-top: -2.3vh;
    margin-left: -0.1vw;
    border-top: 5px solid black;
    background-color: black;
    }


        `}
    </style>
    </div>
  );
}

export default NavbarRectangles;
