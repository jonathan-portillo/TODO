const db = require("../../../data/db-config");

module.exports = {
  find,
  // findBy,
  findTitleById,
  addTitle,
  // deleteTodoList,
};

//find all Note Titles
function find() {
  return db("todo_title");
}

//find Note titles by Id
function findTitleById(id) {
  return db("todo_title").where({ id }).first();
}

//create a new Note Title
async function addTitle(newTitle) {
  const [id] = await db("todo_title").insert(newTitle, "id");
  return findTitleById(id);
}
