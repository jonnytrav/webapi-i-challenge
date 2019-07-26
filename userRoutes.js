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

router.post("/users", (request, response) => {
  response.status(201).json({ url: "/users", operation: "POST" });
  // db.insert(request.body)
  //   .then(added => {
  //     response.status(201).json(added);
  //   })
  //   .catch(err => {
  //     response.status(500).json({ success: false, err });
  //   });
});

router.put("/users", (request, response) => {
  response.status(201).json({ url: "/users", operation: "PUT" });
});

router.delete("/users:id", (request, response) => {
  const id = request.params.id;
  console.log(request.params); // Should see single object with id key and value
  //   db.remove(id)
  //     .then(deleted => {
  //       response.sendStatus(204).json({ deleted });
  //     })
  //     .catch(err => response.send(`${err}`));
  response.status(200).json({ URL: `/users/${id}` });
});

module.exports = router;
