const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const counts = [
    {counter: 1}
];

app.get('/app/helpful', (req, res) => {
    res.json(counts)
})

app.post('/app/helpful', (req, res) => {
    const count = parseInt(req.params.counter);
    console.log(count);
    if(!count){
        return res.status(400).json({error: "Counter is not updated"});
    }

    counts.counter = count + 1 || counts.counter;

    res.json({updateCounter: counts.counter})

});

app.put('/app/helpful', (req, res) => {
    const count = parseInt(req.params.counter);
    console.log(count);
    if(!count){
        return res.status(404).json({error: "Unable to increase the count"});
    }

    count = count + 1 || count;

    res.json({updateCount: count})
});


app.listen(port, ( ) => {
    console.log(`Server is live on port ${port}`);
});