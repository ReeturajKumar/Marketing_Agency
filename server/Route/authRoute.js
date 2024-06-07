const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const dummyUser = {
  username: 'admin',
  password: 'password',
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === dummyUser.username && password === dummyUser.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
