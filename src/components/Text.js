import React, {useState} from 'react'

export default function Text(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        setText (text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = ()=>{
        setText (text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = ()=>{
        setText ("");
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#042751', color: props.mode === 'light' ? 'black' : 'white'}} id="mybox" rows="10" ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing here to preview"}</p>
    </div>
    </>
  )
}

