import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    currentSushis: []
  }

  componentDidMount(){
    let allSushis = this.props.sushis
    let nextFour = allSushis.slice(0, 4)
    this.setState({
      currentSushis: nextFour
    }, console.log(this.state))

  }

  renderSushis() {
    console.log(this.props)
    let allSushis = this.props.sushis
    let nextFour = allSushis.slice(0, 4)
    return(
      nextFour.map(sushi => {
        // debugger
        return (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            name={sushi.name}
            price={sushi.price}
            img={sushi.img_url}
            onEaten={this.props.onEaten}
            budget={this.props.budget}
          />
        )
      })
    )
  }


  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
