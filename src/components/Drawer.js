import React from 'react'
import Card from './card/Card'

const Drawer = (props) => {

  return (

    <div
      className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="justify-between d-flex mb-30">Cart<img onClick={props.onClose} className="removeBtn" src="/img/btn_remove.svg" alt="Remove" /></h2>

        <div className="items" >
          <Card />
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