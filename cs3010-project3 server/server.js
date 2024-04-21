const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
  console.log('Login');
  console.log(req.body);
  res.sendStatus(200);
});

app.post('/registration', (req, res) => {
  console.log('Registration');
  console.log(req.body);
  res.sendStatus(201);
});

app.post('/account', (req, res) => {
  console.log('Account');
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(8080);