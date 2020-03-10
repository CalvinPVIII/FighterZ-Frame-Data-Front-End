import React from 'react';


function Navbar() {
  return (
    <div className="headerWrap">
    <p>Tier List</p>
    <p>Characters</p>
    <p>Info</p>
    <style jsx>{`
        .headerWrap{
          display:flex;
          flex-flow: row-wrap;
          justify-content: space-between;
        }`}</style>
    </div>
  );
}

export default Navbar;
