import React, {useEffect, useCallback} from 'react';
import './FligthsSettings.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const FligthsSettings = () => {
  const flights = useSelector((state) => state.flights.allFlights);
  const currentStops = useSelector((state) => state.settings.stops);
  const aircompanies = useSelector((state) => state.settings.aircompanies);
  const dispatch = useDispatch();
  const setFlights = useCallback((flights) => dispatch({type: 'flights/SET_FLIGHTS', payload: flights}), [dispatch]); 
  const setStop = useCallback((stops) => dispatch({type: 'settings/SET_STOP__SETTINGS', payload: stops}), [dispatch]); 
  const setCompany = useCallback((company) => dispatch({type: 'settings/SET_COMPANY__SETTINGS', payload: company}), [dispatch]); 
  const setPrice = useCallback((price) => dispatch({type: 'settings/SET_PRICE__SETTINGS', payload: price}), [dispatch]); 
  const [sorting, setSorting] = React.useState('по возрастанию цены');

  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  const handleStopChange = (event) => {
    setStop({[event.target.name]: event.target.checked});
    
  };
  const handlePriceChange = (event) => {
    setPrice({[event.target.name]: event.target.value});
  };
  const handleAircompanyChange = (event) => {
    setCompany({[event.target.name]: event.target.checked});
  };

  const sort = () => {
    const newList = JSON.parse(JSON.stringify(flights))
    if(sorting === 'по возрастанию цены') {
      newList.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
    } else if (sorting === 'по убыванию цены') {
      newList.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
    } else if (sorting === 'по времени в пути') {
      newList.sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration)
    }
    return newList
  }

  useEffect(() => {
    setFlights(sort())
  }, [sorting]);

  return (
    <div className="settings">
      <div className="settings__block">
        <h3 className="settings__title">Сортировать</h3>
        <div className="settings__content">
          <div className="settings__radio" >
            <div className="settings__radio-button">
              <input id="raise" type="radio" name="sorting" value="по возрастанию цены" onChange={handleChange}/>
              <label htmlFor="raise">- по возрастанию цены</label>
            </div>
            <div className="settings__radio-button">
              <input id="decrease" type="radio" name="sorting" value="по убыванию цены" onChange={handleChange}/>
              <label htmlFor="decrease">- по убыванию цены</label>
            </div>
            <div className="settings__radio-button">
              <input id="total-time" type="radio" name="sorting" value="по времени в пути" onChange={handleChange}/>
              <label htmlFor="total-time">- по времени в пути</label>
            </div>
          </div>
        </div>
      </div>
      <div className="settings__block">
        <h3 className="settings__title">Фильтровать</h3>
        <div className="settings__content">
            <div className="settings__checkbox">
              <input id="one-stop" type="checkbox" name="oneStop" value="oneStop" checked={currentStops.oneStop} onChange={handleStopChange}/>
              <label htmlFor="one-stop">- 1 пересадка</label>
            </div>
            <div className="settings__checkbox">
              <input id="no-stop" type="checkbox" name="noStop" value="noStop" checked={currentStops.noStop} onChange={handleStopChange}/>
              <label htmlFor="no-stop">- без пересадок</label>
            </div>
        </div>
      </div>
      <div className="settings__block">
        <h3 className="settings__title">Цена</h3>
        <div className="settings__content">
          <div className="settings__price">
            <p className="settings__text">От</p>
            <input className="settings__input" type="text" name="from" defaultValue="0" onChange={handlePriceChange}></input>
          </div>
          <div className="settings__price">
            <p className="settings__text">До</p>
            <input className="settings__input" type="text" name="to" defaultValue="100000" onChange={handlePriceChange}></input>
          </div>
        </div>
      </div>
      <div className="settings__block">
        <h3 className="settings__title">Авиакомпании</h3>
        <div className="settings__content">
            <div className="settings__checkbox">
              <input id="LO" type="checkbox" name="LO" value="LO"  checked={aircompanies.LO} onChange={handleAircompanyChange}/>
              <label htmlFor="LO">LOT Polish Airlines</label>
            </div>
            <div className="settings__checkbox">
              <input id="BT" type="checkbox" name="BT" value="BT" checked={aircompanies.BT} onChange={handleAircompanyChange}/>
              <label htmlFor="BT">Air Baltic Corporation A/S</label>
            </div>
            <div className="settings__checkbox">
              <input id="AF" type="checkbox" name="AF" value="AF" checked={aircompanies.AF} onChange={handleAircompanyChange}/>
              <label htmlFor="AF">Air France</label>
            </div>
            <div className="settings__checkbox">
              <input id="KL" type="checkbox" name="KL" value="KL" checked={aircompanies.KL} onChange={handleAircompanyChange}/>
              <label htmlFor="KL">KLM</label>
            </div>
            <div className="settings__checkbox">
              <input id="SN" type="checkbox" name="SN" value="SN" checked={aircompanies.SN} onChange={handleAircompanyChange}/>
              <label htmlFor="SN">Brussels Airlines</label>
            </div>
            <div className="settings__checkbox">
              <input id="TK" type="checkbox" name="TK" value="TK" checked={aircompanies.TK} onChange={handleAircompanyChange}/>
              <label htmlFor="TK">TURK HAVA YOLLARI A.O.</label>
            </div>
            <div className="settings__checkbox">
              <input id="SU" type="checkbox" name="SU" value="SU" checked={aircompanies.SU} onChange={handleAircompanyChange}/>
              <label htmlFor="SU">Аэрофлот - российские авиалинии</label>
            </div>
            <div className="settings__checkbox">
              <input id="AZ" type="checkbox" name="AZ" value="AZ" checked={aircompanies.AZ} onChange={handleAircompanyChange}/>
              <label htmlFor="AZ">Alitalia Societa Aerea Italiana</label>
            </div>
            <div className="settings__checkbox">
              <input id="AY" type="checkbox" name="AY" value="AY" checked={aircompanies.AY} onChange={handleAircompanyChange}/>
              <label htmlFor="AY">Finnair Oyj</label>
            </div>
            <div className="settings__checkbox">
              <input id="PC" type="checkbox" name="PC" value="PC" checked={aircompanies.PC} onChange={handleAircompanyChange}/>
              <label htmlFor="PC">Pegasus Hava Tasimaciligi A.S.</label>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FligthsSettings;