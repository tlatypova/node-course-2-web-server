const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
//const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58c5b922352c5d5e4b80b7b4';

// var id = '58c4c86b2df24941106205a21';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User
  .findById(id)
  .then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User: ', user);
  })
  .catch((e) => {
    console.log(e);
  });