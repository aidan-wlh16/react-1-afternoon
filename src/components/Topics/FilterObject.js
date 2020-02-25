import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()

        this.state ={
            unFilteredArray: [
                {
                    name: 'Jim',
                    title: 'Hack0r',
                    age: 8
                },
                {
                    name: 'Aidan',
                    age: 18,
                    hairColor: 'brown'
                },
                {
                    name: 'Jase',
                    title: 'Bubba'
                }
            ],

            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterArray(prop) {
        let array = this.state.unFilteredArray
        let filteredArray = []

        for(let i = 0; i < array.length; i++){
            if(array[i].hasOwnProperty(prop)) {
                filteredArray.push(array[i])
            }
        }

        this.setState({filteredArray: filteredArray})
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

        <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>

                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>

    <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject