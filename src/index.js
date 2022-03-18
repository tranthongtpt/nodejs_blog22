const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars=require('express-handlebars');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');

const route = require('./routes');

app.use(express.static(path.join(__dirname,'public')));



//route init
route(app);

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource\\views'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})