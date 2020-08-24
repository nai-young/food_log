import React, { Component } from 'react'
import axios from 'axios'

export default class AddDay extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeExercise = this.onChangeExercise.bind(this)
    this.onChangeCoffe = this.onChangeCoffe.bind(this)
    this.onChangeWater = this.onChangeWater.bind(this)
    this.onChangeStudy = this.onChangeStudy.bind(this)
    this.onChangeWork = this.onChangeWork.bind(this) 

    this.state = {
      exercise: 0,
      coffe: 0,
      water: 0,
      study: 0,
      work: 0
    }
  }
   onChangeExercise = (e) =>{
    this.setState({
      exercise: e.target.value
    })
  } 
  onChangeCoffe = (e) => {
    this.setState({
      coffe: e.target.value
    })
  }
  onChangeWater = (e) => {
    this.setState({
      water: e.target.value
    })
  }
  onChangeStudy = (e) => {
    this.setState({
      study: e.target.value
    })
  }
  onChangeWork = (e) => {
    this.setState({
      work: e.target.value
    })
  } 

  onSubmit = (e) => {
    e.preventDefault()
    const day = {
      exercise: this.state.exercise,
      coffe: this.state.coffe,
      water: this.state.water,
      study: this.state.study,
      work: this.state.work,
    }
    axios.post('/api', day)

    window.location = '/'
  }
  render () {
    return <div>
      <form onSubmit={this.onSubmit}>
        Exercise: <input value={this.state.exercise} type="number" placeholder="Exercise" name="exercise" onChange={this.onChangeExercise}/>
        Coffe: <input type="number" placeholder="Coffe" name="coffe" value={this.state.coffe} onChange={this.onChangeCoffe}/>
        Water: <input type="number" placeholder="Water" name="water" value={this.state.water} onChange={this.onChangeWater}/>
        Study: <input type="number" placeholder="Study" name="study" value={this.state.study} onChange={this.onChangeStudy}/>
        Work: <input type="number" placeholder="Work" name="work" value={this.state.work} onChange={this.onChangeWork}/>
        <button type="submit">Add new day</button>
      </form>
    </div>
  }
}