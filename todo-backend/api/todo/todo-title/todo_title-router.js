const router = require("express").Router();
const title = require("./todo_title-model");

//get every single todo title created!!
router.get("/", (req, res) => {
  title
    .find()
    .then((title) => {
      res.status(200).json(title);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

//create a todo list that is tied to the user_id

router.post("/:id", (req, res) => {
  const newTodoTitle = {
    user_id: req.params.id,
    todo_title: req.body.todo_title,
  };
  title
    .addTitle(newTodoTitle)
    .then((title) => {
      res.status(201).json(title);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "Problem creating a todolist title" });
    });
});

module.exports = router;
