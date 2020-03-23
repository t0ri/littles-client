// React Imports
import React, { Component } from 'react'

// Components Imports
import Heading from './Components/Heading/Heading'
import TimelyLittles from './Components/WeeklyLittles/WeeklyLittles'
import NewLittle from './Components/NewLittle/NewLittle'
import LittlesList from './Components/LittlesList/LittlesList'

// Styles Imports
import './App.scss'

// Data Imports
import data from './data.json'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timeFrame: 'weekly',
      littles: undefined,
      newLittleOpen: false,
      newLittle: '',
    }


    // Binding `this` to methods
    this.newLittleModalStateControl = this.newLittleModalStateControl.bind(this)
    this.timeFrameStateControl = this.timeFrameStateControl.bind(this)
    this.getLittlesInTimeFrame = this.getLittlesInTimeFrame.bind(this)
    this.inputLittleStateHandler = this.inputLittleStateHandler.bind(this)
    this.saveNewLittle = this.saveNewLittle.bind(this)
    this.deleteLittle = this.deleteLittle.bind(this)
  }


  componentDidMount() {
    // Update `this.state.littles` using current `this.state.timeFrame`
    this.getLittlesInTimeFrame()
  }


  getLittlesInTimeFrame() {
    // Deconstructing `this.state`
    const { timeFrame } = this.state

    // Create variable to hold filtered data
    let littles

    // Create variable to hold today in milliseconds
    const now = new Date().getTime()

    // Filter `data` by its timeframe and update `littles`
    switch (timeFrame) {
      case 'weekly':
        littles = data.filter((little) => now - new Date(little.date).getTime() < 604800000)
        break
      case 'monthly':
        littles = data.filter((little) => now - new Date(little.date).getTime() < 2592000000)
        break
      case 'yearly':
        littles = data.filter((little) => now - new Date(little.date).getTime() < 31536000000)
        break
      default:
        littles = data
    }

    // Set `this.state.littles` to `littles`
    this.setState({ littles })
  }


  newLittleModalStateControl() {
    // Update `this.state.newLittleOpen` to control <NewLittle /> modal
    // by toggling boolean `prevState.newLittleOpen`
    this.setState((prevState) => ({
      newLittleOpen: !prevState.newLittleOpen,
    }))
  }


  timeFrameStateControl(e) {
    // Update `this.timeFrame` with new timeframe from onClick
    this.setState({ timeFrame: e.target.id })

    // Update `this.state.littles` using current `this.state.timeFrame`
    this.getLittlesInTimeFrame()
  }


  inputLittleStateHandler(e) {
    // Set `this.state.newLittle` to update onChange
    // with event target (text input)
    this.setState({
      newLittle: e.target.value,
    })
  }


  saveNewLittle(e) {
    // Deconstructing `this.state`
    const { littles, newLittle } = this.state

    // Check if newLittle is empty
    if (newLittle === '') {
      this.newLittleModalStateControl()
      return
    }

    // Create temporary object containing new data
    const tempLittle = {
      type: e.target.id,
      text: newLittle,
      date: new Date(),
    }

    // Create new instance of current `this.state.littles` array
    const littlesTemp = []
    littles.forEach((little) => littlesTemp.push(little))

    // Push new `little` object into temporary object
    littlesTemp.push(tempLittle)

    // Update `this.state.littles` to new instance of array
    this.setState({ littles: littlesTemp })

    // Delete value from input text box
    e.target.parentElement.firstChild.value = ''

    // Close the <NewLittle /> modal
    this.newLittleModalStateControl()
  }


  createWelcomeMessage() {
    // Deconstructing `this.state`
    const { timeFrame } = this.state

    // Empty variable to hold returned message
    let message

    switch (timeFrame) {
      case 'weekly':
        message = 'here are your week\'s littles'
        break
      case 'monthly':
        message = 'here are your month\'s littles'
        break
      case 'yearly':
        message = 'here are your year\'s littles'
        break
      default:
        message = 'here are your littles'
    }

    return message
  }


  deleteLittle(index) {
    // Deconstructing `this.state`
    const { littles } = this.state

    // Create new instance of current `this.state.littles` array
    const littlesTemp = []
    littles.forEach((little) => littlesTemp.push(little))

    // Remove the index passed from <LittleItem />
    littlesTemp.splice(index, 1)

    this.setState({ littles: littlesTemp })
  }


  render() {
    // Deconstructing `this.state`
    const { littles, newLittleOpen } = this.state

    return (
      <div className="App">

        {/* Heading */}
        <Heading />

        <div id="content-container">
          <div id="content-left">

            {/* Left Top */}
            <div id="content-top">

              {/* Welcome Message */}
              <div id="welcome-container">
                <h1>Hi Josie,</h1>
                <h1>{this.createWelcomeMessage()}</h1>
              </div>

              {/* Littles Statistics */}
              <TimelyLittles littles={littles} />
            </div>

            {/* Left Bottom */}
            <div id="content-bottom">

              {/* Time Frame Control Buttons */}
              <button type="button" className="time-frame-btn" id="weekly" onClick={this.timeFrameStateControl}>View Weekly</button>
              <button type="button" className="time-frame-btn" id="monthly" onClick={this.timeFrameStateControl}>View Monthly</button>
              <button type="button" className="time-frame-btn" id="yearly" onClick={this.timeFrameStateControl}>View Yearly</button>
              <button type="button" className="time-frame-btn" id="all" onClick={this.timeFrameStateControl}>View All</button>

              {/* New Little Button */}
              <button
                type="button"
                id="new-little-btn"
                onClick={this.newLittleModalStateControl}
              >
                +
              </button>
            </div>

          </div>

          {/* Right */}
          <div id="content-right">
            {/* Littles List */}
            <LittlesList del={this.deleteLittle} littles={littles} />
          </div>

          {/* Modal */}
          { newLittleOpen
            && (
            <NewLittle
              exit={this.newLittleModalStateControl}
              save={this.saveNewLittle}
              onChange={this.inputLittleStateHandler}
            />
            )}

        </div>
      </div>
    )
  }
}
