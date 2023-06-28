import React from 'react'
import './feature.css'

const Feature = (props) => {
  const {title, text} = props;

  return (
    <div className='gpt3_features-container-feature'>
      <div className='gpt3_features-container-feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3_features-container-feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature