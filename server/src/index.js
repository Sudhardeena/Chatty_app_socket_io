import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Chatty app");
});

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
  console.log("server listening at port 5001");
});
