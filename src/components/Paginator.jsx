import React from "react"
import "../App.css"

export default function Paginator({
  currentPage,
  setCurrentPage,
  portionCount,
  setPortionCount,
  digitsCount,
}) {
  const pages = []
  for (
    let i = 1 + portionCount * digitsCount - digitsCount;
    i <= portionCount * digitsCount;
    i++
  ) {
    pages.push(i)
  }

  const onArrowLeft = () => {
    if (portionCount <= 1) {
      return
    }
    return () => {
      setPortionCount(prev => prev - 1)
    }
  }
  const onArrowRight = () => {
    return () => {
      setPortionCount(prev => prev + 1)
    }
  }
  return (
    <div className="paginator">
      <div onClick={onArrowLeft()} className="arrows">
        &#171;
      </div>
      {pages.map(item => (
        <div
          onClick={() => setCurrentPage(item)}
          key={item}
          className={`paginator__item ${
            item === currentPage && "paginator__item_active"
          }`}
        >
          {item}
        </div>
      ))}
      <div onClick={onArrowRight()} className="arrows">
        &#187;
      </div>
    </div>
  )
}
