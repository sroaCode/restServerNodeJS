const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express()

        //* Leemos el puerto del archivo '.env'
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        // *Middlewares - Funciones que se ejecutan antes de levantar un servidor
        this.middlewares();

        // *Rutas de mi aplicacion
        this.routes();
    }

    //# Funciones
    middlewares() {
        // *CORS
        this.app.use(cors());

        //* Lectura y parseo del request
        this.app.use(express.json());

        // *Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        //# Enviamos como parametro 'this.userPath' = la ruta de mi restServer
        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    //! Esta funcion se llama desde el archivo 'app.js'
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        });
    }
}

module.exports = Server;