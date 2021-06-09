import React from 'react';
import FlightsItem from './FlightsItem/FlightsItem';
import './FlightsList.css';
import { useSelector } from "react-redux";
import moment from 'moment';
import localization from 'moment/locale/ru'

const FlightsList = ({ }) => {
  const flights = useSelector((state) => state.flights.allFlights);
  const stops = useSelector((state) => state.settings.stops);
  const aircompanies = useSelector((state) => state.settings.aircompanies);
  const price = useSelector((state) => state.settings.price);

  const filterFlights = (currentFlights) => {
    return currentFlights.filter((flight) => {
     if (aircompanies[flight.flight.carrier.airlineCode]) {
        return flight
      }
    })
  }

  const filterStops = (currentFlights) => {
    return currentFlights.filter((flight) => {
     if(stops.oneStop && flight.flight.legs[0].segments.length > 1 && flight.flight.legs[1].segments.length > 1) {
       return flight
     } else if (stops.noStop && flight.flight.legs[0].segments.length === 1 && flight.flight.legs[1].segments.length === 1) {
       return flight
     }
    })
  }
  const convertTime = (date) => {
    return moment(date).format('HH:mm')
  }
  const convertDate = (date) => {
    return moment(date).locale("ru", localization).format('D MMM dd')
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
        return <li key={index}  className="flights__item-wrapper">
          <FlightsItem
          price = {flight.flight.price.total.amount}
          aviacompany = {flight.flight.carrier.caption}
          aviaCompanyCode = {flight.flight.carrier.airlineCode}
          departureAirport1 = {flight.flight.legs[0].segments[0].departureAirport.caption}
          arrivalAirport1 = {flight.flight.legs[0].segments.length === 1
            ? flight.flight.legs[0].segments[0].arrivalAirport.caption
          : flight.flight.legs[0].segments[1].arrivalAirport.caption}
          departureAirport2 = {flight.flight.legs[1].segments[0].departureAirport.caption}
          arrivalAirport2 = {flight.flight.legs[1].segments.length === 1
            ? flight.flight.legs[1].segments[0].arrivalAirport.caption
          : flight.flight.legs[1].segments[1].arrivalAirport.caption}
          departureCity1 = {flight.flight.legs[0].segments[0].departureCity.caption}
          arrivalCity1 = {flight.flight.legs[0].segments.length === 1
            ? flight.flight.legs[0].segments[0].arrivalCity.caption
          : (flight.flight.legs[0].segments[1].arrivalCity ? flight.flight.legs[0].segments[1].arrivalCity.caption : flight.flight.legs[0].segments[1].arrivalAirport.caption)}
          departureCity2 = {flight.flight.legs[1].segments[0].departureCity ? flight.flight.legs[1].segments[0].departureCity.caption : flight.flight.legs[0].segments[0].departureCity.caption}
          arrivalCity2 = {flight.flight.legs[1].segments.length === 1
            ? flight.flight.legs[1].segments[0].arrivalCity.caption
            : flight.flight.legs[1].segments[1].arrivalCity.caption}
          departureCode1 = {flight.flight.legs[0].segments[0].departureAirport.uid}
          arrivalCode1 = {flight.flight.legs[0].segments.length === 1
            ? flight.flight.legs[0].segments[0].arrivalAirport.uid
            : flight.flight.legs[0].segments[1].arrivalAirport.uid}
          departureCode2 = {flight.flight.legs[1].segments[0].departureAirport.uid}
          arrivalCode2 = {flight.flight.legs[1].segments.length === 1
            ? flight.flight.legs[1].segments[0].arrivalAirport.uid
            : flight.flight.legs[1].segments[1].arrivalAirport.uid}
          timeTotal = {flight.flight.legs[0].duration}
          timeTotal2 = {flight.flight.legs[1].duration}
          departureTime1 = {convertTime(new Date(flight.flight.legs[0].segments[0].departureDate))}
          arrivalTime1 = {flight.flight.legs[0].segments.length === 1
            ? convertTime(new Date(flight.flight.legs[0].segments[0].arrivalDate))
            : convertTime(new Date(flight.flight.legs[0].segments[1].arrivalDate))}
          departureTime2 = {convertTime(new Date(flight.flight.legs[1].segments[0].departureDate))} 
          arrivalTime2 = {flight.flight.legs[1].segments.length === 1
            ? convertTime(new Date(flight.flight.legs[1].segments[0].arrivalDate))
            : convertTime(new Date(flight.flight.legs[1].segments[1].arrivalDate))}
          departureDate1 = {convertDate(new Date(flight.flight.legs[0].segments[0].departureDate))}
          arrivalDate1 = {flight.flight.legs[0].segments.length === 1
            ? convertDate(new Date(flight.flight.legs[0].segments[0].arrivalDate))
          : convertDate(new Date(flight.flight.legs[0].segments[1].arrivalDate))}
          departureDate2 = {convertDate(new Date(flight.flight.legs[1].segments[0].departureDate))}
          arrivalDate2 = {flight.flight.legs[1].segments.length === 1
            ? convertDate(new Date(flight.flight.legs[1].segments[0].arrivalDate))
            : convertDate(new Date(flight.flight.legs[1].segments[1].arrivalDate))} 
          stops1 = {flight.flight.legs[0].segments.length > 1 ? "1 пересадка" : "Без пересадок"}
          stops2 = {flight.flight.legs[1].segments.length > 1 ? "1 пересадка" : "Без пересадок"}
          />
        </li>
      })
      : null
      }
    </ul>
  );
}

export default React.memo(FlightsList);