//### Requires ######################################
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
//###################################################




/*------------------------------------------------------------------
yargs nos permite ingresar comandos directamente en la raiz de la 
aplicacion a travez de la funcion .options({})
--------------------------------------------------------------------*/
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

const getInfo = async(direccion) => {

    try {
        let ciudad = await lugar.getLugarLatLon(direccion);
        let climaCiudad = await clima.getClima(ciudad.lat, ciudad.lon);
        return `El clima de "${ciudad.direccion}" es de ${climaCiudad} °C`
    } catch {
        return `No se pudo determinar el clima de "${direccion}"`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)