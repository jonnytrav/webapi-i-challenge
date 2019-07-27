const express = require("express");
const router = express.Router();
const db = require("./data/db.js");

// router.get("/", (request, response) => {
//   response.send("Hello from express!");
// });

router.get("/", (req, res) => {
  db.find().then(res => console.log(res));
  res.send("Endpoint working!");
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  db.findById(id).then(res => {
    response.status(200).json(res);
  });
});

router.post("/", (request, response) => {
  response.status(201).json({ url: "/users", operation: "POST" });
});

router.put("/", (request, response) => {
  response.status(201).json({ url: "/users", operation: "PUT" });
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;
  db.remove(id)
    .then(res => response.status204)
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
