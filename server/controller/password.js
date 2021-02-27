//password.js
const Password = require("../models").Password;

module.exports = {
  // Retrieve all passwords
  async getAllPasswords(req, res) {
    try {
      const passwordCollection = await Password.findAll();
      res.status(200).send(passwordCollection);
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
      res.status(204).send(error);
    }
  },

  // Get a specific password
  async getPasswordById(req, res) {
    const passwordId = req.params["id"];
    try {
      const getPassword = await Password.findOne({ where: { id: passwordId } });
      res.status(200).send(getPassword);
    } catch (error) {
      console.log(error);
      res.status(204).send(error);
    }
  },

  // Delete a specific password
  async deletePasswordById(req, res) {
    const passwordId = req.params["id"];
    try {
      const deletePassword = await Password.destroy({
        where: {
          id: passwordId
        }
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(204).send(error);
    }
  },

  // Update a specific password
  async updatePasswordById(req, res) {
    const passwordId = req.params["id"];
    const { url, username, password } = req.body;
    try {
      const updatePassword = await Password.update(
        { url: url, username: username, password: password },
        {
          where: {
            id: passwordId
          }
        }
      );
      res.status(201).send(updatePassword);
    } catch (error) {
      console.log(error);
      res.status(204).send(error);
    }
  }
};
