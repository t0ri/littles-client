/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */

// React Imports
import React from 'react'

export default function NewLittle(props) {
  // Deconstructing `props`
  const { onChange, exit, save } = props

  return (
    <div id="new-little-container">
      <h2>Remember a Little</h2>
      <img onClick={exit} onKeyDown={exit} alt="exit" src="./img/exit.png" />

      <div>
        <input
          type="text"
          placeholder="Write your little here."
          onChange={onChange}
        />
        <button type="button" className="save-little-btn" id="nerve" onClick={save}>remember as nerve</button>
        <button type="button" className="save-little-btn" id="win" onClick={save}>remember as win</button>
      </div>
    </div>
  )
}
