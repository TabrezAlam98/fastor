const express = require("express");
require('dotenv').config()
const { connection } = require("./config/db");
const Port=3000
const {usersRoutes}=require('./Routes/users.routes')
const app = express();
app.use(express.json());


app.use("/users",usersRoutes)


app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("connected");
  } catch {
    console.log(err);
    console.log("connected mongodb");
  }
  console.log(`listening on port ${Port}`);
});