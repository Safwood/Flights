import React from 'react';
import './FlightsPage.css';
import FlightsList from './FlightsList/FlightsList';
import FligthsSettings from './FligthsSettings/FligthsSettings';

const FlightsPage = ({ }) => {
  return (
    <div className="flights">
      <FligthsSettings/> 
      <FlightsList/> 
    </div>
  );
}

export default FlightsPage;