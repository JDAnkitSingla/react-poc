import React from "react"
import Library from "./Library"

let books = [
  {
    name: "Java: The Complete Reference",
    publisher: "Tata McGraw Hill",
    pages: 1200,
  },
  { name: "Programming With Java", publisher: "Tata McGraw Hill", pages: 500 },
  { name: "Head First Java", publisher: "O'Reilly", pages: 1000 },
]

const LibraryApp = () => <Library books={books}></Library>

export default LibraryApp
