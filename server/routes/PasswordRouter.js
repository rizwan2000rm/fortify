const express = require("express"),
  router = express.Router(),
  passwordController = require("../controller/password");

// Retrieve all passwords
router.get("/passwords", passwordController.getAllPasswords);

// Add a new password
router.post("/passwords", passwordController.createNewPassword);

// Get a specific password
router.get("/passwords/:id", (req, res) => {
  res.send("Yayyy");
});

// Delete a specific password
router.delete("/passwords/:id", (req, res) => {
  res.send("Yayyy");
});

// Update a specific password
router.put("/passwords/:id", (req, res) => {
  res.send("Yayyy");
});

module.exports = router;
