const { response } = require('express')

//# Para tener mas orden definimos la logica de las rutas como funciones
const userGet = (req, res = response) => {

    const params = req.query;
    res.json({
        'msg': 'get mundo desde el controller',
        params
    });
}

const userPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Put desde el controller',
        id
    })
}

const userPost = (req, res = response) => {
    const host = req.hostname
    const { nombre, edad } = req.body
    const { Sexo } = req.query;
    console.log(Sexo);

    res.json({
        nombre,
        edad,
        host,
        Sexo
    })
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'Patch desde el controller'
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'Delete desde el controller'
    })
}

//# Esas funciones se exportan al archivo 'user.routes' para ser definidas como rutas
module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}