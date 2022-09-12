const db = require("../../../data/db-config");

module.exports = {
  findAllTodoList,
  // findTodoLisById,
  // updateTodoList,
  // deleteTodoList
};
76;
function findAllTodoList() {
  return db("todo_list");
}
