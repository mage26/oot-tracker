import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import items from './data/items';
import locs from './data/locs.js';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images/items', false, /\.(png|jpe?g|svg)$/));

items.forEach((item) => item.value = 0);
window.items = items;
window.locs = locs;

function ItemImage(props) {
  const item = props.item;
  const imageKey = (typeof item.images == 'string' ? item.images : item.images[item.value]).split('/')[3];
  return (
    <img src={images[imageKey]} />
  )
}

class ItemsList extends React.Component {
  constructor() {
    super();
    this.state = { items };
  }

  render () {
    return (
      this.state.items.map((item, i ) => 
        <div key={item.id}>
          <p>{locs[item.id]}</p>
          <ItemImage item={item} />
        </div>
      )
    )
  }
  
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <ItemsList />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

