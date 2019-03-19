import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  state = {
    allSushi: [],
    eatenSushi: [],
    budget: 100
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      console.log(sushis)
      this.setState({
        allSushi: sushis
      })
    })
  }

  onEaten = (sushi) => {
    console.log("were eaten")
    let newBudget = this.state.budget - sushi.price
    let newEatenSushi = [...this.state.eatenSushi]
    newEatenSushi.push(sushi)
    if (newBudget >= 0){
      this.setState({
        budget: newBudget,
        eatenSushi: newEatenSushi
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  budget={this.state.budget} sushis={this.state.allSushi} onEaten={this.onEaten}/>
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
