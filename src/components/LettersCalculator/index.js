// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {enteredText: '', initialValue: 0}

  typedPhrase = event => {
    const val = event.target.value.length
    this.setState({enteredText: event.target.value, initialValue: val})
  }

  render() {
    const {initialValue} = this.state

    return (
      <div className="letters-calc-bg">
        <div className="letters-calc-comps">
          <h1>Calculate the Letters you enter</h1>
          <div className="letters-calc-input">
            <label htmlFor="phrase">Enter the phrase</label>
            <input
              type="text"
              id="phrase"
              onChange={this.typedPhrase}
              placeholder="Enter the phrase"
            />
          </div>
          <p>No.of letters: {initialValue}</p>
        </div>
        <div className="letters-calc-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
