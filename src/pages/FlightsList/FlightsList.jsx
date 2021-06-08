import React, {useEffect} from 'react';
import FlightsItem from './FlightsItem/FlightsItem';
import './FlightsList.css';
import { useSelector } from "react-redux";

const FlightsList = ({ }) => {
  const flights = useSelector((state) => state.flights.allFlights);
  const stops = useSelector((state) => state.settings.stops);
  const aircompanies = useSelector((state) => state.settings.aircompanies);
  const price = useSelector((state) => state.settings.price);
  console.log(flights[0])

  const filterFlights = (currentFlights) => {
    return currentFlights.filter((flight) => {
     if (aircompanies[flight.flight.carrier.airlineCode]) {
        return flight
      }
    })
  }

  const filterStops = (currentFlights) => {
    return currentFlights.filter((flight) => {
     if(stops.oneStop && flight.flight.legs[0].segments.length > 1) {
       return flight
     } else if (stops.noStop && flight.flight.legs[0].segments.length === 1) {
       return flight
     }
    })
  }
  const filterPrice = (currentFlights) => {
    return currentFlights.filter((flight) => {
     if(Number(price.from) <= Number(flight.flight.price.total.amount) && Number(price.to) > Number(flight.flight.price.total.amount)) {
      return flight
     } 
    })
  }

  return (
    <ul className="flights__list">
      {flights
      ? filterPrice(filterFlights(filterStops(flights))).map((flight, index) => {
        return <li key={index}>
          <FlightsItem
          price = {flight.flight.price.total.amount}
          aviacompany = {flight.flight.carrier.caption}
          aviaCompanyCode = {flight.flight.carrier.airlineCode}
          departureAirport1 = {flight.flight.legs[0].segments[0].departureCity.caption}
          arrivalAirport1 = {"Лондон, Хитроу"}
          departureAirport2 = {"Шереметьево"}
          arrivalAirport2 = {"Лондон, Хитроу"}
          departureCity1 = {flight.flight.legs[0].segments[0].departureCity.caption}
          arrivalCity1 = {flight.flight.legs[0].segments[0].arrivalCity.caption}
          departureCity2 = {flight.flight.legs[1].segments[0].departureCity ? flight.flight.legs[1].segments[0].departureCity.caption : flight.flight.legs[0].segments[0].departureCity.caption}
          arrivalCity2 = {flight.flight.legs[1].segments[0].arrivalCity.caption}
          departureCode1 = {"(SVO)"}
          arrivalCode1 = {"(SVO)"}
          departureCode2 = {"(LHR)"}
          arrivalCode2 = {"(LHR)"}
          timeTotal = {flight.flight.legs[0].duration}
          timeTotal2 = {flight.flight.legs[1].duration}
          departureTime1 = {"18.10"}
          arrivalTime1 = {"9.10"}
          departureTime2 = {"18.10"} 
          arrivalTime2 = {"9.10"}
          departureDate1 = {"18 авг. вт"}
          arrivalDate1 = {"19 авг. ср"}
          departureDate2 = {"20 авг. чт"}
          arrivalDate2 = {"20 авг. чт"} 
          stops1 = {"1 пересадка"}
          stops2 = {"1 пересадка"} 
          />
        </li>
      })
      : null
      }
    </ul>
  );
}

export default React.memo(FlightsList);