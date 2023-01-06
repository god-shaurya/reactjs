import React, { useState } from 'react';

export default function FormText(props) {
    const [text, setText] = useState("");
    const handleclick = () => {
        console.log("uppercase button clicked")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase","success")
    }
    
    const handleclick2 = () => {
        console.log("lowercase button clicked")
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase","success")
    }
    const handleonchange = (event) => {
        console.log("onchange clicked")
        setText(event.target.value)
    }
    // if (text=[""]) {
    //     setText("")
        
    // }
    return (
        <>
        <div className='container'>
            <h1 style={{backgroundColor:props.mode==='light'?'white':"#050559",color:props.mode==='light'?'#050559':"white"}}>Enter the text to be analyzed</h1>
            <div>
                <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='light'?'white':"black",color:props.mode==='light'?'black':"white"}}></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-1" onClick={handleclick} >Convert to Uppercase</button>
            <button className="btn btn-primary my-1 mx-1" onClick={handleclick2} >Convert to Lowercase</button>
            
        </div>
        <div className="container my-5" style={{backgroundColor:props.mode==='light'?'white':"#050559",color:props.mode==='light'?'black':"white"}} >
            <h6>{text.split(" ")===[' ']?0:text.split(" ").length} words and {text.length} characters</h6>
            <h2>Your Text Preview</h2>
            <p>{text.length>0?text:"Enter some text above to preview it"}</p>
        </div>
        </>
    )

}
