const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo
//   .remove({})
//   .then((result) => {
//     console.log(result);
//   })

Todo.findByIdAndRemove('58c706f0352c5d5e4b8190ae')
  .then((todo) => {
    console.log(todo);
  });