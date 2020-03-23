// React Imports
import React, { Component } from 'react'

// Style Imports
import './heading.scss'

export default class Heading extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accountModalOpen: false,
    }

    // Binding `this`
    this.accountModalControl = this.accountModalControl.bind(this)
  }

  accountModalControl() {
    // Deconstructing `this.state`
    const { accountModalOpen } = this.state
    // Update `this.state.accountModalOpen` to control modal
    // by toggling boolean `prevState.accountModalOpen`
    this.setState((prevState) => ({
      accountModalOpen: !prevState.accountModalOpen,
    }))

    // Get Element in DOM
    const el = document.getElementById('user-modal')
    // Remove/Add '.user-modal-active' to change color of div
    el.classList.remove('user-modal-active')
    if (!accountModalOpen) {
      el.classList.add('user-modal-active')
    }
  }

  render() {
    // Deconstructing `this.state`
    const { accountModalOpen } = this.state

    return (
      <div id="heading-container">
        {/* Logo */}
        <span>littles</span>
        {/* Logout / Delete Data */}
        <div id="user-modal" onKeyDown={this.accountModalControl} onClick={this.accountModalControl}>
          { accountModalOpen
            && (
              <div>
                <p>Logout</p>
                <p>Delete Account</p>
              </div>
            )}
        </div>
      </div>
    )
  }
}
