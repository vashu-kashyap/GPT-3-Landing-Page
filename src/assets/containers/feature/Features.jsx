import React from 'react';
import './features.css'
import Feature from '../../components/feature/Feature';


export default function Features() {
  return (
    <div>
     <div className="gpt3__future_feature_section section__padding" id='features'>
        <div className="feature_heading gradient__text">
          <h2>The Future is Now and You Just Need To Realize It. Step into Future Today  & Make it Happen.</h2>
          <p>Request Early Access to Get Started</p>
        </div>

        <div className='gpt3_feature'>
          <Feature feature_heading={"Improving end distrusts instantly "}  feature_text={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."} />
          <Feature feature_heading={"Become the tended active"}  feature_text={"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."} />
          <Feature feature_heading={"Message or am nothing "}  feature_text={"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."} />
          <Feature feature_heading={"Really boy law county "}  feature_text={"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."} />
        </div>

     </div>
    </div>
  )
}
