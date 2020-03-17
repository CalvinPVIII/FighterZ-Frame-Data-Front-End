import React from 'react';


function Footer() {

  return (
    <div className="footer">
      <hr/>
      <p>
        Frame data gathered from spreadsheet created by <a href="//docs.google.com/spreadsheets/d/1-p29UmRGIPF6n17ddOEtYfLcn_KRlE2VH6tE61P5UM8/edit#gid=1043945512">Turtleon</a>
    </p>
  <p>
    Combos courtesy of YouTube user <a href="https://www.youtube.com/channel/UCxJK-tYPajZtdsjhgk5rIwA">KuwangerLR</a>
  </p>
  <p>Dragon Ball, Dragon Ball Z, Dragon Ball GT, and all related characters, images and logos are registered trademarks of Toei Animation and FUNimation in the United States and other countries.</p>
  <p>
  © BIRD STUDIO / SHUIESHA,  TOEI ANIMATION
  Dragon Ball FighterZ © BANDAI NAMCO ENTERTAINMENT</p>
  <style jsx>{`
      .footer{
        text-align: center;
        margin-top: 5%;
        color: white;
        text-shadow: 2px 2px black;
        font-size: 14px;
        width: 100vw;
      }
      a, a:visited {
        color: grey;
      }
      `}</style>
    </div>
  );
}

export default Footer;
