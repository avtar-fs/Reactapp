import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter update");
  const [copied, setCopied] = useState(false);

  const sendOnClick = () => {
    console.log("Send on click");
    setText("Click on this button");
    props.showAlert("Send Update", "Success");
  };

  const sendonchange = (event) => {
    console.log("Send on change");
    setText(event.target.value.toUpperCase());
  };

  const clickOnCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      // 2 seconds baad popup hide
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={sendonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={sendOnClick}>
          Send to update
        </button>
        <button className="btn btn-primary" onClick={clickOnCopy}>
          Copy Text
        </button>
        {copied && <span className="ms-2">Copied!</span>}
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>This is heading</h1>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Reading time</p>
      </div>
    </>
  );
}
