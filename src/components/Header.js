import React from 'react';

const Header = (props) => {

  return (

    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="" />
        <div>
          <h3 className="text-uppercase">React Sneackers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onCLickCard} className="mr-10 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
        </li>
        <li>
          <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
        <span>200$</span>
      </ul>
    </header>

  )
}

export default Header;