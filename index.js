const express = require("express");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const { connection } = require("./configs/db");

const app = express();

require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/User.Routes");
const blogRouter = require("./routes/Blog.Routes");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while connecting db");
    console.log(error);
  }
  console.log(`Server is running at port ${process.env.port}`);
});
