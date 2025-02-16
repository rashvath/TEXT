//import React, { useState } from 'react';

export default function About(props) {
 //   const [MyStyle, setStyle] = useState({
 //     backgroundColor: 'white',
 //     color: 'black',
 //   });    
    let MyStyle={
      color: props.mode=== 'dark'?'white':'#042743',
      backgroundColor:props.mode=== 'dark'?'#042743':'white',
    }
    return (
        <div className='container' style={MyStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" style={MyStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze your text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            Our tool helps you gain valuable insights into your content by analyzing structure, readability, and key elements, ensuring clarity and effectiveness.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <><strong> Free to use</strong></>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            Enjoy full access to all features without any charges or restrictions, making it a convenient and accessible solution for everyone.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong> Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            Designed to work seamlessly on all modern web browsers, ensuring a smooth and hassle-free experience across different devices.
                        </div>
                    </div>
                </div>
            </div>

            {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-4">{btnText}</button> */}
        </div>
    );
}