const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

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

app.listen(port, () => {
  console.log('Example applistening on port ${port}');
});
