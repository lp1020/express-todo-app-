const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
  return db.query('SELECT * FROM todos');
}

Todo.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM todos
    WHERE id = $1
    `, [id]);
}

Todo.create = (todo) => {
  return db.one(`
    INSERT INTO todos
    (title, category, description, status)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [todo.title, todo.category, todo.description, todo.status]);
}

Todo.update = (todo, id) => {
  return db.one(`
    UPDATE todos SET
    title = $1,
    category = $2,
    description = $3,
    status = $4
    WHERE id = $5
    RETURNING *
    `, [todo.title, todo.category, todo.description, todo.status, id]);
}

Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM todos
    WHERE id = $1
    `, [id]);
}

module.exports = Todo;
