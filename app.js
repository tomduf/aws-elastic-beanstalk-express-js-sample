const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Bonjour tout le monde !</h1><p>Comment ça va ?<br>Cette fois, la modif se fait en local</p>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
