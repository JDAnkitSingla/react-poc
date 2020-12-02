import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const BlogNav = (props) => {
  const { location } = props
console.log(location);

  return (
    <Navbar bg="primary" sticky="top" variant="dark">
      <Nav fill activeKey={location.pathname}>
        <Nav.Link href="/blog/home">Home</Nav.Link>

        <Nav.Link href="/blog/about">About</Nav.Link>

        <Nav.Link href="/blog/articles-list">Articles</Nav.Link>
      </Nav>
    </Navbar>
  )
}
export default BlogNav
