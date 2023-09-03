const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  // TODO: Validate and save user to database
  const token = jwt.sign({ userId: 'some-user-id' }, 'your-secret-key', {
    expiresIn: '1h',
  });
  res.json({ token });
};

exports.login = async (req, res) => {
  // TODO: Validate user credentials and fetch user from database
  const token = jwt.sign({ userId: 'some-user-id' }, 'your-secret-key', {
    expiresIn: '1h',
  });
  res.json({ token });
};

