const db = require("../../../data/db-config");

module.exports = {
  findAllTodoList,
  findTodoListById,
  addTodoList,
  // updateTodoList,
  // deleteTodoList
};

function findAllTodoList() {
  return db("todo_list");
}

function findTodoListById(id) {
  return db("todo_list").where({ id }).first();
}

async function addTodoList(newTodoList) {
  const [id] = await db("todo_list").insert(newTodoList, "id");
  return findTodoListById(id);
}
