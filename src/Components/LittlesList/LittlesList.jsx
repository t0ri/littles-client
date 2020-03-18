/* eslint-disable react/prop-types */

// React Imports
import React, { Component } from 'react'

// Component Imports
import LittleItem from '../LittleItem/LittleItem'

export default class LittlesList extends Component {
  render() {
    // Deconstructing `this.props`
    const { littles } = this.props

    // If startup flow hasn't completed cycle...
    if (littles === undefined) {
      return 'waiting...'
    }

    return (
      <div id="littles-list-container">
        {littles.map((little) => <LittleItem little={little} key={little.text.split(' ')[0]} />)}
      </div>
    )
  }
}
