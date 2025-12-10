const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;


app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

mongoose
  .connect("mongodb://localhost:27017/bookDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error", err));

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);
``
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
