const Todo = require('../models/todo');

const todosController = {};

todosController.index = (req, res) => {
  Todo.findAll()
  .then(todos => {
    res.render('todos/todo-index', {
      message: 'ok',
      data: todos,
      logoName: "The BEST To-Do App",
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.show = (req, res) => {
  Todo.findById(req.params.id)
  .then(todos => {
    res.render('todos/todo-single', {
      message: 'ok',
      data: todos,
      logoName: "The BEST To-Do App",
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.create = (req, res) => {
  Todo.create({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    status: req.body.status,
  }).then(todo => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.edit = (req, res) => {
  Todo.findById(req.params.id)
    .then((todos) => {
      res.render('todos/todo-edit', {
        data: todos,
        logoName: "The BEST To-Do App",
      });
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

todosController.update = (req, res) => {
  Todo.update({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    status: req.body.status,
  }, req.params.id).then(todo => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

todosController.delete = (req, res) => {
  Todo.destroy(req.params.id)
  .then(() => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = todosController;

