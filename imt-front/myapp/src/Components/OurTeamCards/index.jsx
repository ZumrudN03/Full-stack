import React from "react";
import OurTeamCard from "../OurTeamCard";
import "./index.scss"

function OurTeamCards() {
  return (
    <div className="ourTeamCards">
      <OurTeamCard
        ourTeamCard_img="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
        ourTeamCard_name="Velva Kopf"
        ourTeamCard_job="Biologist"
      />
      <OurTeamCard
        ourTeamCard_img="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
        ourTeamCard_name="Sarah Palmer"
        ourTeamCard_job="Florist"
      />
      <OurTeamCard
        ourTeamCard_img="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
        ourTeamCard_name="Jessica Swift"
        ourTeamCard_job="Photographer"
      />
    </div>
  );
}

export default OurTeamCards;
