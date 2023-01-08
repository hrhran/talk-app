const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// POST /api/v1/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    display_name: username,
    avatar: ''
  });
  if (user) {
    res.status(201).json({
      status: 'success',
      name: user.name,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      name: user.name,
      email: user.email,
      access_token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

// GET /api/users/profile
const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  getProfile
};
