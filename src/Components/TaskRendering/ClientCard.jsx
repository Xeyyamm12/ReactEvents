import React from 'react'

const ClientCard = (props) => {
    const { name, phone, card } = props;
    return <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Имя клиента: {name?name:'Loading...'}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone?phone:'Loading...'}</h6>
          <p className="card-text">Номер карты: {card?card:'Loading...'}</p>
        </div>
      </div>
      </>
}

export default ClientCard