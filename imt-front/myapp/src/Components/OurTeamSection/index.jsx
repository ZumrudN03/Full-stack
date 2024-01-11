import React from "react";
import "./index.scss"
import OurTeamCards from "../OurTeamCards";

function OurTeamSection() {
  return (
    <div className="ourTeamSection_container">
      <div className="ourTeamSection">
        <p>Contacts</p>
        <h3>Our Team</h3>
      </div>
      <OurTeamCards/>
    </div>
  );
}

export default OurTeamSection;
