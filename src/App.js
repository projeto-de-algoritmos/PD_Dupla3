import './App.css';
import knapSack from "./components/knapSack"
import food from "./data/food"
import character from "./data/characters"
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [bestDistribution, setBestDistribution] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <a className="header-title" href=".">
          Don't Starve
        </a>
      </header>
      <body>
        <div>
          {foods.length === 0 && characters.length === 0 ?
            <div className="action mrg-top-500">
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(knapSack.getRandomFoods(food.foods)) }}>
                Sortear itens
              </button>
            </div>
            : null}
        </div>
        {foods.length > 0 && characters.length === 0 ?
          <div>
            <div className="items">
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
            </div>
            <div className="action mrg-top-100">
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(knapSack.getRandomFoods(food.foods)) }}>
                Sortear novamente
              </button>
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setCharacters(character.characters) }}>
                Escolher personagem
              </button>
            </div>
          </div> : null}

        {characters.length > 0 ?
          <div>
            <div className="items">
              {characters?.map((character) => {
                return (
                  <div className="action">
                    <Card style={{ width: '15rem' }}>
                      <Card.Img style={{ width: '40px' }} variant="top" src={character.link} />
                      <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Mochila: {character.bag}</ListGroupItem>
                      </ListGroup>
                      <button className="card-button" type="button" onClick={() => { setBestDistribution(knapSack.knapSack(foods, character.bag)) }}>
                        Selecionar
                      </button>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div> : null}
      </body>
    </div>
  );
}

export default App;