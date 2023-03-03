const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  return res.send("Home. Type on the root url '/test' to see another API");
});
app.use("/test", (req, res, next) => {
  return res.send({ message: "Successfully Access to Server!" });
});

app.listen(process.env.PORT || 5000);
