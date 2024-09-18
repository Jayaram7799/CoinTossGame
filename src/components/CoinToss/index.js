// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    headScore: 0,
    tailScore: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalScore: prevState.totalScore + 1, // Increment totalScore here
        headScore: prevState.headScore + 1, // Increment headScore
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        totalScore: prevState.totalScore + 1, // Increment totalScore here
        tailScore: prevState.tailScore + 1, // Increment tailScore
      }))
    }
  }

  render() {
    const {isHead, totalScore, headScore, tailScore} = this.state
    const imgUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <div>
            <img src={imgUrl} alt="toss result" className="img" />
          </div>

          <button type="button" className="btn" onClick={this.onClickTossCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <div className="total-score">
              <p>Total: {totalScore}</p>
            </div>
            <div className="total-score">
              <p>Heads: {headScore}</p>
            </div>
            <div className="total-score">
              <p>Tails: {tailScore}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
