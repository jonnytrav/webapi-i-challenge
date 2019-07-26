// implement your API here
// const http = require("http");
// const port = 4000;
// const hostname = "192.168.1.72";
const express = require("express");
const server = express();
const db = require("./data/db.js");
server.use(express.json());

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello from node!");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server listening at http://${hostname}:${port}`);
// });

server.get("/", (request, response) => {
  response.send("Hello from express!");
});

server.get("/users", (req, res) => {
  db.find().then(res => console.log(res));
  res.send("Endpoint working!");
});

server.post("/users", (request, response) => {
  response.status(201).json({ url: "/users", operation: "POST" });
  // db.insert(request.body)
  //   .then(added => {
  //     response.status(201).json(added);
  //   })
  //   .catch(err => {
  //     response.status(500).json({ success: false, err });
  //   });
});

server.put("/users", (request, response) => {
  response.status(201).json({ url: "/users", operation: "PUT" });
});

server.delete("/users", (request, response) => {
  //   const id = request.params.id;
  //   db.remove(id)
  //     .then(deleted => {
  //       response.sendStatus(204).json({ deleted });
  //     })
  //     .catch(err => response.send(`${err}`));
  response.sendStatus(204);
});

server.listen(5000, () => {
  console.log("Server running on localHost:5000");
});

// server.delete("hubs:id", (req, res) => {
//   const { id } = req.params;

//   db.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         response.status(201).json({ success: true, hub });
//       } else {
//         response.status(404).json({
//           success: false,
//           message: "Can't find hub you're looking for."
//         });
//       }
//     })
//     .catch(err => {
//       response.status(500).json({ success: false, err });
//     });
// });
