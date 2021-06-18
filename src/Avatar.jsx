import React from 'react';

const Avatar = (props) => {
  return (
    <img 
      src={props.imgUrl}
      alt='celebrity_img'
      className='circle-img'
    />
  )
}

export default Avatar;