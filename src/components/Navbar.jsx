import React from 'react';


function Navbar() {
  return (
    <div className="headerWrap">
      <div className="outerHeader">
        <div className="innerHeader">
          <p>Tier List</p>
        <p>Characters</p>
        <p>Info</p>
      </div>
      </div>
      <style jsx>{`
          .headerWrap{

            border: 1px solid black;
          }
          .outerHeader{

            border: 5px solid orange;
          }
          .innerHeader{
            display:flex;
            flex-flow: row-wrap;
            justify-content: space-between;
            border: 1px solid black
          }

          `}</style>
        </div>
      );
    }

    export default Navbar;
