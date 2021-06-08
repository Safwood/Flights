import './FlightsPage.css';
import FlightsList from './FlightsList/FlightsList';
import FligthsSettings from './FligthsSettings/FligthsSettings';
import React, { useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import flights from '../flights.json';

const FlightsPage = ({ }) => {
  const dispatch = useDispatch();
  const setFlights = useCallback((flights) => dispatch({type: 'flights/SET_FLIGHTS', payload: flights}), [dispatch]); 

  useState(() => {
    setFlights(flights.result.flights)
  }, [])

  return (
    <div className="flights">
      <FligthsSettings/> 
      <FlightsList/> 
    </div>
  );
}

export default React.memo(FlightsPage);