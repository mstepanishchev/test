import React from "react"
import GalleryItem from "./GalleryItem"
import "../App.css"

export default function Gallery({ photos }) {
  return (
    <div className="container">
      <div className="container__inner">
        <h3 className="container__inner_box">name</h3>
        <h3 className="container__inner_box">country</h3>
        <h3 className="container__inner_box">established</h3>
        <h3 className="container__inner_box">slogan</h3>
        <h3 className="container__inner_box">logo</h3>
      </div>
      {photos?.map(photoItem => (
        <GalleryItem key={photoItem._id} item={photoItem.airline} />
      ))}
    </div>
  )
}
