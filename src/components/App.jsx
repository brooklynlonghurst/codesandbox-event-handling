import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMousedOver, setIsMousedOver] = useState();
  const [name, setName] = useState("");

  function handleClick() {
    setHeadingText(name);
  }

  function handleMouseOver() {
    setIsMousedOver(true);
  }

  function handleMouseOut() {
    setIsMousedOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
