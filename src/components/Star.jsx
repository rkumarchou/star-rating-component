import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Star = ({ isFilled, isHovered, handleClick, handleHover, id }) => {    
  const classNames = `star ${isFilled ? 'filled' : ''} ${isHovered ? 'hovered' : ''}`
  return (
    <FontAwesomeIcon
      className={classNames}
      onClick={handleClick(id)}
      onMouseEnter={handleHover(id)}
      onMouseLeave={handleHover()}
      icon={faStar}
    />
  );
}

export default Star;
