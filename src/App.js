import React, { useEffect, useState } from 'react';
import Card from './components/card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import data from './data.json'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [cardOpened, setCardOpened] = React.useState(false);
  const [cardItems, setCardItems] = useState([])
  const [favorites, setFavorites] = useState([])

  const onAddToCard = (obj) => {
    setCardItems((prev) => [...cardItems, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const onAddToFavorites = () => {

  }


  return (
    <div className="wrapper clear">
      {cardOpened && <Drawer items={cardItems} onClose={() => setCardOpened(false)} />}
      <Header onCLickCard={() => setCardOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >

          <h1>{searchValue ? `Searching: ${searchValue}` : 'All sneakers'}</h1>

          <div className="search-block d-flex">
            <img src="/img/search_icon.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn_remove.svg" alt="clear" />}
            <input value={searchValue} onChange={onChangeSearchInput} placeholder="Search..." />
          </div>
        </div>
        <div className="justify-between flex-wrap d-flex">

          {data
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, indx) => (
              <Card
                key={indx}
                title={item.title}
                price={item.price + '$'}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('added to favs')}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

