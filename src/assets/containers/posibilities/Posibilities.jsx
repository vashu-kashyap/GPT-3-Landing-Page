import React from "react";
import "./posibilities.css";
import possibility from "../../images/possibility.png";

export default function Posibilities() {
  return (
    <div className="section__padding gpt_posibilities_section" id="posibilities">
      <div className="posibilities_img">
        <img src={possibility} alt="" />
      </div>
      <div className="posibilities_content_section">
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
