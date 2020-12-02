import React from "react"
/* 
--------------------------------------
Basic Element 
--------------------------------------
*/

var style = {
  backgroundColor: "aqua",
  margin: "10px",
}

const HtmlComponent = () =>
  React.createElement(
    "h1",
    { id: "title", className: "header", style: style },
    "Hey! This is using React.createElement!"
  )

export default HtmlComponent
