

let visitados = require('../data/datosProductos')

let homeController = {


    leerTodos: function () {
        console.log('leo productos desde data')
        return visitados

    },

    leerXPrecio: (req,resp) => {

    }

}

module.exports = homeController

