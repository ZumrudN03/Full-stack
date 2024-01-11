import React from 'react'
import "./index.scss"

function EventsPricingCard({event_price,event_name}) {
  return (
    <div className='eventsPricingCard'>
        <p className='eventsPricingCard_price'><span>${event_price} </span>per table</p>
        <p className='eventsPricingCard_event'>{event_name} Events</p>
        <p className='eventsPricingCard_desc'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop Now</button>
    </div>
  )
}

export default EventsPricingCard