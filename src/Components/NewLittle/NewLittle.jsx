/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// React Imports
import React from 'react'

// Style Imports
import './newlittle.scss'

export default function NewLittle(props) {
  // Deconstructing `props`
  const { onChange, exit, save } = props

  return (
    <div>
      <div id="new-little-container-overlay" />
      <div id="new-little-container">
        <img onClick={exit} onKeyDown={exit} alt="exit" src="./img/exit.png" />
        <h2>Remember a Little</h2>

        <div>
          <textarea
            type="text"
            placeholder="Write your little here."
            maxLength="50"
            onChange={onChange}
          />
          <div>
            <button type="button" className="save-little-btn" id="nerve" onClick={save}>remember as nerve</button>
            <button type="button" className="save-little-btn" id="win" onClick={save}>remember as win</button>
          </div>
        </div>
      </div>
    </div>
  )
}
