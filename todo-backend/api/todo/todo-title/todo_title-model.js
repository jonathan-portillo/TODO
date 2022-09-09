const db = require("../../../data/db-config");

module.exports = {
  find,
  // findBy,
  findTitleByUser,
  findTitleById,
  addTitle,
  // updateTitle,
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

//find todo titles by the user id
async function findTitleByUser(id) {
  try {
    const title = await db("todo_title as tt")
      .join("users as u", "u.id", "tt.user_id")
      .where({ "tt.user_id": id })
      .select("tt.id", "u.username", "tt.todo_title");
    return title;
  } catch (err) {
    throw err;
  }
}

//create a new Note Title
async function addTitle(newTitle) {
  const [id] = await db("todo_title").insert(newTitle, "id");
  return findTitleById(id);
}
