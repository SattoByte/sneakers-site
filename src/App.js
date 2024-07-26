import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {

  return (
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40" >
          <h1 className="text-uppercase">All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search_icon.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="justify-between flex-wrap d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

