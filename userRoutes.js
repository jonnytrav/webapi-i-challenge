const express = require("express");
const router = express.Router();
const db = require("./data/db.js");

router.get("/", (request, response) => {
  db.find()
    .then(res => {
      response.json({ success: true, res });
    })
    .catch(err =>
      response
        .status(500)
        .json({ error: "The users information could not be retrieved.", err })
    );
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  db.findById(id)
    .then(user => {
      if (!user) {
        response.status(404).json({
          success: false,
          message: "The user with the specified ID does not exist."
        });
      } else {
        response.status(200).json({ success: true, user });
      }
    })
    .catch(err =>
      response
        .status(500)
        .json({ error: "The users information could not be retrieved.", err })
    );
});

router.post("/", (request, response) => {
  const user = request.body;
  db.insert(user)
    .then(res => {
      console.log(res);
      response.status(201).json({ success: true, res });
    })
    .catch(err =>
      response.status(500).json({
        error: "There was an error while saving the user to the database",
        err
      })
    );
});

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const updateInfo = request.body;

  if (!updateInfo.name && !updateInfo.bio) {
    response
      .status(400)
      .json({ success: false, message: "Some new data is needed." });
  } else {
    db.update(id, updateInfo)
      .then(count => {
        if (count === 0) {
          response.status(404).json({
            success: false,
            message: "The user with the specified ID does not exist."
          });
        } else {
          db.findById(id).then(changedUser =>
            response.status(200).json({ success: true, changedUser })
          );
        }
      })
      .catch(err => console.error(err));
  }
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;
  db.remove(id)
    .then(user => {
      if (!user) {
        response.status(404).json({
          success: false,
          message: "The user with the specified ID does not exist."
        });
      } else {
        response.status(204);
      }
    })
    .catch(err => {
      response
        .status(500)
        .json({ success: false, error: "The user could not be removed.", err });
    });
});

module.exports = router;
