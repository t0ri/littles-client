import React, { Component } from 'react'

// Components
import LittleItem from '../LittleItem/LittleItem'

export default class LittlesList extends Component {
  render() {
    // Deconstructing
    const { littles } = this.props
    
    return (
      <div id="littles-list-container">
        {littles.map((little, index) => <LittleItem little={little} key={index} />)}
      </div>
    )
  }
}
