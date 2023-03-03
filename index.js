const express = require("express");

const app = express();

app.use("/test", (req, res, next) => {
  return res.send({ message: "Successfully Access to Server!" });
});

app.listen(process.env.PORT || 5000);
