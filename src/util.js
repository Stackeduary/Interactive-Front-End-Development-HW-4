export const randomNum = (min, max) => Math.ceil(Math.random() * (max - min) + min)

export const emojiList = ['☀️', '⛅', '☁️', '🌩️', '🌧️', '🌦️', '🌨️']

export const randomTemp = () => randomNum(-20, 30)
export const randomPrecip = () => emojiList[randomNum(0, 6)]
export const randomWind = () => randomNum(0, 10)

export const convertToFahrenheit = (tempC) => (1.8*tempC + 32).toFixed(1)