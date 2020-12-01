import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const navSelection = (k, e) => {
  console.log(e)
}
const AppNavBar = (props) => {
  const { location } = props
  console.log(location)
  return (
    <Navbar
      bg="dark"
      sticky="top"
      variant="dark"
      role="navigation"
      onSelect={navSelection}
    >
      <Nav
        activeKey={
          location.pathname.includes("blog") ? "/blog" : location.pathname
        }
      >
        <Nav.Link href="/userapp">User App</Nav.Link>

        <Nav.Item>
          <Nav.Link href="/blog">Blog App</Nav.Link>
        </Nav.Item>

        <Nav.Link href="/library">Library</Nav.Link>

        <Nav.Link href="/dynamic">Dynamic Component</Nav.Link>

        <Nav.Link href="/basic">Basic Components</Nav.Link>
      </Nav>
    </Navbar>
  )
}
export default AppNavBar
