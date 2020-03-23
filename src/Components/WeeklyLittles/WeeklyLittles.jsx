// React Imports
import React, { Component } from 'react'

// Components Imports
import LittleStat from '../LittleStat/LittleStat'

// Style Imports
import './timelylittles.scss'

export default class TimelyLittles extends Component {
  render() {
    // Deconstructing `this.props`
    const { littles } = this.props

    if (littles === undefined) {
      return 'waiting...'
    }

    return (
      <div id="weekly-container">
        <LittleStat string="nerves" type={littles.filter((little) => little.type === 'nerve').length} />
        <LittleStat string="littles" type={littles.length} />
        <LittleStat string="wins" type={littles.filter((little) => little.type === 'win').length} />
      </div>
    )
  }
}
