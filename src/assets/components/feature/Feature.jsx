import React from 'react';
import './feature.css'

export default function Feature({feature_heading,feature_text}) {
  return (
    <div>
     <div className="gpt_feature">
      <h4>{feature_heading}</h4>
      <p>{feature_text}</p>
     </div>
    </div>
  )
}
