// React Imports
import React, { Component } from 'react'

// Style Imports
import './littleitem.scss'

export default class LittleItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      littleItemHover: false,
    }

    this.displayDelete = this.displayDelete.bind(this)
  }

  displayDelete() {
    // Update `this.state.littleItemHover` to control delete btn
    // by toggling boolean `prevState.littleItemHover`
    this.setState((prevState) => ({
      littleItemHover: !prevState.littleItemHover,
    }))
  }


  render() {
    // Deconstructing `this.props.little` and `this.state`
    const { littleItemHover } = this.state
    const { little, del, index } = this.props
    const { type, text } = little

    return (
      <div className="little-item" data-index={index} data-type={type} onClick={this.displayDelete} onKeyDown={this.displayDelete}>
        <p>{text}</p>
        { littleItemHover
          && (
            <img
              className="little-delete-hidden"
              id="little-delete"
              onClick={del}
              onKeyDown={del}
              alt="Delete Little"
              src="./img/exit.png"
            />
          )}
      </div>
    )
  }
}
