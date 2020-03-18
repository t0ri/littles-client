import React, { Component } from 'react'

// Styles
import './App.scss'

// Components
import Heading from './Components/Heading/Heading'
import WeeklyLittles from './Components/WeeklyLittles/WeeklyLittles'
import NewLittle from './Components/NewLittle/NewLittle'
import LittlesList from './Components/LittlesList/LittlesList'

// Data
import data from './data.json'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      littles: data,
    }
  }


  render() {
    // Deconstructing `this.state`
    const { littles } = this.state

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
                <h1>here are your week's littles</h1>
              </div>

              {/* Littles Weekly */}
              <WeeklyLittles littles={littles} />

              {/* Left Bottom */}
              <div id="content-bottom">
                {/* New Little */}
                <NewLittle />
              </div>
            </div>

            {/* Right */}
            <div id="content-right">
              {/* Littles List */}
              <LittlesList littles={littles} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}
