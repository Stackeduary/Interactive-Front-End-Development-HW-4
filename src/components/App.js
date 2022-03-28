import React, {useState} from 'react'
import '../../public/index.css'
import Dashboard from './Dashboard'
import CityForm from './CityForm'
import Widget from './Widget'

export default function App() {
    const [cityList, setCityList] = useState([])
    const [displayForm, setDisplayForm] = useState(true)

    const handleClick = () => setDisplayForm(true)

    const addCity = (city) => {
        setCityList([...cityList, {key: Date.now(), city}])
        setDisplayForm(false)
    }

    const deleteCity = (key) => {
        const removedCity = cityList.filter((cityKey) => cityKey.key !== key)
        setCityList(removedCity)
    }

    return (
        <div className="widget">
            <Dashboard onClick={handleClick} />
            {displayForm && <CityForm onClick={addCity}/>}
            <div>
                {cityList.map((inputCity) => (
                    <Widget key={inputCity.key} city={inputCity.city} deleteCity={() => deleteCity(inputCity.key)}
                    />
                ))}
            </div>
        </div>
    )
}