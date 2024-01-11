import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../Context/search";

function FlowerPricingCard() {
  const [flowerPriCard, setFlowerPriCard] = useState([]);
  const { search } = useContext(SearchContext);

  function deleteFlower(id) {
    fetch("http://localhost:3100/" + id, { method: "DELETE" }).then(() =>
      getFetch()
    );
  }

  function getFetch() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setFlowerPriCard(data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="flowerPricingCards">
      {flowerPriCard
        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <div className="flowerPricingCard">
            <img src={x.image} alt="" />
            <p className="flowerPricingCard_name">{x.name}</p>
            <p className="flowerPricingCard_price">${x.price}</p>
            <button onClick={() => deleteFlower(x._id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default FlowerPricingCard;
