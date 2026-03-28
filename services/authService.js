const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const userRepo = require('../repositories/userRepository');

const jwt = require('jsonwebtoken');


const register = async (data) => {
    const existing = userRepo.findByEmail(data.email);
    if (existing) throw new Error("Email already registered");

    const hashed = await bcrypt.hash(data.password, 10);
    const user = {
        name: data.name,
        email: data.email,
        password: hashed,
        role: data.role || "attendee"
    };
    return userRepo.createUser(user);
};

const login = async (email, password) => {
    const user = userRepo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

module.exports = { register, login };