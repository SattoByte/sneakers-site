import React, { useState } from "react";
import styles from './Card.module.scss'

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={props.onFavorite}>
        <img src="/img/heart_liked.svg" alt="Like" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <h5>Men Nike Blazers</h5>
      <div className="d-flex jusyfify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>99.99$</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn_checked.svg' : '/img/plus_button.svg'} alt="plus" />
      </div>
    </div>
  )
}
export default Card;

