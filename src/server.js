const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/exres", routes);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening for request on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));
