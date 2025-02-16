import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('Upper case was clicked' +text);
        let neText=text.toUpperCase();
        setText(neText);
        props.showAlert("Converted to upper case","Success")
    }
    const handleLoClick=()=>{
        console.log('Loweer case was clicked' +text);
        let neText=text.toLowerCase();
        setText(neText);
        props.showAlert("Converted to Lower case","Success")
    }

    const handleOnChange=(event)=>{
        console.log('Upper case On change');
        setText(event.target.value);
       
    }
    const handleClear=(event)=>{
        console.log('clear');
        setText('');
        props.showAlert("Cleared","Success")
    }
    const FirstCapital=(event)=>{
        console.log('Capitalize the first letter of each words');
        setText(text.replace(/\b\w/g, char => char.toUpperCase()));
        props.showAlert("Converted First letter case","Success")

    }
    const handleRemoveSpaces = () => {
        let newText=text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("Cleared","Success")
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "Success");
    }
    const handleFindReplace = () => {
        let findWord = prompt("Enter the word to find:");
        let replaceWord = prompt("Enter the replacement word:");
        if (findWord && replaceWord) {
            setText(text.replace(new RegExp(findWord, "gi"), replaceWord));
            props.showAlert(`Replaced '${findWord}' with '${replaceWord}'`, "Success");
        }
    };
//method begins
    const numberToWords = (num) => {
        if (num === 0) return "Zero";
    
        const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
                             "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
                             "Seventeen", "Eighteen", "Nineteen"];
    
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    
        const scales = ["", "Thousand", "Lakh", "Crore"];
    
        const convertBelowHundred = (n) => {
            if (n < 20) return belowTwenty[n];
            return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + belowTwenty[n % 10] : "");
        };
    
        const convertBelowThousand = (n) => {
            if (n < 100) return convertBelowHundred(n);
            return belowTwenty[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + convertBelowHundred(n % 100) : "");
        };
    
        let word = "";
        let scaleIndex = 0;
    
        while (num > 0) {
            if (num % 1000 !== 0) {
                word = convertBelowThousand(num % 1000) + " " + scales[scaleIndex] + " " + word;
            }
            num = Math.floor(num / 1000);
            scaleIndex++;
        }
    
        return word.trim();
    };

//Ends here

    const handleNumbersToWords = () => {
        let newText = text.replace(/\b\d+\b/g, (match) => numberToWords(parseInt(match)));
        setText(newText);
        props.showAlert("Converted Numbers to Words", "Success");
    };
    
        
    const [text,setText]= useState(' ');
    return (
        <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'} }> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox1"  style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black' ,fontSize: "25px",sizeheight: "300px",padding: "12px"} } rows="6"></textarea>


                                        {/*Buttons*/}
        </div>
        <div className="d-flex flex-column gap-3">
  <div className="btn-group" role="group" aria-label="Text Operations">
    <button type="button" className="btn btn-danger mx-1" style={{ width: '80px', height: '30px' }} onClick={handleUpClick}>Upper</button>
    <button type="button" className="btn btn-warning mx-1" style={{ width: '80px', height: '30px' }} onClick={handleLoClick}>Lower</button>
    <button type="button" className="btn btn-info mx-1" style={{ width: '80px', height: '30x' }} onClick={handleFindReplace}>Replace</button>
  </div>

  <div className="btn-group" role="group" aria-label="Formatting">
    <button type="button" className="btn btn-success mx-1" style={{ width: '80px', height: '30px' }} onClick={FirstCapital}>Capitalize</button>
    <button type="button" className="btn btn-secondary mx-1" style={{ width: '80px', height: '30px' }} onClick={handleRemoveSpaces}>Spaces</button>
    <button type="button" className="btn btn-primary mx-1" style={{ width: '80px', height: '30px' }} onClick={handleNumbersToWords}>Num to words</button>
  </div>

  <div className="btn-group" role="group" aria-label="Actions">
    <button type="button" className="btn btn-dark mx-1" style={{ width: '80px', height: '45px' }} onClick={handleCopyText}>Copy</button>
    <button type="button" className="btn btn-danger mx-1" style={{ width: '80px', height: '45px' }} onClick={handleClear}>Clear</button>
  </div>
</div>


    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'} }>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
    </div>
    </>
  )
}
