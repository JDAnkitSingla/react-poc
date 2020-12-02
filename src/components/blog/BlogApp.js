import React, { Component } from "react"
import { Route, BrowserRouter as Router, withRouter } from "react-router-dom"
import BlogNav from "./BlogNav"
import AboutPage from "./pages/AboutPage"
import ArticlePage from "./pages/ArticlePage"
import ArticlesList from "./pages/ArticlesList"
import HomePage from "./pages/HomePage"

class BlogApp extends Component {
  render() {
    const NavWithRoute = withRouter(BlogNav)
    return (
      <>
        <Router>
          <NavWithRoute />
          <Route path="/blog/home" component={HomePage} exact />
          <Route path="/blog/about" component={AboutPage} exact />
          <Route path="/blog/articles-list" component={ArticlesList} exact />
          <Route path="/blog/article/:name" component={ArticlePage} exact />
        </Router>
      </>
    )
  }
}

export default BlogApp
