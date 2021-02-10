const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

// Middleware - A function that fires on the in between for every route
app.use(express.json()); // Looks for a request body, and turns it into "req.body"
app.use(morgan("dev")); // Logs request to the console

//Routes
app.use("/inventory", require("./route/inventoryRouter"));

//Database
mongoose.connect(
  "mongodb://localhost:27017/inventorydb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the DB")
);
app.use((err, req, res, next) => {
  console.log(err);
  res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("App is listening on port 9000!");
});
