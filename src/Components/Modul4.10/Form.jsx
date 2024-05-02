import React,{Component,useEffect,useState} from "react";

const CardForm = ({ handleOpenCard }) => {
  const [number, setNumber] = useState("");
  const [balance, setBalance] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    
    const card = { number, balance: +balance };
    handleOpenCard(card);
    
    setNumber("");
    setBalance("");
  };

  return (
    <form onSubmit={onSubmit} className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          Карта
          <input
            placeholder="XXXX XXXX XXXX XXXX"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </h5>
        <div className="card-text">
          <ul className="list-group">
            <input
              className="list-group-item"
              placeholder="Баланс"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <hr />
            <button type="submit" className="btn btn-success">
              Открыть карту
            </button>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default CardForm;
