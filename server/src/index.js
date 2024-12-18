import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Chatty app");
});

app.listen(5001, () => {
  console.log("server listening at port 5001");
});
