import React from "react";
import "./index.scss";

function OurMissionSection() {
  return (
    <div className="ourMissionSection_container">
      <div className="ourMissionSection">
        <div className="ourMissionSection_textBox">
          <p className="ourMission_head">Our Mission</p>
          <p className="ourMission_about"> 
            Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
            dicunt an, ea civibus.
          </p>
          <button>Read More</button>
        </div>
        <div className="ourMissionSection_img">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OurMissionSection;
