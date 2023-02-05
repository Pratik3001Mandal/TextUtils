import React, { useState } from 'react';


export default function TextForm(props) {
    const handleChangeEvent = (event) => {
        setText(event.target.value);
    }
    const handleOnChangeEvent = (event) => {
        setReplaceText(event.target.value);
    }
    const handleOnWithChangeEvent = (event) => {
        setReplaceWithText(event.target.value);
    }

    const handleUpClickEvent = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
        window.scrollTo(0, 0);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
        window.scrollTo(0, 0);
    }
    const handleReplaceText = () => {
        let replaceWord = replaceText;
        let replaceWordWith = replaceWithText;
        let newWord = text.replace(replaceWord, replaceWordWith);
        setText(newWord);
        props.showAlert("Words are replaced!", "success");
        window.scrollTo(0, 0);
    }
    const handleSwapEvent = () => {
        setReplaceText(replaceWithText);
        setReplaceWithText(replaceText);
        props.showAlert("Words are succussfully swapped!", "success");
        window.scrollTo(0, 0);
    }
    const handleCopy=()=>{
        var text = document.getElementById("myText");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
        window.scrollTo(0, 0);
    }


    const [text, setText] = useState("");
    const [replaceText, setReplaceText] = useState("");
    const [replaceWithText, setReplaceWithText] = useState("");

    return (
        <>
            <div className={`text-${props.mode === "light"? "dark" : "light"} container`}>
                <h1>{props.heading}</h1>
                <label htmlFor="replaceText">Replace Text</label>
                <input type="text" className="form form-control replaceText my-2" value={replaceText} onChange={handleOnChangeEvent} />
                <button disabled={(replaceText.length === 0 || replaceWithText.length === 0 || text.length === 0)} className={`btn btn-${props.mode === "dark"? "dark" : props.mode === "#226422"? "success" : props.mode === "#b11515" ? "danger" : "primary"} my-2`} onClick={handleSwapEvent}>Swap</button><br />
                <label htmlFor="replaceWithText">Replace With</label>
                <input type="text" className="form form-control replaceWithText my-2" value={replaceWithText} onChange={handleOnWithChangeEvent} />
                <div className="mb-3">
                    <textarea className="form-control" id="myText" rows="8" value={text} onChange={handleChangeEvent}></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark"? "dark" : props.mode === "#226422"? "success" : props.mode === "#b11515" ? "danger" : "primary"} mx-1 my-1`} onClick={handleUpClickEvent}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark"? "dark" : props.mode === "#226422"? "success" : props.mode === "#b11515" ? "danger" : "primary"} mx-1 my-1`} onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark"? "dark" : props.mode === "#226422"? "success" : props.mode === "#b11515" ? "danger" : "primary"} mx-1 my-1`} onClick={handleReplaceText}>Replace Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark"? "dark" : props.mode === "#226422"? "success" : props.mode === "#b11515" ? "danger" : "primary"} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className={`text-${props.mode === "light"? "dark" : "light"} container my-3`}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
        
    )
}
