const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

let counter = 0;

app.get('/counter', (req, res) => {
   res.json({ counter }); 
});

app.put('/counter/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

app.put('/counter/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

app.listen(port, ( ) => {
    console.log(`Server is live on port ${port}`);
})