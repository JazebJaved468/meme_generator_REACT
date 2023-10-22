import React from "react";
import ReactDOM from "react-dom/client";
import "../css/InputField.css";

export default function InputField(props) {
  return (
    <>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeHolder}
        className="input-field"
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}
