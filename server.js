const express = require("express");
const bodyParser = require("body-parser");
const v1 = require("./routes/v1");
const models = require("./models");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

models.sequelize
  .sync()
  .then(() => {
    console.log("Database sync successfull");
  })
  .catch(e => {
    console.log(e, "Something went wrong with database sync");
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/api/v1", v1);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
