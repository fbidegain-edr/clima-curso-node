//### Requires ######################################
const axios = require('axios');

//###################################################

const getClima = async(lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ecd553bfafe4df1d688476a949e1f01c&units=metric`)
    return respuesta.data.main.temp
}

module.exports = {
    getClima
}