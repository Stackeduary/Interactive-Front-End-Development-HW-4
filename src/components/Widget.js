import {useState} from 'react'
import PropTypes from 'prop-types'
import {randomTemp, randomPrecip, randomWind, convertToFahrenheit} from '../util'
import useFahrenheit from '../useFahrenheit'

const Widget = (props) => {
    const [fahrenheit, toggleFahrenheit] = useFahrenheit()
    const [weather, setWeather] = useState({
        temp: randomTemp(),
        precip: randomPrecip(),
        wind: randomWind()
    })

    const weatherClick = () => {
        setWeather({
            temp: randomTemp(),
            precip: randomPrecip(),
            wind: randomWind()
        })
    }

    return (
        <div className="widget">
            <button onClick={props.deleteCity}>x Remove</button>
            <div className="widget__header">
                <h1>{props.city}</h1>
                <button onClick={weatherClick}>Generate</button>
            </div>
            <input type="checkbox" checked={fahrenheit} onChange={toggleFahrenheit} />
            <h6>Display °F</h6>
            <div className="widget__content">
                <div className="widget__row temperature">
                    <h2><strong>Temperature: </strong>{fahrenheit ? convertToFahrenheit(weather.temp) + '°F' : weather.temp + '°C'}</h2>
                </div>
                <div className="widget__row precipitation">
                    <h2><strong>Precipitation: </strong>{weather.precip}</h2>
                </div>
                <div className="widget__row wind">
                    <h2><strong>Wind: </strong>{weather.wind} km/h</h2>
                </div>
            </div>
        </div>
    )
}

Widget.propTypes = {
    city: PropTypes.string.isRequired,
    deleteCity: PropTypes.func.isRequired
}

export default Widget