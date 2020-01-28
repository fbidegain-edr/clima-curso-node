//### Requires ######################################
const axios = require('axios');

//###################################################


const getLugarLatLon = async(dir) => {

    // encoderURI transforma palabras en formato de url seguro (reemplaza los espacios en blanco por caracteres especiales)
    const encoderUrl = encodeURI(dir);

    console.log(encoderUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: { 'x-rapidapi-key': '94cab316d7mshf015021824b65acp1209aejsn899f1f8f5e9a' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon,
        respuesta
    }

}




module.exports = {
    getLugarLatLon
}