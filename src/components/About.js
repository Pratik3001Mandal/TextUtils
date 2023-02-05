import React, { useState } from 'react'

export default function About(props) {

  return (
    <>
        <div className='container'>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button ${props.mode === "#226422" ? 'green-theme navbar-dark accordian-color' : props.mode === "#b11515" ? "red-theme navbar-dark accordian-color" : ' bg-'+props.mode} ${props.mode === "dark" ? "dark-theme navbar-dark accordian-color" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count, replacing certain words etc.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button collapsed ${props.mode === "#226422" ? 'green-theme navbar-dark accordian-color' : props.mode === "#b11515" ? "red-theme navbar-dark accordian-color" : ' bg-'+props.mode} ${props.mode === "dark" ? "dark-theme navbar-dark accordian-color" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button collapsed ${props.mode === "#226422" ? 'green-theme navbar-dark accordian-color' : props.mode === "#b11515" ? "red-theme navbar-dark accordian-color" : ' bg-'+props.mode} ${props.mode === "dark" ? "dark-theme navbar-dark accordian-color" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
