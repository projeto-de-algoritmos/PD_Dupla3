import './App.css';
import knapSack from "./components/knapSack"
import food from "./data/food"
import characters from "./data/characters"
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <a className="header-title" href=".">
          Don't Starve
        </a>
      </header>
      <body>
        <div>
          <div className="action mrg-top-500">
            <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(knapSack.getRandomFoods(food.foods)) }}>
              Sortear itens
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;