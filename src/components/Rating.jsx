import React, { useState } from 'react';
import Star from './Star';

const initializeRatingItems = (count, initialRating) => [...Array(count).keys()].map(item => ({
  id: item + 1,
  filled: item + 1 <= initialRating,
  hovered: false   
}));

const Rating = ({ ratingPoints, initialRating }) => {
    const [rating, setRating] = useState(initializeRatingItems(ratingPoints, initialRating))
    const [currentRatingPoints, setCurrentRatingPoints] = useState(initialRating)

    const applyRating = (targetId = 0) => () => {
      let count = 0;
      const updatedRating = rating.map(item => {
        item.filled = item.id <= targetId
        if (item.filled) count++
        return item
      })
      setRating(updatedRating)
      setCurrentRatingPoints(count)
    }

    const hoverRating = (targetId = -1) => () => {
      const updatedRatingHoverState = rating.map(item => {
        item.hovered = item.id <= targetId
        return item
      })
      setRating(updatedRatingHoverState)
    }

    return (
      <div className="rating-container">
        <div className="label">
          Current Rating: {`${currentRatingPoints}/${rating.length}`}
        </div>
        <div className="rating">
          {
            // The ratings can be star or tomatoes or anything we want
            rating.map(({ id, filled, hovered }) => (
              <Star
                key={id}
                id={id}
                handleHover={hoverRating}
                handleClick={applyRating}
                isFilled={filled}
                isHovered={hovered}
              />
            ))
          }
        </div>
      </div>
    );
}

export default Rating;
