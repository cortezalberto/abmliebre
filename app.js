const express = require('express')
const methodOverride = require('method-override')

const app = express() 
const port = process.env.PORT




//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static('public'));
//Debemos indicar cual es el motor de plantillas que estamos usando EJS
app.set('view engine', 'ejs')


//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride('_method'));


//Para indicarle express el requerimiento de rutas
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

//Para usar las rutas 

app.use('/', homeRouter);
app.use('/', userRouter);
app.use('/products', productRouter);



//Levantando el servidor 
app.listen(port || 3032, () => {
    console.log('Example app listening on port arranco el 3032 ');
});




