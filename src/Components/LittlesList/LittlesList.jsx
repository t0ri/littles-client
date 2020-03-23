// React Imports
import React, { Component } from 'react'

// Component Imports
import LittleItem from '../LittleItem/LittleItem'

// Style Imports
import './littleslist.scss'

export default class LittlesList extends Component {
  render() {
    // Deconstructing `this.props`
    const { littles, del } = this.props

    // If startup flow hasn't completed cycle...
    if (littles === undefined) {
      return 'waiting...'
    }

    return (
      <div id="littles-list-container">
        {littles.map((little, index) => (
          <LittleItem
            index={index}
            del={del}
            little={little}
            key={little.text.split(' ').join('-')}
          />
        ))}
      </div>
    )
  }
}
