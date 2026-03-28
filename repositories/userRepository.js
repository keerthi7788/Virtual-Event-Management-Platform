const { v4: uuidv4 } = require('uuid');
const users = [];

const createUser = (user) => {
    user.id = uuidv4();
    user.createdAt = new Date();
    users.push(user);
    return user;
};

const findByEmail = (email) => users.find(u => u.email === email);
const findById = (id) => users.find(u => u.id === id);

module.exports = { createUser, findByEmail, findById };