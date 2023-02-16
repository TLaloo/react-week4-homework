import "./styles.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="" alt="Clear" id="icon" className="float-left" />
            <div className="float-left">
              <strong id="temperature">-1</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
