import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😁": "laughter",
  "😡": "angry",
  "😱": "surprised",
  "😎": "cool",
  "😍": "love",
  "😋": "tasty",
  "😭": "crying",
  "😐": "lame"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(item) {
    setMeaning(emojiDictionary[item]);
  }
  function changeHandler(event) {
    if (event.target.value in emojiDictionary) {
      setMeaning(emojiDictionary[event.target.value]);
    } else {
      setMeaning("failed to recognise");
    }
  }
  let search = (
    <input
      onChange={changeHandler}
      placeholder={"Search your emoji"}
      style={{
        padding: "1em",
        minWidth: "80%"
      }}
    />
  );

  const emojis = Object.keys(emojiDictionary);
  let disp = emojis.map((emoji) => {
    return (
      <span
        onClick={() => emojiClickHandler(emoji)}
        style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
      >
        {" "}
        {emoji}{" "}
      </span>
    );
  });

  return (
    <div className="App">
      <h1>Find emoji</h1>
      {search}
      <h1>{meaning}</h1>
      {disp}
    </div>
  );
}
