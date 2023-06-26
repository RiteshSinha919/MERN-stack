const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const users = [
    {id: 101, name: 'amber', author: 'zoey'},
    {id: 102, name: 'beast', author: 'yami'},
    {id: 103, name: 'crome', author: 'xeno'},
    {id: 104, name: 'dragon', author: 'wano'},
    {id: 105, name: 'eef', author: 'vorka'},
    {id: 106, name: 'folly', author: 'ulwa'},
    {id: 107, name: 'greta', author: 'tia'},
    {id: 108, name: 'hina', author: 'sonia'},
    {id: 109, name: 'iry', author: 'ruby'},
    {id: 110, name: 'jina', author: 'qina'}
]

app.get('/crud/resource', (req, res) => {
    res.json(users);
});

app.get('/crud/resource/:id', (req, res) => {
    const id = parseInt(req.param.id);
    const user = users.find((a) => a.id === id);

    if(!user){
        return res.status(404).json({ error: "name not found" });
    }

    res.json({ userData: user });
});


app.post('/crud/resource', (req, res) => {
    const { id, name, author } = req.body;

    if(!id || !name || !author){
        return res.status(400).json({ error: 'missing required fields' });
    }

    const user = { id, name, author };
    users.push(user);

    res.status(201).json({ newUser: user });
});

app.put('/crud/resource/:id', (req, res) => {
    const { name, author } = req.body;
    const id = parseInt(req.params.id);

    const user = users.find((a) => a.id === id);

    if(!user){
        return res.status(404).json({error: 'User does not exist'});
    }

    user.name = name || user.name;
    user.author = author || user.author;

    res.json({updatedUser: user});
})

app.delete('/crud/resource/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex((a) => a.id === id);

    if(userIndex === -1){
        return res.status(404).json({error: 'User not found'});
    }

    const user = users.splice(userIndex,1)[0];

    res.json({deletedUser: user});
})

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
})