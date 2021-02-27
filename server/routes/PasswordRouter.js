const express = require("express"),
  router = express.Router(),
  passwordController = require("../controller/password");

// Retrieve all passwords
router.get("/passwords", passwordController.getAllPasswords);

// Add a new password
router.post("/passwords", passwordController.createNewPassword);

// Get a specific password
router.get("/passwords/:id", passwordController.getPasswordById);

// Delete a specific password
router.delete("/passwords/:id", passwordController.deletePasswordById);

// Update a specific password
router.put("/passwords/:id", passwordController.updatePasswordById);

module.exports = router;
