import React from "react";
import ReactDOM from "react-dom/client";
import "../css/MainContent.css";
import Button from "./Button";
import InputField from "./InputField";
import MemeImage from "./MemeImage";
import memeData from "../data/memesData";
import memeImg from "../images/memeimg.png";

export default function MainContent() {

    // setting state for the meme object
  const [meme, setMeme] = React.useState({
    text1: "",
    text2: "",
    randomMeme: memeImg,
  });

  function getNewImage() {
    // Get all memes from the memeData array
    let allMemes = memeData["data"]["memes"];

    // Get a random meme from the allMemes array
    let randomMeme = Math.floor(Math.random() * allMemes.length);

    // Get the meme url of the random meme
    let url = allMemes[randomMeme]["url"];

    // console.log(memeURL);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomMeme: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <>
      <section className="main-content-container">
        <div className="input-fields-container">
          <InputField
            placeHolder="text 1"
            name="text1"
            onChange={handleChange}
            value = {meme.text1}
          />
          <InputField
            placeHolder="text 2"
            name="text2"
            onChange={handleChange}
            value = {meme.text2}
          />
        </div>
        <div onClick={getNewImage} className="button-container">
          <Button />
        </div>
        <div className="meme-image-container">
          <MemeImage
            imgPath={meme.randomMeme}
            text1={meme.text1}
            text2={meme.text2}
          />
        </div>
      </section>
    </>
  );
}
