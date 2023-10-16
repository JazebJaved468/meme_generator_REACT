import React from "react";
import ReactDOM from "react-dom/client";
import "../css/Button.css";
import memeData from "../data/memesData";
import MemeImage from "./MemeImage";

export default function Button() {
  

  // let memeURL = '';
  
 /* function getNewImage() {

    // Get all memes from the memeData array
    let allMemes = memeData['data']['memes'];

    // Get a random meme from the allMemes array
    let randomMeme = Math.floor(Math.random() * allMemes.length);

    // Get the meme url of the random meme
    memeURL = allMemes[randomMeme]['url'];
    
  }
  */

  return (
    <>
        <button className="button">
            Get a new meme image 🖼
        </button>
    </>
  );
}