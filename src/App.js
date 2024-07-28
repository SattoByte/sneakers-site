import React from 'react';
import Card from './components/card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useState } from 'react';


function App() {
  const arr = [1, 2, 3, 4];

  const [cardOpened, setCardOpened] = React.useState(false);


  return (
    <div className="wrapper clear">


      {cardOpened && <Drawer onClose={() => setCardOpened(false)} />}
      <Header onCLickCard={() => setCardOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
          <h1 className="text-uppercase">All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search_icon.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">

          {arr.map((obj) => (

            <Card
              title={obj.title}
              price={obj.title}
              image={obj.imageUrl}
              onFavorite={() => console.log('added to favs')}
              onPlus={() => console.log('Plus clicked')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

