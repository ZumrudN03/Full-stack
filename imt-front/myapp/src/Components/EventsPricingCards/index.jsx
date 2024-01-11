import React from "react";
import EventsPricingCard from "../EventsPricingCard";
import "./index.scss"

function EventsPricingCards() {
  return (
    <div className="eventsPricingCards">
      <EventsPricingCard event_price="16" event_name="Birthday" />
      <EventsPricingCard event_price="31" event_name="Wedding" />
      <EventsPricingCard event_price="52" event_name="Party" />
    </div>
  );
}

export default EventsPricingCards;
