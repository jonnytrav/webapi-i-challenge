// implement your API here
// const http = require("http");
// const port = 4000;
// const hostname = "192.168.1.72";
const express = require("express");
const server = express();
const userRoutes = require("./userRoutes");
server.use("/api/users", userRoutes);

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello from node!");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server listening at http://${hostname}:${port}`);
// });

server.listen(5000, () => {
  console.log("Server running on localHost:5000");
});
