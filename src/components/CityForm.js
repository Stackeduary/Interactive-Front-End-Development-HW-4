import {useState} from 'react'
import PropTypes from 'prop-types'

const CityForm = ({onClick}) => {
    const [city, setCity] = useState('')

    const isButtonEnabled = city == '' || city.length > 19

    const changeCity = (event) => {
        setCity(event.target.value)
    }

    const clickEvent = () => onClick(city)

    return (
        <div className='widget'>
            <input type='text' value={city} onChange={changeCity}/>
            <button className='btn-city' disabled={isButtonEnabled} onClick={clickEvent}>Show Weather</button>
            {city.length > 19 && <strong>City name is too long!</strong>}
        </div>
    )
}

CityForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CityForm