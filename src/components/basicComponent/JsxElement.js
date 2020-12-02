import React from 'react'
/*
  --------------------------------------
  JSX Element
  --------------------------------------
  */

var jsxStyle = {
  border: "1px grey ridge",
  color: "forestgreen",
  backgroundColor: "silver",
  padding: "2vw",
  fontSize: "8vw",
  margin: "1vw",
}

// There could be only one root element
const JsxElement = () => <div style={jsxStyle}>Hi, This is a JSX Element</div>

export default JsxElement
