import React from 'react';
import './App.css';
import Rating from './components/Rating';


function App() {
  // This can be from config 5/10 or something else
  const starCount = 5
  // This can be from persistant store / backend DB
  const initialRating = 2

  return (
    <div className="App">
      <Rating ratingPoints={starCount} initialRating={initialRating} />      
    </div>
  );
}

export default App;
