import React, { Component } from 'react'

// Components
import LittleStat from '../LittleStat/LittleStat'

export default class WeeklyLittles extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       weeklyLittles: this.getWeeklyLittles()
    }
  }
  
  getWeeklyLittles() {
    // Deconstructing `this.props`
    const { littles } = this.props

    // Filtering littles for recent entries
    return littles.filter((little) => new Date().getTime() - new Date(little.date).getTime() < 604800000)
  }
  
  render() {
    // Deconstructing `this.props`
    const { weeklyLittles: littles } = this.state

    return (
      <div id="weekly-container">
        <LittleStat string="nerves" type={littles.filter((little) => little.type === 'nerve').length} />
        <LittleStat string="littles" type={littles.length}/>
        <LittleStat string="wins" type={littles.filter((little) => little.type === 'win').length} />
      </div>
    )
  }
}
