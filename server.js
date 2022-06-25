const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "project 4");

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "movies.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen(3000, () => {
    console.log('listening on port 3000......');
})