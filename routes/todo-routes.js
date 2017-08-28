const express = require('express');
const todoRoutes = express.Router();

const todosController = require('../controllers/todos-controller');

todoRoutes.get('/', todosController.index);

// todoRoutes.get('/', (req, res) => {
//   res.render('todos/todo-index', {
//     logoName: "The BEST To Do App"
//   });
// })

todoRoutes.post('/', todosController.create);

todoRoutes.get('/add', (req, res) => {
  res.render('todos/todo-add', {
  logoName: "The BEST To Do App"
});
});

todoRoutes.get('/edit/:id', todosController.edit);

todoRoutes.get('/:id', todosController.show);
todoRoutes.put('/:id', todosController.update);


todoRoutes.delete('/:id', todosController.delete);

module.exports = todoRoutes;


// todoRoutes.get('/', (req, res) => {
//   res.render('todos/todo-index', {
//     logoName: "The BEST To Do App"
//   });
// })
