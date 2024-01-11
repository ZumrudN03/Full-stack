import React from 'react'
import Header from '../../Components/Header'
import OurMissionSection from '../../Components/OurMissionSection'
import FlowerPricingSection from '../../Components/FlowerPricingSection'
import EventsPricingSection from '../../Components/EventsPricingSection'
import OurTeamSection from '../../Components/OurTeamSection'


function Home() {
  return (
    <div>
      <Header/>
      <OurMissionSection/>
      <FlowerPricingSection/>
      <EventsPricingSection/>
      <OurTeamSection/>
    </div>
  )
}

export default Home