import React from 'react';
import FlightsItem from './FlightsItem/FlightsItem';
import './FlightsList.css';
import flights from '../../flights.json';

const FlightsList = ({ }) => {
  console.log(flights.result)
  return (
    <ul className="flights__list">
      <FlightsItem/>
    </ul>
  );
}

export default FlightsList ;