import React, {Component} from 'react'

class Book extends Component {
  
    render() {
      return (
        <section className="book">
          <b>Book :</b> 
          <p>Name : {this.props.name}</p>
          <p>Publisher : {this.props.publisher}</p>
          <p>Pages : {this.props.pages}</p>
        </section>
      )
    }
  }

  export default Book;