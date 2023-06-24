const express = require("express");
const app = express();
const path = require('path')
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,'app/build')));

app.get('/app/items', (req, res) => {
    const items = [ {name: 'john', age: 32},{name: 'wick', age: 20}];
    res.json(items);
})

app.get('/anime', (req,res) => {
    res.sendFile(path.join(__dirname,'app/build/index.html'));
})

app.get('/*', (req,res) => {
    res.send("Home");
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})