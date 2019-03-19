// import React, { Fragment } from 'react'
import React, { Component } from 'react';

class Sushi extends Component {

  state = {
    eaten: false
  }

  handleClick = (e) => {
    if(this.props.budget >= this.props.sushi.price){
      if (!this.state.eaten){
        this.props.onEaten(this.props.sushi)
        this.setState({
          eaten: true
        })
      }
    }
  }

  render(){
    // debugger
    return (
      <div className="sushi">

        <div
          className="plate"
          onClick={this.handleClick}
        >
          {this.state.eaten ? null : <img src={this.props.img} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
