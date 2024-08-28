import React, { useState } from "react";
import styles from './Card.module.scss'

function Card({ imageUrl, title, price, onPlus }) {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);


  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.isFavorite} onClick={onClickFavorite}>
        <img src={isFavorite ? `/img/heart_liked.svg` : `/img/heart_unliked.svg`} alt="Favorite" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn_checked.svg' : '/img/plus_button.svg'} alt="plus" />
      </div>
    </div>
  )
}
export default Card;

