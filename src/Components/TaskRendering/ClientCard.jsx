import React from "react";

const ClientCard = (props) => {
  const { name, phone, card } = props;
  let isAllFetched = name&&phone&&card
  let isCardNotFetched = name&&phone
z
  const style={ 
    width: "18rem",
    backgroundColor: isAllFetched?"gray":isCardNotFetched?"yellow":'white' ,
    }
  return (
    <> 
      <div className="card" style={style}>
        <div className="card-body">
        <h5 className="card-title">Name: {name ? name : "Anonymus"}</h5>
          {phone && (
            <h6 className="card-subtitle mb-2 text-muted">
              Phone: {phone ? phone : "Loading..."}
            </h6>
          )}
          <p className="card-text">Card No: {card ? card : "Card is not specified"}</p>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
