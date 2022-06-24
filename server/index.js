const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from!" });
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
