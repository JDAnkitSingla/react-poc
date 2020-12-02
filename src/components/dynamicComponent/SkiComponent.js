import React, {Component} from 'react';
import Message from '../basicComponent/Message.js';


/*
------------------------------------------------------------
Dynamic Component
  - Use of string concatination
  - Passing props from an object
  - Using props as new variables to get rid of this.props
  - Use of render method directly instead on ReactDOM.render
  - Use of Component directly instead on React.Component
  - Use of Nested Components
-----------------------------------------------------------
*/


class SkiComponent extends Component {
  render() {
    const {total, powder, backCountry, goal} = this.props;
    return (
      <section>
        <Message 
          text={"Total Days : " + total} 
          num={total} 
          color="orange"
        ></Message>

        <Message 
          text={'Powder Days : ' + powder} 
          num={powder} 
          color="black"
        ></Message>

        <Message 
          text={'Back Country Days : ' + backCountry} 
          num={backCountry} 
          color="red"
        ></Message>

        <Message 
          text={'Goal : ' + goal} 
          num={goal} 
          color="pink"
        ></Message>
      </section>
    )
  }
}

export default SkiComponent;