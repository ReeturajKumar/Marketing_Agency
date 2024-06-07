const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader || !tokenHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Auth Error: Token not provided' });
  }

  const token = tokenHeader.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Invalid Token' });
  }
};

module.exports = requireAuth;
