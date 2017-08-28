const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})

app.get('/', (req, res) => {
  res.render('index', {
    message: "Welcome to my to-do app!",
    logoName: "The BEST To-Do App",
    todoLink: "Click here for TO-DOs"
  })
})

const todoRoutes = require('./routes/todo-routes');
app.use('/todos', todoRoutes);

app.get('*', (req,res) => {
  res.status(404).send('not found!')
})
