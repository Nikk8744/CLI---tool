const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();


const weatherapi = async (city) => {

    console.log("The cityyyyyyy is", city)
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`

    const response = await axios.get(url)
    const data = response.data
    console.log(`${data.location.name}'s Temperature:-`)
    console.log(`The Temperature is ${data.current.temp_c} C`)
    console.log(`The Humidity is: ${data.current.humidity}`)
}

module.exports = weatherapi;