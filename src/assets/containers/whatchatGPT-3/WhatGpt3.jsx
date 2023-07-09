import React from 'react';
import './whatgpt3.css'
import Feature from '../../components/feature/Feature'


export default function WhatGpt3() {
  return (
    <div className='section__padding' id='wgpt'> 
       <div className="gpt3__feature-section ">
        <div className="wgpt3">
          <h3>What is GPT-3</h3>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className="gpt3_feature-heading">
          <h2 className=' gradient__text'>The possibilities are beyond your imagination</h2>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3_feature">
          <Feature feature_heading={'Chatbots'} feature_text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}/>
          <Feature feature_heading={'Knowledgebase'} feature_text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"}/>
          <Feature feature_heading={'Education'} feature_text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"}/>

        </div>
      </div>
    </div>
  )
}
