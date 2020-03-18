/* eslint-disable react/prop-types */
import React from 'react'

export default function LittleItem(props) {
  // Deconstructing `this.props.little`
  const { little } = props
  const { type, text } = little

  return (
    <div className="little-item" data-type={type}>
      <p>{text}</p>
    </div>
  )
}
