import React from "react"
import { render } from "react-dom"
import App from "./components/App/App"
import "bootstrap/dist/css/bootstrap.css"
import "jquery/dist/jquery.js"
import "popper.js/dist/umd/popper.js"
import "bootstrap/dist/js/bootstrap.js"

import "./css/index.css"

render(
    <App />, 
    document.getElementById("root")
    )
