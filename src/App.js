import './App.css';
import knapSack from "./components/knapSack"
import food from "./data/food"
import characters from "./data/characters"
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css';

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
          {foods.length === 0 ?
            <div className="action mrg-top-500">
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(knapSack.getRandomFoods(food.foods)) }}>
                Sortear itens
              </button>
            </div>
            : null}
        </div>
        {foods.length > 0 ? <div className="items">
          {foods?.map((food) => {
            return (
              <div className="action">
                <Card style={{ width: '10rem' }}>
                  <Card.Img style={{ width: '40px' }} variant="top" src={food.link} />
                  <Card.Body>
                    <Card.Title>{food.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Vida: {food.life}</ListGroupItem>
                    <ListGroupItem>Peso: {food.weight}</ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
            );
          })}
        </div> : null}
      </body>
    </div>
  );
}

export default App;