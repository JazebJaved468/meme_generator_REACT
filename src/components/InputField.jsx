import React from "react";
import ReactDOM from "react-dom/client";
import "../css/InputField.css";

export default function InputField(props) {
  return (
    <>
        <input type="text" placeholder={props.placeHolder} className="input-field" />
    </>
  );
}