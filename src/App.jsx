import React, { useState , Component , useEffect } from "react";
import "./App.css";
import Form from "./Components/Modul4.10/Form";

const App = () => {
  const [cards, setCards] = useState([
    { number: "7653 7553 5693 9862", balance: 100 },
    { number: "7453 9736 0763 3474", balance: 400 },
    { number: "9577 7543 9379 9784", balance: 800 }
  ]);

  const handleCloseCard = (idx) => {
    setCards((prevCards) => prevCards.filter((card, index) => index !== idx));
  };

  const handleOpenCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <div className="app">
      <Form handleOpenCard={handleOpenCard} />
      {cards.map(({ number, balance }, idx) => (
        <div key={number} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              Карта <br />
              {number}
            </h5>
            <div className="card-text">
              <ul className="list-group">
                <li className="list-group-item">Баланс: {balance}</li>
                <hr />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleCloseCard(idx)}
                >
                  Закрыть карту
                </button>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
