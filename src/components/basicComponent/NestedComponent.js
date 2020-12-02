import React from "react"
/* 
--------------------------------------
Nested Element 
--------------------------------------
*/
var nestedStyle = {
  color: "pink",
  backgroundColor: "aliceblue",
  border: "1px grey ridge",
  padding: "3vw",
  margin: "1vw",
}
const NestedComponent = React.createElement(
  "ul",
  { id: "ul-li", style: nestedStyle },
  React.createElement("li", {}, "Hello, My name is Ankit"),
  React.createElement("li", {}, "Hello, My name is Aks")
)

export default NestedComponent
