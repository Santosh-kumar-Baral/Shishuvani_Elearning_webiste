const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mainapp', { useNewUrlParser: true });

const User = mongoose.model('User', {
  username: String,
  email: String,
  passwordHash: String
});

function generateAccessToken(user) {
  return jwt.sign(user, 'secret');
}

// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;
//   const passwordHash = await bcrypt.hash(password, 10);
//   const user = new User({ username, email, passwordHash });
//   user.save((err, user) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error registering new user.');
//     } else {
//       const token = generateAccessToken({ username, email });
//       res.json({ token });
//     }
//   });
// });

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const passwordHash = await bcrypt.hash(password, 10);
      const user = new User({ username, email, passwordHash });
      await user.save();
      const token = generateAccessToken({ username, email });
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error registering new user.');
    }
  });
  








app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send('User not found.');
  }
  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    return res.status(401).send('Invalid password.');
  }
  const token = generateAccessToken({ username: user.username, email });
  res.json({ token });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});