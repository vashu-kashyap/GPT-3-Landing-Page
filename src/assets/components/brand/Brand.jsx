import React from 'react';
import './brand.css'
import google from '../../../assets/images/google.png'
import slack from '../../../assets/images/slack.png'
import shopify from '../../../assets/images/shopify.png'
import dropbox from '../../../assets/images/dropbox.png'
import atlassian from '../../../assets/images/atlassian.png'


export default function Brand() {
  return (
    <div className='section_brand section__padding '>
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={shopify} alt="" />
      <img src={dropbox} alt="" />
      <img src={atlassian} alt="" />
    </div>
  )
}
