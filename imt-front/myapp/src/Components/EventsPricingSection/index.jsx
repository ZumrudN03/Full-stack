import React from "react";
import "./index.scss";
import EventsPricingCards from "../EventsPricingCards";

function EventsPricingSection() {
  return (
    <div className="eventsPricingSection_container">
      <div className="eventsPricingSection">
        <p>Devoted to wonderful beauty</p>
        <h3>Events Pricing</h3>
      </div>
      <EventsPricingCards/>
    </div>
  );
}

export default EventsPricingSection;
