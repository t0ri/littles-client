// React Imports
import React from 'react'

// Style Imports
import './littlestat.scss'

export default function LittleStat(props) {
  // Deconstructing `props`
  const { string, type } = props

  return (
    <div className="little-stat-container" id={string}>
      <span>{type}</span>
      <span>{string}</span>
    </div>
  )
}
