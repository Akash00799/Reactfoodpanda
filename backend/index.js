const express = require("express");
const server = express();
const mongoDB = require("./Db");
mongoDB();

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.get("/", function (req, res) {
  res.send("hello");
});

server.use(express.json());
server.use("/api", require("./Routes/CreatUser"));
server.use("/api", require("./Routes/DisplayData"));
server.use("/api", require("./Routes/OrderData"));

server.listen(5000, () => {
  console.log("server started");
});
