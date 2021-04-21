let visitados = require('../data/datosProductos')

const homeRouter = require('../routes/homeRouter')



let productController = {

    home: (req, res) => {
        console.log('entro al home del produt controller y redirijo')

        res.redirect('/')

    },


    show: (req, res) => {

        console.log('me hicieron clicki :' + req.params.id)


        //        let product = visitados.find((value)=>value.id===req.params.id)

       let product = visitados.find(function (value) {
            console.log('me encoraron:' + value.id)
            return value.id === req.params.id
        })



        console.log(product)
        if (product) {
            res.render('detailProduct', { product });
        } else {
            res.render('error404');
        }
    },


    create: (req, res) => {

        console.log('entre a crear')
        res.render('createProduct');
    },

    store: (req, res) => {
        console.log('entre al storess')
        console.log(req.body)
        let producto =
        {
            id: "11",
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: "images/img-cafetera-moulinex.jpg"

        }

        visitados.push(producto)
        // Guardar en Visitados con un push
        res.redirect('/')
    },


    edit: (req, res) => {
        console.log('ESTOY ENTRANDO AL METODO EDIT:')
        let product = visitados.find(function (value) {

            return value.id === req.params.id
        })

        console.log(product)
        if (product) {
            res.render('editProduct', { product });
        } else {
            res.render('error404');
        }
    },

    update: (req, res) => {
        console.log('Entré al Update')
        console.log(req.body)


        // Crep una estructura de daatos de similares campos que producto del Array Visitados
        // Para asignarle el valor o contenido de los camos que viajarn por el body
        let producto = {
            id: req.params.id,
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: req.body.image

        }
        console.log(producto)
        console.log('---------------------------------------')
        console.log('me seleccionaron en update :' + req.params.id)

        // En este momento en la variable litaral tengo todos los campos
        // actualizados, entonces recorro rodo el array orifinal
        // Localizo el id que quiero mofificar y procedo a:
        // REEMPLAZAR EL VALOR DE CADA PROPIEDAD-
        // NOTA EL ID DEL ARRAY NO SE MODIFICA



        visitados.forEach(function (i) {
            if (i.id === req.params.id) {
                i.name = producto.name
                i.price = producto.price
                i.descuento = producto.descuento
            }

        })

        console.log(visitados)


        // Me voy a la página principal mostrando todos los productos
        // y la modificación en el producto en cuestión
        res.redirect('/')
    },


    destroy: (req, res) => {
            console.log('entre destroy')
           console.log(req.params.id)

        // borrar en visitados
        // borrar por el ID buscando (req.params.id)
        let menorArray = visitados.filter(function (value) {
           
            return value.id !== req.params.id
        })
        console.log('-------ARRAY NUEVO MENOR')
        console.log(menorArray)
     
        

        visitados = [...menorArray]
        console.log('----------ARRAY VISITADOS')
        console.log(visitados)
        res.redirect('/')
    },


    cart: (req, res) => {
        res.render('products/cart');
    },

    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }

}


module.exports = productController
