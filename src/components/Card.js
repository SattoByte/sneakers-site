import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart_liked.svg" alt="Like" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <h5>Men Nike Blazers</h5>
      <div className="d-flex jusyfify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>99.99$</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus_button.svg" alt="plus" />
        </button>
      </div>
    </div>
  )
}
export default Card;

