const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Bonjour tout le monde ! Comment ça va ?<br>Cette fois, la modif se fait en local'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
