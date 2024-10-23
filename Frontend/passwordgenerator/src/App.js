import React, { useCallback, useEffect, useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [number, setNumber] = useState(true);
  let [character, setCharacter] = useState(false);
  let [length, setLength] = useState(8);

  const createPassword = useCallback(() => {
    let pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) pass += "0123456789";
    if (character) pass += "<>,.?/:;'[]{}|";
    let temp = "";
    for (let i = 0; i < length; i++) {
      temp += pass.charAt(Math.floor(Math.random() * pass.length + 1));
    }
    setPassword(temp);
  }, [length, number, character, setPassword]);

  const handleCopyText = () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(password);

    // Alert the copied text
    alert("Copied the text: " + password);
  };

  useEffect(() => {
    createPassword();
  }, [length, number, character, createPassword]);

  return (
    <>
      <div className="outerbox">
        <div className="innerbox">
          <h1>Password Generator</h1>
          <div className="display-flex ">
            <input
              type="text"
              placeholder="Your Password Here"
              className="passwordshow"
              readOnly
              value={password}
            />
            <button className="btn-primary" onClick={handleCopyText}>
              COPY
            </button>
          </div>
          <div className="display-flex">
            <input
              type="range"
              id="exampleRangeInput"
              min={8}
              max={25}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
            />
            <label htmlFor="exampleRangeInput">Length: {length}</label>
            <input
              type="checkbox"
              id="exampleNumberInput"
              checked
              onChange={(e) => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="exampleNumberInput">Number</label>
            <input
              type="checkbox"
              id="exampleCharacterInput"
              onChange={(e) => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="exampleCharacterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
