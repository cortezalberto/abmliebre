const express = require('express')

const methodOverride = require('method-override')
const app = express() 
const port = process.env.PORT
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');


app.use(express.static('public'));
// configuro EJS
app.set('view engine', 'ejs')

//app.use(methodOverride('_method'))


// llamo al ruteo

app.use('/', homeRouter);

app.use('/', userRouter);
app.use('/products', productRouter);

// Formularios

app.use(express.urlencoded({extended: false}));
app.use(express.json())


app.listen(port || 3031, () => {
    console.log('Example app listening on port arranco el 3031 ');
});




