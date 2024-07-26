
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>200$</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
          <h1 className="text-uppercase">All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search_icon.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart_unliked.svg" alt="unliked" />
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
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

        </div>

      </div>
    </div>
  );
}

export default App;

{/* <div className="cartItem mb-20 d-flex align-center">
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
</div> */}

