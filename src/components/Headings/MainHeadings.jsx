import React from 'react'
import './headings.scss';

const MainHeadings = (props) => {
  return (
    <h1 data-aos="fade-down"
    className='TopHeading'>{props.text}</h1 >
  )
}

export default MainHeadings