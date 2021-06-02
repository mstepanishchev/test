import React from "react"
import "../App.css"

export default function GalleryItem({ item }) {
  return (
    <div className="container__inner">
      {/* <img src={`${item.logo}`} /> */}
      <div className="container__inner_box">{item.name}</div>
      <div className="container__inner_box">{item.country}</div>
      <div className="container__inner_box">{item.established}</div>
      <div className="container__inner_box">{item.slogan}</div>
      <div className="container__inner_box">
        <img className="logo" src={`${item.logo}`} alt="logo" />
      </div>
    </div>
  )
}
