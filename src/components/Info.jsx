import React from 'react';
import Header from './Header'
import Navbar from './Navbar'
import notation from '../images/numNotation.jpg'
function Info() {
  return (
    <div >
      <img className="backgroundImg" src='https://www.onlygfx.com/wp-content/uploads/2018/03/grunge-spiral-8.png'/>
      <Header/>
      <Navbar/>
      <div className="infoText">
      <h1>What is frame data?</h1>
      <p>Frame data is the information regarding how many frames of animation a certain moves has. </p>
      <h1>What makes frame data important</h1>
      <p>Knowing frame data gives players an edge, as they better understand what moves are 'safe', and what moves are best for quick jabs. For example, if both players press a button at the same time, the player whose character's "startup" is faster will hit their opponent first, allowing them to 'hit confirm'.</p>
      <h1>Terms:</h1>
      <h3>Startup:</h3>
      <p>How many frames of animation there are before a move hits the opponent</p>
      <h3>Advantage:</h3>
      <p>How many frames it takes for your character to recover from their attack animation, and your opponent to recover from their hit/block animation. Advantage can be either positive or negative. Positive advantage means you recover first while negative advantage means your opponent recovers first.</p>
      <h3>Guard:</h3>
      <p>Where the attack hits. High attacks must be blocked standing, low attacks must be blocked crouching.</p>
      <h3>Blockstun:</h3>
      <p>How many frames of animation your opponent is stuck blocking</p>
      <h3>BnB's:</h3>
      <p>'Bread and Butter' combos. Combos that are relatively easy, do good damage, and build a good amount of meter.</p>
    </div>
    <div className="notationInfo">
      <h1>How to read combo notations</h1>
      <p>Dragon Ball FighterZ uses whats referred to as 'Numpad Notation', meaning that the direction commands correlate to the keys on a numpad.</p>
      <img className="notationImage"src={notation}/>
      <p>For example, a simple combo of 5L, 2L, 6H, can be seen as standing light, crouching light, forward heavy.</p>
      <h1>Attack Inputs</h1>
      <p>Dragon Ball FighterZ has four main attack buttons: ligh, medium, heavy, and special, referred to as L, M, H, and S.</p>
      <p>On Playstation 4: L equals Square, M equals Triangle, H equals Circle, and S equals Cross (or X)</p>
      <p>On Xbox One: L equals X, M equals Y, H equals B, and S equals A</p>
      <p>On Nintendo Switch: L equals Y, M equals X, H equals A, and S equals B</p>
      <h1>How am I expected to remember all this?</h1>
      <p>You're not. Frame data is most useful during training. As explained by a user on reddit, "People aren't doing frame maths in their head mid-match. Frame data informs your understanding of a situation in the lab; you work out your best options in a given situation, which will be based on the frame data, and then you're remembering those options and playing rock paper scissors with them, essentially."</p>
    </div>
      <style jsx>{`
          .backgroundImg{
            opacity: 0.6;
            position: absolute;
            z-index: -1;
            width: 90%;
            height: 70%;
             transform: rotate(1deg);
             display: block;
             margin-left: 8vw;;
             margin-top: -5vh;
          }
          .characterImg:hover{
            width: 10%;
          }
          .infoText{
            width: 40vw;
            margin-left: 2vw;
            float: left;
          }
          .notationInfo{
            float: right;
            margin-right: 2vw;
            width: 40vw;
          }
          h1 {
            text-shadow: 2px 2px black;
            color: white;
          }
          p{
            font-weight: bold;
          }
          .notationImage {
            width: 13vw;
            height: auto;
          }
            `}</style>
    </div>
  );
}

export default Info;
