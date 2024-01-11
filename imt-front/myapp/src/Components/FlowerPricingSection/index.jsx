import React, { useContext } from "react";
import FlowerPricingCard from '../../Components/FlowerPricingCard'
import "./index.scss";
import SearchContext from "../../Context/search";

function FlowerPricingSection() {
  const {heandleSearch} = useContext(SearchContext)
  return (
    <div className="flowerPricingSection_container">
      <div className="flowerPricingSection">
        <p>Devoted to wonderful beauty</p>
        <h3>Flowers Pricing</h3>
        <div className="search_filter">
          <input type="text" onChange={(e)=>heandleSearch(e)}/>
        </div>
      </div>
      <FlowerPricingCard/>
    </div>
  );
}

export default FlowerPricingSection;
