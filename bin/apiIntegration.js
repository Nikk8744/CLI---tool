const axios = require("axios");
const dotenv = require('dotenv');
const {default: chalk} = require('chalk');
dotenv.config();


const weatherapi = async (city) => {

    console.log("The cityyyyyyy is", city)
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`;

    const response = await axios.get(url)
    const data = response.data
    console.log(chalk.green(`${data.location.name}'s Temperature:-`))
    console.log(chalk.red(`The Temperature is ${chalk.bgGreen(`${data.current.temp_c} C`)}`))
    console.log(chalk.cyan(`The Humidity is: ${data.current.humidity}`))
}

module.exports = weatherapi;