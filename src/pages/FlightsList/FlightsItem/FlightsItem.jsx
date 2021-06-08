import React from 'react';
import logo from "../../../assets/01-afl-logo-pts-russ.png";
import './FlightsItem.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const FlightsItem = ({ }) => {
  const price = 21049;
  const aviacompany = "Аэрофлот - Российские авиалинии";
  const airport1 = "Шереметьево"
  const airport2 = "Лондон, Хитроу"
  const city1 = "Москва, "
  const city2 = "Лондон,"
  const code1 = "(SVO)"
  const code2 = "(LHR)"
  const timeTotal = "14 ч 45 мин"
  const timeTotal2 = "14 ч 45 мин"
  const departureTime1 = "18.10"
  const arrivalTime1 = "9.10"
  const departureTime2 = "18.10" 
  const arrivalTime2 = "9.10"
  const departureDate1 = "18 авг. вт";
  const arrivalDate1 = "19 авг. ср";
  const departureDate2 = "20 авг. чт";
  const arrivalDate2 = "20 авг. чт"; 
  const stops1 = "1 пересадка"; 
  const stops2 = "1 пересадка"; 


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
          <p className="card__city">{city1}</p>
          <p className="card__airport uppercase">{airport1}</p>
          <p className="card__code">{code1}</p>
          <TrendingFlatIcon className="card__arrow" style={{height: "16px", fontSize: "medium"}}/>
          <p className="card__city uppercase">{city2}</p>
          <p className="card__airport">{airport2}</p>
          <p className="card__code">{code2}</p>
        </div>
        <div className="card__timing">
          <div className="card__departure">
            <p className="card__time">{departureTime1}</p>
            <p className="card__date">{departureDate1}</p> 
          </div>
          <div className="card__total">
            <AccessTimeIcon className="card__icon" style={{height: "1.2rem", color: "rgb(23, 28, 24)"}}/>
            <p>{timeTotal}</p>
          </div>
          <div className="card__arival">
            <p className="card__date">{arrivalDate2}</p>
            <p className="card__time">{arrivalTime2}</p>
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
        <div className="card__city uppercase">{city2}</div>
          <p className="card__airport">{airport2}</p>
          <p className="card__code">{code2}</p>
          <TrendingFlatIcon className="card__arrow" style={{height: "16px", fontSize: "medium"}}/>
          <p className="card__city">{city1}</p>
          <p className="card__airport uppercase">{airport1}</p>
          <p className="card__code">{code1}</p>
        </div>
          <div className="card__timing">
            <div className="card__departure">
              <p className="card__time">{departureTime2}</p>
              <p className="card__date">{departureDate2}</p>
            </div>
            <div className="card__total">
              <AccessTimeIcon className="card__icon" style={{height: "1.2rem", color: "rgb(23, 28, 24)"}}/>
              <p>{timeTotal2}</p>
            </div>
            <div className="card__arival">
              <p className="card__date">{arrivalDate1}</p>
              <p className="card__time">{arrivalTime1}</p>
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