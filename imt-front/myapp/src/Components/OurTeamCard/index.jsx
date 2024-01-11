import React from 'react'
import "./index.scss"

function OurTeamCard({ourTeamCard_img,ourTeamCard_name,ourTeamCard_job}) {
  return (
    <div className='ourTeamCard'>
        <img src={ourTeamCard_img} alt="" />
        <p className='ourTeamCard_name'>{ourTeamCard_name}</p>
        <p className='ourTeamCard_job'>{ourTeamCard_job}</p>
    </div>
  )
}

export default OurTeamCard