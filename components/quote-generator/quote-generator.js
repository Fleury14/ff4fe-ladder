import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {

  const [randomIndex, setRandomIndex] = useState(0);

  const quotes = [
    'Always sealed',
    'Fade Antlion',
    'Was it leg?',
    'Good luck......',
    'Now on Wyvern Standard Time',
    "Who's butt?",
  ]
  
  
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * quotes.length))
  });
  
  return <p>"{quotes[randomIndex]}"</p>
}

export default QuoteGenerator;
