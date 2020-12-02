import React, { Component } from "react"
import HtmlComponent from "./HtmlComponent"
import JsxElement from "./JsxElement"

class BasicApp extends Component {
  render() {
    return (
      <>
        <HtmlComponent />
        <JsxElement />
      </>
    )
  }
}
export default BasicApp
