import React from 'react';
import logo from "../../../assets/01-afl-logo-pts-russ.png";
import './FlightsItem.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const FlightsItem = (props) => {
  const {price,
        aviacompany,
        departureAirport1,
        arrivalAirport1,
        departureAirport2,
        arrivalAirport2,
        departureCity1,
        arrivalCity1,
        departureCity2,
        arrivalCity2,
        departureCode1,
        arrivalCode1,
        departureCode2,
        arrivalCode2,
        timeTotal,
        timeTotal2,
        departureTime1,
        arrivalTime1,
        departureTime2, 
        arrivalTime2,
        departureDate1,
        arrivalDate1,
        departureDate2,
        arrivalDate2, 
        stops1,
        stops2 } = props;

  const countTime = (totalMinutes) => {
    let hours = Math.floor(totalMinutes/60);
    let minutes = totalMinutes - (hours*60);
    return `${hours} ч ${minutes} мин`
  }

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__column">
          <div className="card__logo">
            <img className="card__img" src={logo} alt="Посетить сайт MDN"/>
          </div>
        </div>
        <div className="card__column">
          <p className="card__price">{price} ₽</p>
          <p className="card__comment">Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="card__block card__block--top">
        <div className="card__route">
          <p className="card__city">{departureCity1}</p>
          <p className="card__airport">{departureAirport1}</p>
          <p className="card__code">({departureCode1})</p>
          <TrendingFlatIcon className="card__arrow" style={{height: "16px", fontSize: "medium"}}/>
          <p className="card__city">{arrivalCity1}</p>
          <p className="card__airport">{arrivalAirport1}</p>
          <p className="card__code">({arrivalCode1})</p>
        </div>
        <div className="card__timing">
          <div className="card__departure">
            <p className="card__time">{departureTime1}</p>
            <p className="card__date">{departureDate1}</p> 
          </div>
          <div className="card__total">
            <AccessTimeIcon className="card__icon" style={{height: "1.2rem", color: "rgb(23, 28, 24)"}}/>
            <p>{countTime(timeTotal)}</p>
          </div>
          <div className="card__arival">
            <p className="card__date">{arrivalDate1}</p>
            <p className="card__time">{arrivalTime1}</p>
          </div>
        </div>
        <div className="card__stops">
            <div className="card__line"></div>
            <p className="card__stop">{stops1}</p>
            <div className="card__line"></div>
          </div>
        <div className="card__company">Рейс выполняет: {aviacompany}</div>
      </div>
      <div className="card__block">
        <div className="card__route">
        <div className="card__city">{departureCity2}</div>
          <p className="card__airport">{departureAirport2}</p>
          <p className="card__code">({departureCode2})</p>
          <TrendingFlatIcon className="card__arrow" style={{height: "16px", fontSize: "medium"}}/>
          <p className="card__city">{arrivalCity2}</p>
          <p className="card__airport">{arrivalAirport2}</p>
          <p className="card__code">({arrivalCode2})</p>
        </div>
          <div className="card__timing">
            <div className="card__departure">
              <p className="card__time">{departureTime2}</p>
              <p className="card__date">{departureDate2}</p>
            </div>
            <div className="card__total">
              <AccessTimeIcon className="card__icon" style={{height: "1.2rem", color: "rgb(23, 28, 24)"}}/>
              <p>{countTime(timeTotal2)}</p>
            </div>
            <div className="card__arival">
              <p className="card__date">{arrivalDate2}</p>
              <p className="card__time">{arrivalTime2}</p>
            </div>
          </div>
          <div className="card__stops">
            <div className="card__line"></div>
            <p className="card__stop">{stops2}</p>
            <div className="card__line"></div>
          </div>
        <div className="card__company">Рейс выполняет: {aviacompany}</div>
      </div>
      <button className="card__button">Выбрать</button>
    </div>
  );
}

export default FlightsItem;