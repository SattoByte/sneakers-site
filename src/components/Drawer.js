import React from 'react'

const Drawer = () => {

  return (

    <div
      style={{ display: 'none' }}
      className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="justify-between d-flex mb-30">Cart<img className="removeBtn" src="/img/btn_remove.svg" alt="Remove" /></h2>

        <div className="items" >
          <div className="cartItem mb-20 d-flex align-center">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
            </div>

            <div className="mr-20">
              <p className="mb-5">Men Nike Blazers</p>
              <b>99.99$</b>
            </div>
            <div>
              <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove" />
            </div>
          </div>
          <div className="cartItem mb-20 d-flex align-center">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
            </div>
            <div className="mr-20">
              <p className="mb-5">Men Nike Blazers</p>
              <b>99.99$</b>
            </div>
            <div>
              <img className="removeBtn" src="/img/btn_remove.svg" alt="Remove" />
            </div>
          </div>
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