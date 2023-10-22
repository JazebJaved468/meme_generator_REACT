import React from "react";
import ReactDOM from "react-dom/client";
import "../css/MainContent.css";
import Button from "./Button";
import InputField from "./InputField";
import MemeImage from "./MemeImage";
import memeImg from "../images/memeimg.png";

export default function MainContent() {

  // setting state for the meme object
  const [meme, setMeme] = React.useState({
    text1: "",
    text2: "",
    randomMeme: memeImg,
  });

  // setting state for the memeData array
  const [memeData, setMemeData] = React.useState([]);


  // Fetching data from the API
  React.useEffect(() =>{
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemeData(data["data"]["memes"]));
  }, []);

  // Function to get a new image on pressing button
  function getNewImage() {


    // Get a random meme from the allMemes array
    let randomMeme = Math.floor(Math.random() * memeData.length);

    // Get the meme url of the random meme
    let url = memeData[randomMeme]["url"];

    // console.log(memeURL);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomMeme: url,
      };
    });
  }

  // Function to handle change in the input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  // UI rendering
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
