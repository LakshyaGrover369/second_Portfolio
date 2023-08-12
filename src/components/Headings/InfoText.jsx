import React from 'react';
import './headings.scss';

const InfoText = (props) => {
  return (
    <h4 data-aos="zoom-in-up" className='InfoText'>{props.text}</h4 >
  )
}

export default InfoText