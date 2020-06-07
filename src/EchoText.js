import React, { Component } from 'react'

class EchoText extends Component{
  state = {
    value : '' 
  }

  handleChange = (event) => {
     this.setState({
      value: event.target.value
     });
  }

  render(){
    return (
    <div className="container">
     <input type="text" placeholder="Say Something" onChange={this.handleChange}/>
     <p className="echo">Echo:</p>
     <p>{this.state.value}</p>
     </div>
    ); 
  }
}

export default EchoText;