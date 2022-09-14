const router = require("express").Router();
const todoList = require("./todo_list_model");

//get an entire list of all todoLists on the site
router.get("/", (req, res) => {
  todoList
    .findAllTodoList()
    .then((todoList) => {
      res.status(200).json(todoList);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

//create a todo list that is tied to the todoTitle_id
router.post("/:id/todo_title", (req, res) => {
  const newTodoList = {
    todo_title_id: req.params.id,
    todo_list: req.body.todo_list,
  };
  todoList
    .addTodoList(newTodoList)
    .then((todoList) => {
      res.status(201).json(todoList);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message:
          "Problem creating a todo list, good luck getting through the day! ",
      });
    });
});

module.exports = router;
