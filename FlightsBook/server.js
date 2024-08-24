const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'customer'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.post('/register', (req, res) => {
  const { username, email, password, gender } = req.body;

  const query = 'INSERT INTO customer (username, email, password, gender) VALUES (?, ?, ?, ?)';

  db.query(query, [username, email, password, gender], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error registering');
    }
    res.send('Register successfully!');
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username =='Admin'&& password=='Admin') {
    // window.location.href = './Admin/Admin.htm';
    console.log('helllo');
  }
  const query = 'SELECT * FROM customer WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error logging in');
    }

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});



// Add flight
app.post('/addFlightForm', (req, res) => {
  const { flightNumber, departure, destination } = req.body;

  const query = 'INSERT INTO flights (flightNumber, departure, destination) VALUES (?, ?, ?)';
  db.query(query, [flightNumber, departure, destination], (err, results) => {
    if (err) {
      console.error('Error inserting into the database:', err);
      res.status(500).json({ success: false, message: 'Error adding flight' });
      return;
    }
    res.json({ success: true, message: 'Flight added successfully' });
  });
});

// Search flight
app.post('/searchFlights', (req, res) => {
  const { departure, destination } = req.body;

  const query = 'SELECT * FROM flights WHERE departure = ? AND destination = ?';
  db.query(query, [departure, destination], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Error querying the database');
      return;
    }
    res.json(results);
  });
});


const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Process terminated');
  });
  db.end(() => {
    console.log('Database connection closed');
  });
});
