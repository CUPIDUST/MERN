import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState('Please Write Here');
    let handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlt("Converted to Uppercase", "Sucess");
    }
    let handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlt("Converted to Lowercase", "Sucess");
    }
    let handleClearText = () => {
        setText("");
        props.showAlt("Cleared Text", "Sucess");
    }
    let handleOnChange = (event) => {
        setText(event.target.value);
    }
    let handleReverseText = () => {
        let revarr = "";
        let i = 0;
        while (text.length > i) {
            revarr += text.charAt(text.length - 1 - i);
            i++;
        }
        setText(revarr);
        props.showAlt("Text Reversed", "Sucess");
    }
    let handleCopyText = () => {
        let textArea = document.querySelector("#textArea");
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textArea.value);
        props.showAlt("Text Copied To Clipboard", "Sucess");
    }

    return (
        <>
            <div className="container" style={props.myStyle}>
                <div className="form-group" >
                    <label htmlFor="textArea"><h2>{props.heading}</h2></label>
                    <textarea className="form-control my-3" style={props.mode} value={text} onChange={handleOnChange} id="textArea" rows="7"></textarea>
                    <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleReverseText}>Reverse Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyText}>CopyText</button>
                </div>
                <h3>Summary</h3>
                <p>You have {text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} word(s) and {text.length} character(s)</p>
                {/* <button type="button" onClick={handleToggleMode} className="btn btn-primary my-3">{btnText}</button> */}
            </div>
        </>
    )
}