/* eslint-disable react/prop-types */

// React Imports
import React from 'react'

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
