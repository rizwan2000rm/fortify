// dotenv
require("dotenv").config();

const express = require("express"),
  app = express(),
  PORT = process.env.PORT,
  cors = require("cors"),
  passwordRoutes = require("./routes/PasswordRouter");

// Body-Parser (now built-in with express)
app.use(express.urlencoded({ extended: true }));

// CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());

// Routes
app.use("/", passwordRoutes);

app.get("/", (req, res) => {
  res.send("Yayyy");
});

app.listen(PORT, () => {
  console.log("Fortify Server is running on " + PORT);
});
