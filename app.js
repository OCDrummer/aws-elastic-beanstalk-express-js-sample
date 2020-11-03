const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! I am alive!'));

app.listen(port);
console.log(`Hello World from Steve G.!!!`);
console.log(`App running on http://localhost:${port}`);
