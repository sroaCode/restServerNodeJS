//# Rutas de mi restServer

const { Router } = require('express');

//# Aqui tengo la logica de mis rutas
const {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
} = require('../controllers/user.controller')

//! No rengo muy claro esta definicion, pero basicamente 'routes' es ahora mi '/api/user' o ruta
routers = Router();

//# 'routers' tiene definida la ruta, esta se definio en el archivo 'server.js' en la variable 'this.userPath'
//# Es decir '/api/user'. Su respuesta varia dependiendo del metodo http (get,put,post,delete,patch)
routers.get('/', userGet);

routers.put('/:id', userPut);

routers.post('/', userPost)

routers.delete('/', userDelete)

routers.patch('/', userPatch)

module.exports = routers
