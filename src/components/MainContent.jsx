import React from "react";
import ReactDOM from "react-dom/client";
import "../css/MainContent.css";
import Button from "./Button";
import InputField from "./InputField";
import MemeImage from "./MemeImage";
import memeData from "../data/memesData";
import memeImg from "../images/memeimg.png";

export default function MainContent() {

    const [memeURL, setMemeURL] = React.useState(memeImg);

    function getNewImage() {

        // Get all memes from the memeData array
        let allMemes = memeData['data']['memes'];
    
        // Get a random meme from the allMemes array
        let randomMeme = Math.floor(Math.random() * allMemes.length);
    
        // Get the meme url of the random meme
        let url = allMemes[randomMeme]['url'];
        
        console.log(memeURL);
        setMemeURL(url);
      }

  return (
    <>
      <section className="main-content-container">
        <div className="input-fields-container">
          <InputField placeHolder="text 1" />
          <InputField placeHolder="text 2" />
        </div>
        <div onClick={getNewImage} className="button-container">
        <Button />
        </div>
        <div className="meme-image-container">
        <MemeImage imgPath ={memeURL}/>
        </div>
      </section>
    </>
  );
}
