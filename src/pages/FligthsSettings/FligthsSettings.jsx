import React from 'react';
import './FligthsSettings.css';

const FligthsSettings = () => {
  const [sorting, setSorting] = React.useState('по возрастанию цены');
  const [stops, setStops] = React.useState({
    oneStop: true,
    noStop: true
  });
  const [aircompanies, setAircompanies] = React.useState({
    LOT: true,
    Aeroflot: true
  });
  const [price, setPrice] = React.useState({
    from: "0",
    to: "1000"
  });

  const handleChange = (event) => {
    setSorting(event.target.value);
  };
  const handleStopChange = (event) => {
    setStops({...stops, [event.target.name]: event.target.checked});
  };
  const handlePriceChange = (event) => {
    setPrice({...price, [event.target.name]: event.target.value});
    console.log(price)
  };
  const handleAircompanyChange = (event) => {
    setAircompanies({...aircompanies, [event.target.name]: event.target.checked});

  };

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
              <input id="one-stop" type="checkbox" name="oneStop" value="oneStop" checked={stops.oneStop} onChange={handleStopChange}/>
              <label htmlFor="one-stop">- 1 пересадка</label>
            </div>
            <div className="settings__checkbox">
              <input id="no-stop" type="checkbox" name="noStop" value="noStop" checked={stops.noStop} onChange={handleStopChange}/>
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
            <input className="settings__input" type="text" name="to" defaultValue="1000" onChange={handlePriceChange}></input>
          </div>
        </div>
      </div>
      <div className="settings__block">
        <h3 className="settings__title">Авиакомпании</h3>
        <div className="settings__content">
            <div className="settings__checkbox">
              <input id="LOT Polish Airlines" type="checkbox" name="LOT" value="LOT"  checked={aircompanies.LOT} onChange={handleAircompanyChange}/>
              <label htmlFor="LOT Polish Airlines">LOT Polish Airlines</label>
            </div>
            <div className="settings__checkbox">
              <input id="Aerflot" type="checkbox" name="Aeroflot" value="Aerflot" checked={aircompanies.Aeroflot} onChange={handleAircompanyChange}/>
              <label htmlFor="Aerflot">Аэрофлот - российские авиалинии</label>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FligthsSettings;