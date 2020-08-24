import React, { Component } from 'react'
import axios from 'axios'

export default class DeleteAll extends Component {
  deleteList = () => {
    axios.delete('/api')
    window.location = '/'
  }
  render() {
    return <div>
      <button type="button" onClick={this.deleteList}>Delete All</button>
    </div>
  }
}