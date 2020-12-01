import React, {Component} from 'react';
import Book from './Book';

/*
------------------------------------------------------------
State Component
  - Use of state instead of props
-----------------------------------------------------------
*/

  
  class Library extends Component {
  
    state = {
      ...this.props, 
      open: true
    }
  
    toggleLibrary = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
  
    /*
    constructor(props) {
      super(props)
      this.state = {
        ...props,
        open: true
      }
      this.toggleLibrary = this.toggleLibrary.bind(this)
    }
  
    toggleLibrary () {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
    */
    render() {
      return (
        <div>
          <h2>The book library is {this.state.open ? 'OPEN' : 'CLOSED'}</h2>
  
          <p>
            <button onClick={this.toggleLibrary}>
              {this.state.open ? 'Close Library' : 'Open Library'}
            </button>
          </p>
  
          {this.state.open ?
            this.state.books.map( (book, i) => 
              <Book 
                key={i} 
                name={book.name} 
                publisher={book.publisher} 
                pages={book.pages} />
            ) : ''
          }
        </div>
      )
    }
  }
  
  export default Library;