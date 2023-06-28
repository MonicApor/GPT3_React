import React from 'react'
import './brand.css'
import { shopify, atlassian, google,dropbox,slack } from './import'

const Brand = () => {
  return (
    <div className='gpt3_brand section__padding'>
        <div>
          <img src={google} alt='google'/>
        </div>
        <div>
          <img src={slack} alt='slack'/>
        </div>
        <div>
          <img src={atlassian} alt='atlassian'/>
        </div>
        <div>
          <img src={dropbox} alt='dropdown'/>
        </div>
        <div>
          <img src={shopify} alt='shopify'/>
        </div>
    </div>
  )
}

export default Brand