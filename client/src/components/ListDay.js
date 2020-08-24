import React, { Component } from 'react'
import axios from 'axios'
import AddDay from './addDay'
import DeleteAll from './DeleteAll'
import '../App.css'
 
export default class ListDay extends Component {
  constructor(props) {
    super(props)
    this.dayList = this.dayList.bind(this)
    this.state = {
      day: []
    }
  }
  componentDidMount() {
    axios.get('/api')
      .then(res => {
        this.setState({
          day: res.data
        })
      })
      .catch(err => console.log(err))
  
  }
  /* deleteItem = (e) => {
    alert(e.exercise)
    
    //axios.delete('/api/' + this.props.match.params.id, e)
  } */
  dayList = () => {
    return this.state.day.map(d => {
      return <div class="day-item">
        <p>Date: {d.date}</p>
        <p>Exercise: {d.exercise}</p>
        <p>Coffe: {d.coffe}</p>
        <p>Water: {d.water}</p>
        <p>Study: {d.study}</p>
        <p>Work: {d.work}</p>
        {/* <button onClick={this.deleteItem(d)}>Delete</button> */}
      </div>
    })
  }
  render () {
    return <div>
      <div className="list-container">
        {this.dayList()}
      </div>
      <AddDay/>
      <DeleteAll/>
    </div>
  }
}