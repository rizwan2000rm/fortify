//password.js
const Password = require("../models").Password;

module.exports = {
  // Retrieve all passwords
  async getAllPasswords(req, res) {
    try {
      const passwordCollection = await Password.findAll();
      res.status(201).send(passwordCollection);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // Add a new password
  async createNewPassword(req, res) {
    const { url, username, password } = req.body;

    try {
      const addPassword = await Password.create({
        url,
        username,
        password
      });

      res.status(201).send(addPassword);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // Get a specific password
  async getPasswordById(req, res) {},

  // Delete a specific password
  async deletePasswordById(req, res) {},

  // Update a specific password
  async updatePasswordById(req, res) {}
};
