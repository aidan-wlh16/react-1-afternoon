import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 2,
            sum: null
        }
    }
    handleNumber1(val){
        this.setState({number1: parseInt(val, 10)})
    }

    handleNumber2(val){
        this.setState({number2: parseInt(val, 10)})
    }

    calculateSum(num1, num2) {
        this.setState({sum: num1 + num2})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>

                <input className="inputLine" onChange={e => this.handleNumber1(e.target.value)}/>
                <input className="inputLine" onChange={e => this.handleNumber2(e.target.value)}/>

                <button className="confirmationButton" onClick={() => this.calculateSum(this.state.number1, this.state.number2)}>Add</button>

        <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum