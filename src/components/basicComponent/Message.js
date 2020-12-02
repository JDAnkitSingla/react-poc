import React from "react"

/*
--------------------------------------
React Component
--------------------------------------
*/
var compStyle = {
  border: "1px grey ridge",
  color: "forestgreen",
  backgroundColor: "cream",
  padding: "1vw",
  fontSize: "2vw",
  margin: "1vw",
}
class Message extends React.Component {
  render() {
    return (
      <div style={compStyle}>
        <p>This is a react component!</p>

        <b>Message :</b>
        <h3 style={{ color: this.props.color }}>{this.props.msg}</h3>

        <b>Number : </b>
        <h3 style={{ color: this.props.color }}>{this.props.num}</h3>
      </div>
    )
  }
}
export default Message
