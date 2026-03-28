const express = require('express');
const router = express.Router();

// Admin credentials — .env-ல இருக்கணும்
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'grocery-admin-secret-2026';

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  console.log('Login attempt:', username, password);
  console.log('Expected:', ADMIN_USERNAME, ADMIN_PASSWORD);

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ 
      token: ADMIN_TOKEN,
      message: 'Login successful' 
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;