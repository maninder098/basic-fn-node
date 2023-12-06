const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const secretKey = '22323232efdffgjnk;sdbkhgclb';

app.use(express.json());

const users = [
    { id: 1, username: 'ajay@gmail.com', password: '1234' },
    { id: 2, username: 'rahul@gmail.com', password: '9876' },
];


app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function (entry) {
        if (entry.username === username && entry.password === password) {
            return entry;
        }

    });

    if (user) {
        const token = jwt.sign({ id: user.id }, secretKey);
        const userResult = {
            id: user.id,
            username: user.username,
            password: user.password,
            token: token
        }

        const response = {
            success: true,
            msg: "User Details",
            data: userResult
        }

        res.status(200).json(response);
    } else {
        res.status(200).send({
            success: false,
            message: 'Invalid username or password'
        });
    }
});

app.listen(6000, () => {
    console.log(`Server listening at 6000 port`);
});