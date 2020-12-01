import React, { Component } from "react"
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"
import AppNavBar from "./AppNavBar"
import BasicApp from "../basicComponent/BasicApp"
import UserDashboard from "../apiComponent/UserDashboard"
import LibraryApp from "../stateComponent/LibraryApp"
import SkiApp from "../dynamicComponent/SkiApp"
import BlogApp from "../blog/BlogApp"

class App extends Component {
  render() {
    const NavWithRoute = withRouter(AppNavBar)
    return (
      <>
        <Router>
          <NavWithRoute />
          <Route path="/basic" component={BasicApp} exact />
          <Route path="/userapp" component={UserDashboard} exact />
          <Route path="/blog" component={BlogApp} />
          <Route path="/library" component={LibraryApp} exact />
          <Route path="/dynamic" component={SkiApp} exact />
        </Router>
      </>
    )
  }
}

export default App
