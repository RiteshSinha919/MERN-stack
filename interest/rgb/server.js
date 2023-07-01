const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let red = 0;
let green = 0;
let blue = 0;


app.get('/pallet', (req, res) => {
    res.json({ red, green, blue });
});

app.put('/pallet/increase/:color', (req, res) => {
    const color = req.params.color;
    if(color === 'red' && red < 255){
        red++;
    } else if(color === 'green' && green < 255){
        green++;
    } else if(color === 'blue' && blue < 255){
        blue++;
    }

    res.json({ red, green, blue });
});

app.put('/pallet/decrease/:color', (req, res) => {
    const color = req.params.color;
    if(color === 'red' && red > 0){
        red--;
    } else if(color === 'green' && green > 0){
        green--;
    } else if(color === 'blue' && blue > 0){
        blue--;
    }

    res.json({ red, green, blue });
});

app.listen(port, ( ) => {
    console.log(`Server is live on port ${port}`);
});