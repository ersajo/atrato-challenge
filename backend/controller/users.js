const users = require('../../data/data.json');

const getUsers = (req, res) => {
  res.status(201).json(users);
}

const createUser = (req, res) => {
  const user = {
    ...req.body,
    id: users.length + 1
  };
  users.push(user)
  res.status(201).json(user)
}

module.exports = {
  getUsers,
  createUser
};