import React, { Component } from 'react'

export default class LittleStat extends Component {
  render() {
    return (
      <div className="little-stat-container" id={this.props.string}>
        <span>{this.props.type}</span>
        <span>{this.props.string}</span>
      </div>
    )
  }
}