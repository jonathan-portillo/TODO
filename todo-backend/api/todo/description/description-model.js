const db = require("../../../data/db-config");

module.exports = {
  find,
  //   findDescriptionByList,
  findDescriptionById,
  addDescription,
  updateDescription,
  deleteDescription,
};

//find all description to lists
function find() {
  return db("description");
}

//find description by Id
function findDescriptionById(id) {
  return db("description").where({ id }).first();
}

//add a new description
async function addDescription(newDescription) {
  const [id] = await db("description").insert(newDescription, "id");
  return findDescriptionById(id);
}

//update description
function updateDescription(changes, id) {
  return db("description").where([id]).update(changes);
}

//delete description
function deleteDescription(id) {
  return db("description").del().where({ id });
}
