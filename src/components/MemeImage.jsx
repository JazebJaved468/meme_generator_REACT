import React from "react";
import ReactDOM from "react-dom/client";
import "../css/MemeImage.css";
import meme from "../images/memeimg.png";



export default function MemeImage(props) {
  return (
    <div className="meme-image-container"> 
      {/* Image */}
      <img src={props.imgPath} className="meme-img" alt="meme" />
      {/* Text 1 */}
      <p className="meme-text meme-text-1"> {props.text1}</p>
      {/* Text 2 */}
      <p className="meme-text meme-text-2">{props.text2}</p>
    </div>
  );
}