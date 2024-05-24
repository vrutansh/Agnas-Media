import React from 'react'
import "../App.css"

function Marquee({first, second}) {
  return (
    <>
    <div className="marquee-slide">
      <span> {first} - {second} - </span><span> {first} - {second} - </span><span> {first} - {second} - </span><span> {first} - {second} - </span><span> {first} - {second} - </span><span>{first} - {second} - </span>
    </div>
    <div className="marquee-slide">
    <span> {first} - {second} - </span><span> {first} - {second} - </span><span> {first} - {second} - </span><span> {first} - {second} - </span><span> {first} - {second} - </span><span>{first} - {second} - </span>
    </div>
    </>
  )
}

export default Marquee