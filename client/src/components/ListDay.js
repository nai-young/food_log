import React, { Component } from 'react'
import axios from 'axios'
 
export default class ListDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /* date: new Date,
      exercise: false,
      coffe: 0,
      water: 0,
      study: 0,
      work: 0 */
      day: []
    }
  }
  componentDidMount() {
    axios.get('/')
      .then(res => {
        this.setState({
          day: res.data
        })
      })
      .catch(err => console.log(err))
  }
  render () {
    return <div>
      {this.state.day}
    </div>
  }
}