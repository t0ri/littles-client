import React, { Component } from 'react'

export default class LittleItem extends Component {
  render() {
    // Deconstructing
    const { little, key } = this.props

    return (
      <div className="little-item" key={key} data-type={little.type}>
        <p>{little.text}</p>
      </div>
    )
  }
}