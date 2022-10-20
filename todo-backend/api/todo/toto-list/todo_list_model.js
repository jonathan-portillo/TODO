const db = require("../../../data/db-config");

module.exports = {
  findAllTodoList,
  findTodoListById,
  // findTodoListByTitleId,
  addTodoList,
  updateTodoList,
  deleteTodo,
};

// find all the todoLists
function findAllTodoList() {
  return db("todo_list");
}

//find todolist by the id
function findTodoListById(id) {
  return db("todo_list").where({ id }).first();
}

async function addTodoList(newTodoList) {
  const [id] = await db("todo_list").insert(newTodoList, "id");
  return findTodoListById(id);
}

function updateTodoList(changes, id) {
  return db("todo_list").where({ id }).update(changes);
}

function deleteTodo(id) {
  return db("todo_list").del().where({ id });
}
