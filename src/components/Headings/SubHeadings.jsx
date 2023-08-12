import React from 'react';
import './headings.scss';

const SubHeadings = (props) => {
  return (
    <h3 data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    className='SubHeading'>{props.text}</h3 >
  )
}

export default SubHeadings