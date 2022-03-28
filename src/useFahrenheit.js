import {useState} from 'react'

export default function useFahrenheit(initialValue = false) {
    const [state, setState] = useState(initialValue)
    const toggleFahrenheit = () => setState(!state)
    return [state, toggleFahrenheit]
}