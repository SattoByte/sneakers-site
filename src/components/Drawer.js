import React from 'react'
// import Card from './card/Card'

const Drawer = ({ onClose, items = [] }) => {

  return (

    <div
      onClick={onClose}
      className="overlay">
      <div className="drawer">
        <h2 className="justify-between d-flex mb-30">Cart {' '}
          <img onClick={onClose} className="removeBtn" src="/img/btn_remove.svg" alt="Remove" />
        </h2>



        <div className="items" >
          {items.map((obj) => (
            <div className='cartItems d-flex align-center mb-20'>
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className='cartItemImg'> </div>

              <div>
                <img src={obj.imageUrl} alt="Sneaker" />
                <p className='mb-5'>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
            </div>
          ))}


          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex justify-between">
                <span>Total:</span>
                <div></div>
                <b>200$</b>
              </li>
              <li className="d-flex justify-between">
                <span>Tax 5%:</span>
                <div></div>
                <b>10$</b>
              </li>
            </ul>
            <button className="greenButton">Checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Drawer