const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// app.get('/', (req, res) => {
// res.send('Hello World!');
// });
let id = 0;
let db = [
  { id: ++id, latitude: 60, longitude: 60 },
  { id: ++id, latitude: 62, longitude: 63 },
  { id: ++id, latitude: 65, longitude: 63 },
];

app.get('/randomize', (req, res) => {
  const number1 = Math.floor(Math.random() * 3);
  const number2 = Math.floor(Math.random() * 3);
  const number3 = Math.floor(Math.random() * 3);
  if (number1 === number2 && number1 === number3) {
    res.send(
      'number1:' +
        number1 +
        '\n' +
        'number2:' +
        number2 +
        '\n' +
        'number3:' +
        number3 +
        '\n' +
        'succes!',
    );
  } else {
    res.send(
      'number1:' +
        number1 +
        '\n' +
        'number2:' +
        number2 +
        '\n' +
        'number3:' +
        number3,
    );
  }
});
app.get('/locations', (req, res) => {
  res.json(db);
  // res.send('Getting all locations');
});
app.get('/locations/:muuttuja([0-9]+)', (req, res) => {
  const id = parseInt(req.params.muuttuja);
  const location = db.find((item) => item.id === id);
  res.json(location);
  // res.send('Getting alocation with id: ' + id);
});
app.post('/locations', (req, res) => {
  const location = req.body;
  location.id = ++id;
  // console.log(location);
  db.push(location);
  // res.send('Adding new location');
});
app.delete('/locations/:muuttuja([0-9]+)', (req, res) => {
  const id = parseInt(req.params.muuttuja);
  db = db.filter((item) => item.id !== id);
  // res.send('Delete location with id:' + id);
});

//app.get('/locations', (req, res) => {
//  res.sendFile(__dirname + '/locations.html');
// });

app.listen(port, () => {
  console.log('Example applistening on port ${port}');
});
